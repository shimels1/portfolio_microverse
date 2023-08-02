// navigation section
function openNav() {
  document.getElementById('mob-overlay-menu').style.width = '100%';
}

function closeNav() {
  document.getElementById('mob-overlay-menu').style.width = '0%';
}

const overlayContainer = document.getElementById('mob-overlay-menu');
const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', () => {
  openNav();
});

overlayContainer.addEventListener('click', () => {
  closeNav();
});