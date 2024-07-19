const computerPeripherals = [
    {
        peripheral: "Keyboard",
        description: "An input device used to type text and execute commands.",
        img: "images/keyboard.webp"
    },
    {
        peripheral: "Mouse",
        description: "A pointing device used to interact with the graphical user interface of a computer.",
        img: "images/mouse.webp"
    },
    {
        peripheral: "Monitor",
        description: "An output device that displays visual information from the computer.",
        img: "images/monitor.webp"
    },
    {
        peripheral: "Printer",
        description: "An output device that produces physical copies of documents and images.",
        img: "images/printer.webp"
    },
    {
        peripheral: "Scanner",
        description: "An input device that digitizes physical documents and images.",
        img: "images/scanner.webp"
    },
    {
        peripheral: "Speakers",
        description: "Output devices that produce sound from the computer.",
        img: "images/speakers.webp"
    },
    {
        peripheral: "Webcam",
        description: "An input device used for capturing video, often used for video conferencing.",
        img: "images/webcam.webp"
    },
    {
        peripheral: "Microphone",
        description: "An input device used for capturing audio.",
        img: "images/microphone.webp"
    },
    {
        peripheral: "Headset",
        description: "A combination of headphones and microphone, used for audio input and output.",
        img: "images/headset.webp"
    }
];


displayperipherals()

function displayperipherals() {

    computerPeripherals.forEach(per => {
        const peripheralCard = document.createElement("section");
        const name = document.createElement("h3");
        const desc = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = per.peripheral;
        desc.innerHTML = `<span>Description: </span> ${per.description}`;

        image.setAttribute("src", per.img);
        image.setAttribute("alt", per.peripheral);
        image.setAttribute("loading", "lazy");

        peripheralCard.appendChild(image);
        peripheralCard.appendChild(name);
        peripheralCard.appendChild(desc);

        document.getElementById("peripherals").appendChild(peripheralCard);
    });
}