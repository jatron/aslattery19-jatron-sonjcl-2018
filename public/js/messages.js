// client side javascript for messages page

profileUser = {
        matches            :
        [
          {
            userId  :   "1234",
            name    :   "bob"
          },
          {
            userId  :   "5678",
            name    :   "alexis"
          },
          {
            userId  :   "9000",
            name    :   "morty"
          }
        ]
    }


function main() {
    const profileId = window.location.search.substring(1); // returns url query w/o "?"

    // get all profile info needed to render user profile
    // add user string later from profileId
    // make below work once server routes work
    // get('api/matches', {userId : profileId}, function(profileUser) {
    // renderUserData(profileUser);
    // }, function() {
    // console.log("Couldn't access user data :(");
    // });

    renderUserData(profileUser);

    get('/api/whoami', {}, function(user) {
    renderNavbar(user);
    });

    
}



function renderUserData(user) {
    // render match bar
    renderMatches(user.matches);

    function renderMatches(matches){
        var template = $('#match-template');
        console.log(matches);
        matches.forEach(function(match) {
        // Clone template
        var newMatch = template.clone();

        // Update the post
        newMatch.find('.match-text').text(match.name);

        // Add new post into DOM
        template.after(newMatch);

        // Make visible
        newMatch.removeClass('template');
        });

    };


// tells socket what to do when we get a new message
// function newMessage(msg, user) {
//     console.log(msg);
//     console.log(user);
//     //const messageDiv = document.createElement("div");
//     // const messagesBar = document.getElementById("messages-bar");
//     // messageDiv.innerHTML = msg;
//     // messagesBar.appendChild(messageDiv);

// }





    // // rendering cookbook
    // const cookbookCard = document.getElementById('cookbook-card');
    // user.meals.forEach(renderMeals);

    // function renderMeals(meal, index, arr) {
    //     // let li = document.createElement('li');
    //     const card = document.createElement('div');
    //     card.setAttribute('id', meal.name);
    //     card.className = 'mt-4';

    //     const cardBody = document.createElement('div');
    //     cardBody.className = 'card-body';
    //     card.appendChild(cardBody);

    //     const mealImage = document.createElement('img');
    //     mealImage.className = 'meal-image-url';
    //     mealImage.setAttribute('src', meal.url);
    //     mealImage.className = 'rounded img-fluid';
    //     cardBody.appendChild(mealImage);

    //     cookbookCard.appendChild(card);
    //     // mealList.appendChild(card);
    // };

    // cookbookCard.appendChild(mealCards);

}





main();