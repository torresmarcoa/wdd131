    const mainnav = document.querySelector('.navigation');
    const hambutton = document.querySelector('#menu');
    const header = document.querySelector('#h1-header');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
        header.classList.toggle('hide-header');
    });