/*
To be handled: make editpage responsive to edits:
let user 
        type into bio/give input
        add meals (image, name, allergens)
        delete meals

IMPLEMENT "DONE" BUTTON
         
*/
// bloop

var albumBucketName = 'lets-eat-images';
var bucketRegion = 'us-east-1';
var IdentityPoolId = 'us-east-1:3c377206-22a6-4f06-9d35-f752139cdb1c';

//update the configurations for AWS to use our credentials
AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

//create an S3 instance that we can use to access the database
var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: albumBucketName}
});

function main() {
  const profileId = window.location.search.substring(1);

  get('api/profile', {userId : profileId}, function(profileUser) {
    renderUserData(profileUser);
    }, function() {
    console.log("Couldn't access user data :(");
    });

  get('/api/whoami', {}, function(user) {
    renderNavbar(user);
  });
}

function renderUserData(user) {
    const userId = user.userId;
    // rendering name
    const nameContainer = document.getElementById('name-container');
    const nameHeader = document.createElement('h1');
    nameHeader.setAttribute('style', 'font-weight:300;');
    nameHeader.innerHTML = user.name;
    nameContainer.prepend(nameHeader);

    // rendering school
    // const schoolHeader = document.createElement('h2');
    // nameHeader.appendChild(schoolHeader);

    //render profile pic
    const profileImage = document.getElementById('user-profile-image');
    profileImage.setAttribute('src', user.profilePicture);

    // render bio w/jquery, let user edit
    $("#user-bio-text").html(user.bio);

    //render done btn take user back to profile page
    document.getElementById('done-btn').setAttribute('href', "profile?" + userId); 


    //upload new meal!
    const addMealBtn = document.getElementById("add-meal-btn");
    addMealBtn.addEventListener("click", function(){

        const files = document.getElementById("new-meal-image").files;
        if (!files.length) {
            return alert('Please choose a file to upload first.');
        }
        const file = files[0];

        // add meal to our mLab database
        const newMealTagline = document.getElementById("new-meal-tagline").value;
        // console.log(newMealTagline);
        const newMealDescription = document.getElementById("new-meal-description").value;
        // console.log(newMealDescription);
        const newMealIngredients = document.getElementById("new-meal-ingredients").value;
        // console.log(newMealIngredients);
        const newMealAllergens = document.getElementById("new-meal-allergens").value;
        if (!(newMealAllergens)) {
            newMealAllergens = "none";
        }
        // console.log(newMealAllergens);

        // make JSON bio obj
        const newMealObject = {};
        newMealObject.userId = userId;
        newMealObject.meal = {};
        newMealObject.meal.tagline = newMealTagline;
        newMealObject.meal.description = newMealDescription;
        newMealObject.meal.ingredients = newMealIngredients;
        newMealObject.meal.allergens = newMealAllergens;
        console.log(newMealObject);

        post('api/upload_meal', newMealObject, function(uploadMealResponse) {
            console.log("meal uploaded to mLab!");
            // add photo to our s3 database
            const fileKey = uploadMealResponse.mealId;
            // TODO: right now, we only support uploading jpg files
            s3.upload({
                Key             : fileKey,
                Body            : file,
                ACL             : 'public-read',
                ContentType     : 'image/jpg'
            }, function(err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Successfully uploaded meal.');
                location.reload();
            });
        }, function() {
            console.log("Couldn't add meal");
        });
    });

    // rendering cookbook
    const cookbookCard = document.getElementById('meals-container');

    const firstNineMeals = user.meals.slice(0,9);
    console.log(firstNineMeals);
    firstNineMeals.forEach(renderMeals);

    function renderMeals(meal, index, arr) {
    cards = document.getElementsByClassName("card card-inverse");

    // let li = document.createElement('li');
    //const card = document.createElement('div');
    const card = cards[index];
    card.setAttribute("style", "display:inline-block");
    console.log(card);
    //card.setAttribute('id', meal.name);
    //card.className = 'mt-4';


    const mealImage = document.createElement('img');
    mealImage.className = 'meal-image-url';
    mealImage.setAttribute('src', meal.url);
    mealImage.className = 'card-img';
    mealImage.setAttribute("id", meal.key);
    console.log(mealImage.id);

    card.appendChild(mealImage);


    // add overlay with information
    var overlay = document.createElement("div");
    overlay.setAttribute("id", meal.key + "-info-overlay");
    overlay.className = 'overlay';
    card.appendChild(overlay)

    var overlayInfo = document.createElement("div");
    overlayInfo.setAttribute("class", "information");
    overlay.appendChild(overlayInfo);

    var description = document.createElement("p");
    description.innerHTML = meal.description;
    overlayInfo.appendChild(description);

    var ingredientsTitle = document.createElement("b");
    ingredientsTitle.innerHTML = "Ingredients:"
    overlayInfo.appendChild(ingredientsTitle);

    var ingredients = document.createElement("p");
    ingredients.innerHTML = meal.ingredients;
    overlayInfo.appendChild(ingredients);

    var allergensTitle = document.createElement("b");
    allergensTitle.innerHTML = "Allergens:";
    overlayInfo.appendChild(allergensTitle);

    var allergens = document.createElement("p");
    allergens.innerHTML = meal.allergens;
    overlayInfo.appendChild(allergens);


    var buttonGroupDiv = document.createElement("div");
    buttonGroupDiv.setAttribute("class", "btn-group");
    buttonGroupDiv.setAttribute("id", "button-group");
    buttonGroupDiv.setAttribute("role", "group");
    card.appendChild(buttonGroupDiv);

    //add info button
    var infoButton = document.createElement('button');
    infoButton.setAttribute('type', "button");
    infoButton.setAttribute("id", meal.key + '-info');
    infoButton.setAttribute('class', "btn info-button");
    buttonGroupDiv.appendChild(infoButton);
    // add info icon
    var infoIcon = document.createElement('i');
    infoIcon.setAttribute('class', 'fa fa-info-circle');
    infoIcon.setAttribute('id', 'fa-info-circle');
    infoIcon.setAttribute('aria-hidden', 'true');
    infoIcon.setAttribute('style', "font-size:30px");
    infoButton.appendChild(infoIcon);


    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn delete-btn';
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('style', "position:absolute;")
    deleteBtn.innerHTML = 'Delete';
    buttonGroupDiv.appendChild(deleteBtn);

    // delete image here/send request to server to delete, reload page
    deleteBtn.addEventListener("click", function(){
        // make JSON delete obj
        const deleteMealObject = {};
        deleteMealObject.mealKey = meal.key;
        // console.log(deleteMealObject);
        //post JSON delete obj
        post('api/delete_meal', deleteMealObject, function() {
        console.log("meal deleted!");
        }, function() {
        console.log("Couldn't delete meal :(");
        });
        // make deleted meal hidden:
        card.style.display = "none";
    }); 


    // make change bio buttton functional 
    const changeBioBtn = document.getElementById("done-btn");
    changeBioBtn.addEventListener("click", function(){
        const newUserBioText = document.getElementById("user-bio-text").value;
        console.log(newUserBioText);
        // make JSON bio obj
        const newBioObject = {};

        newBioObject.userId = userId;
        newBioObject.bio = newUserBioText;
        //post JSON bio obj
        post('api/bio', newBioObject, function() {
        console.log("bio uploaded!");
        }, function() {
        console.log("Couldn't change bio");
        });
    });

    
    //cookbookCard.appendChild(card);
    // mealList.appendChild(card);
};

    // cookbookCard.appendChild(mealCards);

}

main();

