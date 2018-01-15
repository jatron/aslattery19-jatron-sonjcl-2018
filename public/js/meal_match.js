function main() {
    const profileId = window.location.search.substring(1);
    get('/api/user', {'_id': profileId}, function(profileUser) {
        renderUserData(profileUser);
    });

    get('/api/images', {}, function(imageUrlsObject) {
        renderImages(imageUrlsObject);
    });
}

function renderImages(imageUrlsObject) {
    for (var i in imageUrlsObject.imageUrls) {
        const imageContainer = document.createElement('img');
        imageContainer.setAttribute('src', imageUrlsObject.imageUrls[i]);
        document.body.appendChild(imageContainer);
    }
}

function renderUserData(user) {
  // render user's name
  const nameContainer = document.createElement('p');
  nameContainer.innerHTML = user.name;
  document.body.appendChild(nameContainer);
}

main();
