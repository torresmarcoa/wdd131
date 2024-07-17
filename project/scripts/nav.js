const mainnav = document.querySelector('.navigation');
const hambutton = document.getElementById('menu');
const header = document.querySelector('header');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    header.classList.toggle('hide-header');
});