const computerComponents = [
    {
        component: "Central Processing Unit (CPU)",
        description: "The brain of the computer, responsible for executing instructions and processing data.",
        img: "images/cpu.webp",
        priceRange: "$200 - $500",
        averagePrice: "$350"
    },
    {
        component: "Motherboard",
        description: "The main circuit board that connects all the components and allows them to communicate.",
        img: "images/motherboard.webp",
        priceRange: "$100 - $300",
        averagePrice: "$200"
    },
    {
        component: "Memory (RAM)",
        description: "Temporary storage that provides space for the CPU to read and write data quickly.",
        img: "images/ram.webp",
        priceRange: "$50 - $200",
        averagePrice: "$125"
    },
    {
        component: "Storage (HDD/SSD)",
        description: "Permanent storage for the operating system, software, and data. HDDs are traditional hard drives, while SSDs are faster solid-state drives.",
        img: "images/storage.webp",
        priceRange: "$50 - $200",
        averagePrice: "$125"
    },
    {
        component: "Power Supply Unit (PSU)",
        description: "Provides electrical power to the computer components.",
        img: "images/psu.webp",
        priceRange: "$50 - $150",
        averagePrice: "$100"
    },
    {
        component: "Graphics Processing Unit (GPU)",
        description: "Handles rendering of images, videos, and animations. Essential for gaming, video editing, and other graphics-intensive tasks.",
        img: "images/gpu.webp",
        priceRange: "$200 - $800",
        averagePrice: "$500"
    },
    {
        component: "Cooling System",
        description: "Prevents components from overheating, typically using fans, heat sinks, or liquid cooling systems.",
        img: "images/cooling.webp",
        priceRange: "$30 - $150",
        averagePrice: "$90"
    },
    {
        component: "Case",
        description: "The enclosure that houses and protects all the computer components.",
        img: "images/case.webp",
        priceRange: "$50 - $200",
        averagePrice: "$125"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    displayComponents();
});

function displayComponents(filter = null) {
    const container = document.getElementById("components");
    container.innerHTML = "";

    computerComponents.forEach(compo => {
        const averagePrice = parseFloat(compo.averagePrice.replace('$', ''));

        if (filter && (averagePrice > filter.max || averagePrice < filter.min)) {
            return;
        }

        const componentCard = document.createElement("section");
        const name = document.createElement("h3");
        const rangePrice = document.createElement("p");
        const aPrice = document.createElement("p");
        const desc = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = compo.component;
        rangePrice.innerHTML = `<span>Range Price (In dollars): </span> ${compo.rangePricePrice}`;
        aPrice.innerHTML = `<span>Average Price (In dollars): </span> ${compo.averagePrice}`;
        desc.innerHTML = `<span>Description: </span> ${compo.description}`;

        image.setAttribute("src", compo.img);
        image.setAttribute("alt", compo.component);
        image.setAttribute("loading", "lazy");

        componentCard.appendChild(image);
        componentCard.appendChild(name);
        componentCard.appendChild(rangePrice);
        componentCard.appendChild(aPrice);
        componentCard.appendChild(desc);

        container.appendChild(componentCard);
    });
}

document.getElementById("priceFilter").addEventListener("change", function() {
    const value = this.value;

    let filter = null;
    if (value) {
        const [min, max] = value.split('-').map(Number);
        filter = { min, max };
    }

    displayComponents(filter);
});