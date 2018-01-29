// client side javascript for messages page

function main() {
    const profileId = window.location.search.substring(1); // returns url query w/o "?"
    // get all profile info needed to render user profile
    // add user string later from profileId
    // make below work once server routes work
    get('api/matches', {userId : profileId}, function(matchObj) {
        get('api/profile', {userId: profileId}, function(profile) {
            renderMatches(matchObj, profile.name);
        }, function() {
            console.log("Couldn't access profile :(");
        });
    }, function() {
        console.log("Couldn't access matches :(");
    });

    get('/api/whoami', {}, function(user) {
        renderNavbar(user);
    });

}

function socket(current_user_name, namespace_id) {
    // join the correct namespace
    var socket = io(namespace_id);

    // set send button id to namespace id so the message goes to the correct match
    var button = document.getElementsByClassName("send-button");
    const button_id = namespace_id.substr(1); // remove '/' character at the beginning of namespace_id
    button[0].setAttribute("id", button_id);

    socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg.userName + ": " + msg.message));
    });

    $('form').submit(function(){
        socket.emit('chat message', {
            userName    : current_user_name,
            message     : $('#' + button_id).val()
        });
        $('#' + button_id).val('');
        return false;
    });
}

function renderMatches(matchObj, current_user_name){
    const profileId = window.location.search.substring(1); // returns url query w/o "?"
    const matches = matchObj.matches;

    matches.forEach(function(match) {

        const matchBar = document.getElementById("match-bar");
        const matchCard = document.createElement("div");
        const matchBtn = document.createElement("btn");

        console.log("INFO: ", match);
        const namespace_id = match.namespace;
        console.log("NAMESPACE: ", namespace_id);
        // set button ID to socket room id
        matchBtn.setAttribute("id", namespace_id);

        console.log("button id: " + matchBtn.id);
        matchCard.className = 'mt-4 card';
        matchBtn.setAttribute("type", "button");

        matchBtn.value = match.name;
        matchBtn.innerHTML = match.name;


        //make match btn clickable and render match's meals
        matchBtn.addEventListener("click", function(){
            // GET meals for that user
            renderMatchMeals(match);


            const namespace_id = this.id;

            //call socket function to switch the room
            socket(current_user_name, namespace_id);

        });

        matchCard.appendChild(matchBtn);
        matchBar.appendChild(matchCard);

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
    }
}

main();
