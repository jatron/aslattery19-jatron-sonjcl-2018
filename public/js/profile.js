// client side javascript for Profile page
function main() {
    const profileId = window.location.search.substring(1); // returns url query w/o "?"

    // get all profile info needed to render user profile
    // add user string later from profileId
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
	// rendering name
	const nameContainer = document.getElementById('name-container');
	const nameHeader = document.createElement('h1');
	nameHeader.innerHTML = user.name;
    nameContainer.prepend(nameHeader);

    // rendering school
    const schoolHeader = document.createElement('h2');
    schoolHeader.innerHTML = user.school;
    nameHeader.appendChild(schoolHeader);

    //render profile pic
    const profileImage = document.getElementById('user-profile-image');
    profileImage.setAttribute('src', user.url);

    // render bio w/jquery
    $("#profile-description").html(user.bio);

	// rendering cookbook
	const cookbookCard = document.getElementById('cookbook-card');
	user.meals.forEach(renderMeals);

	function renderMeals(meal, index, arr) {
		// let li = document.createElement('li');
        const card = document.createElement('div');
        card.setAttribute('id', meal.name);
        card.className = 'mt-4';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        card.appendChild(cardBody);

        const mealImage = document.createElement('img');
        mealImage.className = 'meal-image-url';
        mealImage.setAttribute('src', meal.url);
        mealImage.className = 'rounded img-fluid';
        cardBody.appendChild(mealImage);

        // make button box div so that buttons are together
        const btnBox = document.createElement('div')
        btnBox.className = 'btn-group'

        renderDropdown(meal.tagline, 'tagline');
        renderDropdown(meal.description, 'description');
        renderDropdown(meal.allergens, 'allergens');
        renderDropdown(meal.ingredients, 'ingredients');


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

main();
