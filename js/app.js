// navigation section
function openNav() {
  document.getElementById('overlay').style.width = '100%';
}

function closeNav() {
  document.getElementById('overlay').style.width = '0%';
}

const overlayContainer = document.getElementById('overlay');
const menuIcon = document.getElementById('menu-icon');
const mobNavClosebtn = document.getElementsByClassName('mob-closebtn');

menuIcon.addEventListener('click', () => {
  openNav();
});

mobNavClosebtn.addEventListener('click', () => {
  closeNav();
});
overlayContainer.addEventListener('click', () => {
  closeNav();
});

overlayContainer.addEventListener("click", (event) => {
  closeNav();
});
