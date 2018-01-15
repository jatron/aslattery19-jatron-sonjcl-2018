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

main();
