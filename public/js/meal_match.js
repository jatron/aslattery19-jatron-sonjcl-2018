function main() {
    const profileId = window.location.search.substring(1);
    // added navbar render
    get('/api/whoami', {}, function(user) {
    renderNavbar(user);
    });
    get('/api/images', {'userId': profileId}, function(mealsData) {
        renderMeals(mealsData);
        renderButtons(mealsData);

    }, function(){
        console.log("failure");
    });


}

function renderUserData(user) {
  // render user's name
  const nameContainer = document.createElement('p');
  nameContainer.innerHTML = user.name;
  document.body.appendChild(nameContainer);
}

function renderMeals(mealsData) {
    const meals = mealsData.meals;
    const cards = document.getElementsByClassName('card-inverse');

    for (var h = 0; h < meals.length; h++) {

        // load image
        var img = document.createElement("img");
        img.setAttribute("id", meals[h].key);
        img.className = "card-img";
        img.setAttribute("src", meals[h].url);
        cards[h].appendChild(img);

        // add overlay with information
        var overlay = document.createElement("div");
        overlay.setAttribute("id", meals[h].key + "-info-overlay");
        overlay.className = 'overlay';
        cards[h].appendChild(overlay)

        var overlayInfo = document.createElement("div");
        overlayInfo.setAttribute("class", "information");
        overlay.appendChild(overlayInfo);

        var description = document.createElement("p");
        description.innerHTML = meals[h].description;
        overlayInfo.appendChild(description);

        var ingredientsTitle = document.createElement("b");
        ingredientsTitle.innerHTML = "Ingredients:"
        overlayInfo.appendChild(ingredientsTitle);

        var ingredients = document.createElement("p");
        ingredients.innerHTML = meals[h].ingredients;
        overlayInfo.appendChild(ingredients);

        var allergensTitle = document.createElement("b");
        allergensTitle.innerHTML = "Allergens:";
        overlayInfo.appendChild(allergensTitle);

        var allergens = document.createElement("p");
        allergens.innerHTML = meals[h].allergens;
        overlayInfo.appendChild(allergens);

        // add like icon div
        var checkIconDiv = document.createElement("div");
        checkIconDiv.className = "check-icon";
        checkIconDiv.setAttribute("id", meals[h].key + '-likeIcon');
        cards[h].appendChild(checkIconDiv);
        //add like icon
        var checkIcon = document.createElement("i");
        checkIcon.className = "fa fa-thumbs-o-up"
        checkIcon.setAttribute("aria-hidden", "true");
        checkIconDiv.appendChild(checkIcon);
        checkIcon.setAttribute("style", "position:  absolute;top: 35%;left: 42%;display: inline-block;");


        //add buttons
        // add button group div
        var buttonGroupDiv = document.createElement("div");
        buttonGroupDiv.setAttribute("class", "btn-group");
        buttonGroupDiv.setAttribute("role", "group");
        cards[h].appendChild(buttonGroupDiv);

        //add info button
        var infoButton = document.createElement('button');
        infoButton.setAttribute('type', "button");
        infoButton.setAttribute("id", meals[h].key + '-info');
        infoButton.setAttribute('class', "btn info-button");
        buttonGroupDiv.appendChild(infoButton);
        // add info icon
        var infoIcon = document.createElement('i');
        infoIcon.setAttribute('class', 'fa fa-info-circle');
        infoIcon.setAttribute('id', 'fa-info-circle');
        infoIcon.setAttribute('aria-hidden', 'true');
        infoIcon.setAttribute('style', "font-size:30px");
        infoButton.appendChild(infoIcon);


        // add profile button
        var profileButton = document.createElement("button");
        profileButton.setAttribute('type', "button");
        profileButton.setAttribute("class", "btn profile-button");
        profileButton.setAttribute("data-toggle", "modal");
        profileButton.setAttribute("data-target", "#profileModal");
        profileButton.setAttribute("id", meals[h].key);
        buttonGroupDiv.appendChild(profileButton);


        var profileButtonIcon = document.createElement("i");
        profileButtonIcon.setAttribute("class", "fa fa-user-circle");
        profileButtonIcon.setAttribute("id", "fa-user-circle");
        profileButtonIcon.setAttribute("style", "font-size:28px")
        profileButtonIcon.setAttribute('aria-hidden', 'true');
        profileButton.appendChild(profileButtonIcon);


    }
}

function renderButtons() {

const cards = document.getElementsByClassName("card-img");
//console.log(cards);
for (var i = 0; i < cards.length; i++) {
    // toggle green border and like icon when clicked
    cards[i].addEventListener("click", function(){
        //toggle green border
        //this.classList.toggle('selected');
        this.classList.add('selected');

        // only let them like - no unliking
        const checkIcon = document.getElementById(this.id + '-likeIcon');
        checkIcon.setAttribute("style", "opacity:100");


        post('api/like', {userId : window.location.search.substring(1), mealKey : this.id}, function(){
            console.log("like was a success!");
        }, function(){
            console.log("like failed");
        }); // Note: userId is user that is currently logged in 


        // //toggle like icon
        // const checkIcon = document.getElementById(this.id + '-likeIcon');
        // if (checkIcon.style.opacity == "100") {
        //     checkIcon.setAttribute("style", "opacity:0");
        // }
        // else {
        //     checkIcon.setAttribute("style", "opacity:100");
            
        // }
    });
}

// create slider with information when info button is clicked
const infoButtons = document.getElementsByClassName("info-button");
for (var j = 0; j < infoButtons.length; j++) {
    infoButtons[j].addEventListener("click", function(){
        const overlay = document.getElementById(this.id + '-overlay');
        if (overlay.style.height == "100%") {
            overlay.setAttribute("style", "height:0%");
        }
        else {
            overlay.setAttribute("style", "height:100%");
            //overlay.setAttribute("style", "z-index:1");
        }

        //document.getElementById(this.id + '')
        
    });
}

const profileButtons = document.getElementsByClassName("profile-button")
for (var k = 0; k < profileButtons.length; k++) {
    profileButtons[k].addEventListener("click", function(){
        get('api/meal_author_profile', {mealKey : this.id}, function(authorData){
            document.getElementById("profileName").innerHTML = authorData.name;
            document.getElementById("profilePic").setAttribute("src", authorData.profilePicture);
            // document.getElementById("profilePic").setAttribute("style", "height:100px;width:100px");
            document.getElementById("bioDiv").innerHTML = authorData.bio;
            
            mealCards = document.getElementsByClassName("mealPhoto");
            
            for (var a=0; a < 4; a++) {
                meals = authorData.meals;
                mealCards[a].setAttribute("src", meals[a].url);
            }

        }, function(){
            console.log("failed to get author data");
        });
    })
}

const nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", function(){
    location.reload();
})
}



main();
