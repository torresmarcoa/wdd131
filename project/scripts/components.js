const computerComponents = [
    {
        component: "Central Processing Unit (CPU)",
        description: "The brain of the computer, responsible for executing instructions and processing data.",
        img: "images/cpu.webp"
    },
    {
        component: "Motherboard",
        description: "The main circuit board that connects all the components and allows them to communicate.",
        img: "images/motherboard.webp"
    },
    {
        component: "Memory (RAM)",
        description: "Temporary storage that provides space for the CPU to read and write data quickly.",
        img: "images/ram.webp"
    },
    {
        component: "Storage (HDD/SSD)",
        description: "Permanent storage for the operating system, software, and data. HDDs are traditional hard drives, while SSDs are faster solid-state drives.",
        img: "images/storage.webp"
    },
    {
        component: "Power Supply Unit (PSU)",
        description: "Provides electrical power to the computer components.",
        img: "images/psu.webp"
    },
    {
        component: "Graphics Processing Unit (GPU)",
        description: "Handles rendering of images, videos, and animations. Essential for gaming, video editing, and other graphics-intensive tasks.",
        img: "images/gpu.webp"
    },
    {
        component: "Cooling System",
        description: "Prevents components from overheating, typically using fans, heat sinks, or liquid cooling systems.",
        img: "images/cooling.webp"
    },
    {
        component: "Case",
        description: "The enclosure that houses and protects all the computer components.",
        img: "images/case.webp"
    }
];

displayComponents()

function displayComponents() {

    computerComponents.forEach(compo => {
        const componentCard = document.createElement("section");
        const name = document.createElement("h3");
        const desc = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = compo.component;
        desc.innerHTML = `<span>Description: </span> ${compo.description}`;

        image.setAttribute("src", compo.img);
        image.setAttribute("alt", compo.component);
        image.setAttribute("loading", "lazy");

        componentCard.appendChild(image);
        componentCard.appendChild(name);
        componentCard.appendChild(desc);

        document.getElementById("components").appendChild(componentCard);
    });


}