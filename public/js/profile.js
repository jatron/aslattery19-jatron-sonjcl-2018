// client side javascript for Profile page
function main() {
    get('/api/whoami', {}, function(user) {
    renderNavbar(user);
    });

    const profileId = window.location.search.substring(1); // returns url query w/o "?"
    console.log(profileId);
    // get all profile info needed to render user profile
    // add user string later from profileId
    get('api/profile', {userId : profileId}, function(profileUser) {
    renderUserData(profileUser);
    renderButtons()
    }, function() {
    console.log("Couldn't access user data :(");
    });

}



function renderUserData(user) {
    console.log(user.userId);
	// rendering name
	const nameContainer = document.getElementById('name-container');
	const nameHeader = document.createElement('h1');
	nameHeader.innerHTML = user.name;
    nameHeader.setAttribute('style', 'font-weight:300;');
    nameContainer.prepend(nameHeader);

    // rendering school
    // const schoolHeader = document.createElement('h2');
    // schoolHeader.innerHTML = user.school;
    // nameHeader.appendChild(schoolHeader);

    //render profile pic
    const profileImage = document.getElementById('user-profile-image');
    profileImage.setAttribute('src', user.profilePicture);

    // render bio w/jquery
    $("#profile-description").html(user.bio);

    // direct edit button
    const editProfileBtn = document.getElementById('edit-profile-btn');
    editProfileBtn.setAttribute('href', "profile_edit?" + user.userId);
    // $("#edit-profile-btn").href("profile_edit?" + userId);

	// rendering cookbook
	const cookbookCard = document.getElementById('meals-container');
	user.meals.forEach(renderMeals);

	function renderMeals(meal, index, arr) {
        cards = document.getElementsByClassName("card card-inverse");
        //console.log(meal);



		// let li = document.createElement('li');
        //const card = document.createElement('div');
        const card = cards[index];
        card.setAttribute('id', meal.name);
        //card.className = 'mt-4';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        card.appendChild(cardBody);

        const mealImage = document.createElement('img');
        mealImage.className = 'meal-image-url';
        mealImage.setAttribute('src', meal.url);
        mealImage.className = 'rounded img-fluid';
        mealImage.setAttribute("id", meal.key);
        console.log(mealImage.id);

        cardBody.appendChild(mealImage);


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


        // make button box div so that buttons are together
        // const btnBox = document.createElement('div')
        // btnBox.className = 'btn-group'

        // renderDropdown(meal.tagline, 'tagline');
        // renderDropdown(meal.description, 'description');
        // renderDropdown(meal.allergens, 'allergens');
        // renderDropdown(meal.ingredients, 'ingredients');


        // render dropdown button
        function renderDropdown(item, itemName) {
            const dropdownDiv = document.createElement('div');
            dropdownDiv.className = 'dropdown col-xs-1';
            
            const dropdownBtn = document.createElement('button');
            dropdownBtn.className = 'btn btn-secondary dropdown-toggle';
            dropdownBtn.setAttribute('type', 'button');
            dropdownBtn.setAttribute('data-toggle', 'dropdown');
            dropdownBtn.setAttribute('aria-haspopup', 'true');
            dropdownBtn.setAttribute('aria-expanded', 'false');
            dropdownBtn.setAttribute('id', 'dropdownMenuButton');
            dropdownBtn.innerHTML = itemName;
            dropdownDiv.appendChild(dropdownBtn);
 
            // rendering dropdown menu
            const dropdownMenu = document.createElement('div');
            dropdownMenu.className = 'dropdown-menu';
            dropdownBtn.setAttribute('aria-labelledby', 'dropdownMenuButton');
            dropdownDiv.appendChild(dropdownMenu);

            // FUTURE: ADD MENU ITEM DATA, ONE FOR EACH OF INFO SECTIONS
            // i.e. ingredients, allergy warnings
            const menuItem = document.createElement('a');
            menuItem.className = 'dropdown-item';
            menuItem.innerHTML = item;

            // add blurb
            dropdownMenu.appendChild(menuItem);

            btnBox.appendChild(dropdownDiv);
            // btnBox.setAttribute('id', meal.key + '-btnbox');
            card.appendChild(btnBox);
            // card.setAttribute('id', meal.key + '-card');


        };

        cookbookCard.appendChild(card);
		// mealList.appendChild(card);
    };

	// cookbookCard.appendChild(mealCards);

}

function renderButtons() {

// create slider with information when info button is clicked
const infoButtons = document.getElementsByClassName("info-button");
for (var j = 0; j < infoButtons.length; j++) {
    console.log(infoButtons[j]);
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
}
main();
