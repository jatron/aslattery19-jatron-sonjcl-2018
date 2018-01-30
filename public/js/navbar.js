
function newNavbarItem(text, url) {
  const itemLink = document.createElement('a');
  itemLink.className = 'nav-item nav-link';
  itemLink.innerHTML = text;
  itemLink.href = url;

  return itemLink
}

function renderNavbar(user) {
  const navbarDiv = document.getElementById('nav-item-container');

  // navbarDiv.appendChild(newNavbarItem('Home', '/'));

  // NOTE: this check is a lowkey hack
  if (user._id !== undefined) {
    navbarDiv.appendChild(newNavbarItem('Meals', '/meal_match?' + user._id));
    navbarDiv.appendChild(newNavbarItem('Profile', '/profile?' + user._id));
    navbarDiv.appendChild(newNavbarItem('Matches', '/messages?' + user._id));
    navbarDiv.appendChild(newNavbarItem('Logout', '/#'));
  } else {
    navbarDiv.appendChild(newNavbarItem('Login', '/auth/google'));
  }
}

