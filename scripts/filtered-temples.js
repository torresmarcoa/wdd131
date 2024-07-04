const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const header = document.querySelector('#h1-header');

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 17",
        area: 30659,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-airies-argentina-temple-1009069-wallpaper.jpg"
    },
    {
        templeName: "Santo Domingo Dominican Republic",
        location: "Santo Domingo, Dominican Republic",
        dedicated: "2000, September, 17",
        area: 67000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santo-domingo-dominican-republic/400x250/santo-domingo-dominican-republic-temple-lds-761308-wallpaper.jpg"
    }
];


const home = document.getElementById("home");
const newTemplesHTML = document.getElementById("new");
const oldTemplesHTML = document.getElementById("old");
const largeTemplesHTML = document.getElementById("large");
const smallTemplesHTML = document.getElementById("small");

const headingHTML = document.getElementById("menuSelectionHeading");

headingHTML.innerHTML = "Home";
displayCard(temples);

home.addEventListener("click", () => {
    headingHTML.innerHTML = "Home";
    displayCard(temples);
})
newTemplesHTML.addEventListener("click", () => {
    displayCard(temples.filter(temple => new Date(temple.dedicated) > new Date(2000, 0, 1)));
    headingHTML.innerHTML = "New Temples";
})
oldTemplesHTML.addEventListener("click", () => {
    displayCard(temples.filter(temple => new Date(temple.dedicated) < new Date(1900, 0, 1)));
    headingHTML.innerHTML = "Old Temples";
})
largeTemplesHTML.addEventListener("click", () => {
    displayCard(temples.filter(temple => temple.area > 90000));
    headingHTML.innerHTML = "Large Temples";
})
smallTemplesHTML.addEventListener("click", () => {
    displayCard(temples.filter(temple => temple.area < 10000));
    headingHTML.innerHTML = "Small Temples";
})



function displayCard(templesfiltered) {
    document.getElementById("temples").innerHTML = ""
    templesfiltered.forEach(temple => {
        const templeCard = document.createElement("section");
        const name = document.createElement("h3");
        const templeLocation = document.createElement("p");
        const dateDedicated = document.createElement("p");
        const templeArea = document.createElement("p");
        const templeImage = document.createElement("img");

        name.textContent = temple.templeName;
        templeLocation.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        dateDedicated.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
        templeArea.innerHTML = `<span class="label">Size: </span> ${temple.area}`;

        templeImage.setAttribute("src", temple.imageUrl);
        templeImage.setAttribute("alt", `${temple.templeName} Temple`);
        templeImage.setAttribute("loading", "lazy");

        templeCard.appendChild(templeImage);
        templeCard.appendChild(name);
        templeCard.appendChild(templeLocation);
        templeCard.appendChild(dateDedicated);
        templeCard.appendChild(templeArea);

        document.getElementById("temples").appendChild(templeCard);
    });
}

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    header.classList.toggle('hide-header');
});