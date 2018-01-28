// client side javascript for messages page

// profileUser = {
//         matches            :
//         [
//           {
//             userId  :   "1234",
//             name    :   "bob"
//           },
//           {
//             userId  :   "5678",
//             name    :   "alexis"
//           },
//           {
//             userId  :   "9000",
//             name    :   "morty"
//           }
//         ]
//     }


function main() {
    const profileId = window.location.search.substring(1); // returns url query w/o "?"
    // get all profile info needed to render user profile
    // add user string later from profileId
    // make below work once server routes work
    get('api/matches', {userId : profileId}, function(matchObj) {
    renderMatches(matchObj);
    }, function() {
    console.log("Couldn't access matches :(");
    });

    get('/api/whoami', {}, function(user) {
    renderNavbar(user);
    });

    get('api/profile', {userId : profileId}, function(userData) {
        name = userData.name;
        socket(name);
    }, function(){
        console.log("was unable to get user info :(");
    });
    
}

function socket(name) {
    var socket = io();
    socket.on('chat message', function(msg){
             $('#messages').append($('<li>').text(name + ": " + msg));
         });
    //socket.on("new-match")
    
}


function renderMatches(matchObj){
    const matches = matchObj.matches;
    // var template = $('#match-template');
    console.log(matches);
    matches.forEach(function(match) {
        // // Clone template
        // var newMatch = template.clone();

        // // Update the post
        // newMatch.find('.match-btn').text(match.name);
        // // make matches clickable
        // // matchBtn = newMatch.find('.match-btn')
        // // document.getElementById('match-btn').addEventListener("click", function(match){
        // //     // GET meals for that user
        // //     console.log(match.name);
        // //     // renderMatchMeals(match);
        // //     });

        // // Add new post into DOM
        // template.after(newMatch);

        // // Make visible
        // newMatch.removeClass('template');
        console.log("hello");
        const matchBar = document.getElementById("match-bar");
        const matchCard = document.createElement("div");
        const matchBtn = document.createElement("btn");
        console.log("match name = " + match.name);
        matchCard.className = 'mt-4 card';
        matchBtn.setAttribute("type", "button");

        matchBtn.value = match.name;
        matchBtn.innerHTML = match.name;
        console.log(matchBtn.value);


        //make match btn clickable and render match's meals
        matchBtn.addEventListener("click", function(){
            // GET meals for that user
            console.log(match.name);
            renderMatchMeals(match);
        });

        matchCard.appendChild(matchBtn);
        matchBar.appendChild(matchCard);
        console.log("match cards appended?");



        
        
        // newMatch.removeId('match-btn');
    });

        

        function renderMatchMeals(match){
            // FIX THIS!! IMPLEMENT RENDER MEALS STUFF!! to show on meal render bar!!
            // add get request to pull meals from db
            // render meals in rightmost col ("meals-bar")
            const mealsBar = document.getElementById('meals-bar');
            mealsBar.innerHTML = "Meal Bar";  // clear HTML before loading new user's meals
            console.log("in render meals function: match ID = " + match.userId);
            get('api/profile', {userId : match.userId}, function(user) {
                
                user.meals.forEach(renderMeals);  // render all meals for the match
                }, function() {
                console.log("Couldn't access user data :(");
            });
            

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

                mealsBar.appendChild(card);


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
}





main();