const computerPeripherals = [
    {
        peripheral: "Keyboard",
        description: "An input device used to type text and execute commands.",
        img: "images/keyboard.webp",
        priceRange: "$10 - $150",
        averagePrice: "$80"
    },
    {
        peripheral: "Mouse",
        description: "A pointing device used to interact with the graphical user interface of a computer.",
        img: "images/mouse.webp",
        priceRange: "$15 - $100",
        averagePrice: "$57.50"
    },
    {
        peripheral: "Monitor",
        description: "An output device that displays visual information from the computer.",
        img: "images/monitor.webp",
        priceRange: "$100 - $800",
        averagePrice: "$450"
    },
    {
        peripheral: "Printer",
        description: "An output device that produces physical copies of documents and images.",
        img: "images/printer.webp",
        priceRange: "$50 - $300",
        averagePrice: "$175"
    },
    {
        peripheral: "Scanner",
        description: "An input device that digitizes physical documents and images.",
        img: "images/scanner.webp",
        priceRange: "$50 - $300",
        averagePrice: "$175"
    },
    {
        peripheral: "Speakers",
        description: "Output devices that produce sound from the computer.",
        img: "images/speakers.webp",
        priceRange: "$20 - $500",
        averagePrice: "$260"
    },
    {
        peripheral: "Webcam",
        description: "An input device used for capturing video, often used for video conferencing.",
        img: "images/webcam.webp",
        priceRange: "$30 - $200",
        averagePrice: "$115"
    },
    {
        peripheral: "Microphone",
        description: "An input device used for capturing audio.",
        img: "images/microphone.webp",
        priceRange: "$20 - $500",
        averagePrice: "$260"
    },
    {
        peripheral: "Headset",
        description: "A combination of headphones and microphone, used for audio input and output.",
        img: "images/headset.webp",
        priceRange: "$30 - $300",
        averagePrice: "$165"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    displayPeripherals();
});

function displayPeripherals(filter = null) {
    const container = document.getElementById("peripherals");
    container.innerHTML = "";

    computerPeripherals.forEach(per => {
        const averagePrice = parseFloat(per.averagePrice.replace('$', ''));

        if (filter && (averagePrice > filter.max || averagePrice < filter.min)) {
            return;
        }

        const peripheralCard = document.createElement("section");
        const name = document.createElement("h3");
        const desc = document.createElement("p");
        const rangePrice = document.createElement("p");
        const aPrice = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = per.peripheral;
        rangePrice.innerHTML = `<span>Range Price (In dollars): </span> ${per.priceRange}`;
        aPrice.innerHTML = `<span>Average Price (In dollars): </span> ${per.averagePrice}`;
        desc.innerHTML = `<span>Description: </span> ${per.description}`;

        image.setAttribute("src", per.img);
        image.setAttribute("alt", per.peripheral);
        image.setAttribute("loading", "lazy");

        peripheralCard.appendChild(image);
        peripheralCard.appendChild(name);
        peripheralCard.appendChild(rangePrice);
        peripheralCard.appendChild(aPrice);
        peripheralCard.appendChild(desc);

        container.appendChild(peripheralCard);
    });
}

document.getElementById("priceFilter").addEventListener("change", function () {
    const value = this.value;

    let filter = null;
    if (value) {
        const [min, max] = value.split('-').map(Number);
        filter = { min, max };
    }

    displayPeripherals(filter);
});