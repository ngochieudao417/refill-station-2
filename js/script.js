let hamburgerIcon = document.getElementById('hamburger-icon');
let navbarMenu = document.querySelector('.mobile__menu');
let menuOverlay = document.querySelector('.mobile__overlay');

function displayMobilemenu() {
  navbarMenu.classList.add('mobile__menu--displayed');
  menuOverlay.classList.add('mobile__overlay--displayed');
}

function hideMobilemenu() {
  navbarMenu.classList.remove('mobile__menu--displayed');
  menuOverlay.classList.remove('mobile__overlay--displayed');
}

menuOverlay.addEventListener('click', hideMobilemenu);


hamburgerIcon.addEventListener('click', function() {
  if(navbarMenu.classList.contains('mobile__menu--displayed') && menuOverlay.classList.contains('mobile__overlay--displayed')) {
    hideMobilemenu();
  } else {
    displayMobilemenu();
  }
});