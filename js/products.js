// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger-menu di click
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.dropdown-menu');
  const options = dropdown.querySelectorAll('.dropdown-menu li');
  const selected = dropdown.querySelector('.selected');

  // Add a click event to the select element
  select.addEventListener('click', () => {
    // Add the clicked select styles to the select elements
    select.classList.toggle('select-clicked');
    // Add the rotate styles to the caret element
    caret.classList.toggle('caret-rotate');
    // Add the open styles to the menu elements
    menu.classList.toggle('dropdown-menu-open');
  });

  // Loop through all option elements
  options.forEach((option) => {
    // Add a click event to each option element
    option.addEventListener('click', () => {
      // Change selected inner text to clicked option inner text
      selected.innerText = option.innerText;
      // Add the clicked select styles to the select element
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('dropdown-menu-open');
      options.forEach((option) => {
        option.classList.remove('active');
      });
      option.classList.add('active');
    });
  });
});
