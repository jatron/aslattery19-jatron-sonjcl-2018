function main() {
  const profileId = window.location.search.substring(1);
  get('/api/user', {'_id': profileId}, function(profileUser) {
    renderUserData(profileUser);
  });
}

function renderUserData(user) {
  // render user's name
  const nameContainer = document.createElement('p');
  nameContainer.innerHTML = user.name;
  document.body.appendChild(nameContainer);
}



const cards = document.getElementsByClassName("card-img-top");
for (var i = 0; i < cards.length; i++) {
    // toggle green border and like icon when clicked
    cards[i].addEventListener("click", function(){
        //toggle green border
        this.classList.toggle('selected');
        //toggle like icon
        const checkIcon = document.getElementById(this.id + '-likeIcon');
        console.log(this.id + '-likeIcon');
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




main();
