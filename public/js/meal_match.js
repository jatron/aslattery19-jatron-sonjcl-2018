function main() {
  const profileId = window.location.search.substring(1);
    get('/api/meals', {'_id': profileId}, function(mealsData) {
        //console.log(mealsData);
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
    const cards = document.getElementsByClassName('card');

    for (var h = 0; h < cards.length; h++) {

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
        infoIcon.setAttribute('aria-hidden', 'true');
        infoIcon.setAttribute('style', "font-size:30px");
        infoButton.appendChild(infoIcon);


        // add profile button
        var profileButton = document.createElement("button");
        profileButton.setAttribute('type', "button");
        profileButton.setAttribute("class", "btn profile-button");
        buttonGroupDiv.appendChild(profileButton);

        var profileButtonIcon = document.createElement("i");
        profileButtonIcon.setAttribute("class", "fa fa-user-circle");
        profileButtonIcon.setAttribute("style", "font-size:30px")
        profileButtonIcon.setAttribute('aria-hidden', 'true');
        profileButton.appendChild(profileButtonIcon);


    }
}

function renderButtons() {

const cards = document.getElementsByClassName("card-img");
//console.log(cards);
for (var i = 0; i < cards.length; i++) {
    console.log(cards[i]);
    // toggle green border and like icon when clicked
    cards[i].addEventListener("click", function(){
        //toggle green border
        this.classList.toggle('selected');
        //toggle like icon
        const checkIcon = document.getElementById(this.id + '-likeIcon');
        if (checkIcon.style.opacity == "100") {
            checkIcon.setAttribute("style", "opacity:0");
        }
        else {
            checkIcon.setAttribute("style", "opacity:100");
            
        }
    });
}

// create slider with information when info button is clicked
const infoButtons = document.getElementsByClassName("info-button");
for (var j = 0; j < infoButtons.length; j++) {
    infoButtons[j].addEventListener("click", function(){
        console.log(this);
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
        alert("display profile info here")
    })
}

const nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", function(){
    alert("refresh page and sent new GET request");
})
}



main();
