const computerHistory = [
    {
        name: "Analytical Engine (1837):",
        description: "Designed by Charles Babbage, it was a conceptual design for a mechanical general-purpose computer. Although never completed, it laid the groundwork for future computing machines."
    },
    {
        name: "Z3 (1941):",
        description: "Developed by Konrad Zuse, the Z3 was the world's first working programmable, fully automatic digital computer."
    },
    {
        name: "ENIAC (1945):",
        description: "The Electronic Numerical Integrator and Computer, built by John Presper Eckert and John Mauchly, was the first general-purpose electronic digital computer."
    },
    {
        name: "UNIVAC I (1951):",
        description: "The first commercially produced computer, which was designed for business and administrative use."
    },
    {
        name: "IBM 701 (1952):",
        description: "IBM's first commercial scientific computer."
    },
    {
        name: "Intel 4004 (1971):",
        description: "The first commercially available microprocessor, which paved the way for personal computers."
    },
    {
        name: "Altair 8800 (1975):",
        description: "Considered the spark that ignited the personal computer revolution. It was one of the first microcomputer kits available to hobbyists."
    },
    {
        name: "Apple I (1976):",
        description: "Developed by Steve Wozniak and Steve Jobs, it was one of the first personal computers with a single-board design."
    },
    {
        name: "IBM PC (1981):",
        description: "IBM's introduction of the PC established a standard for personal computers and led to widespread adoption in homes and businesses."
    },
    {
        name: "The Internet (1990s):",
        description: "The development of the World Wide Web by Tim Berners-Lee revolutionized how computers are used, leading to the information age."
    },
    {
        name: "Mobile Computing (2000s):",
        description: "The rise of smartphones and tablets transformed computing, making it more personal and ubiquitous."
    },
    {
        name: "Cloud Computing (2010s):",
        description: "Services like AWS, Google Cloud, and Microsoft Azure changed how data is stored and processed, enabling scalable and flexible computing solutions."
    }
];

const sectionElement = document.getElementById("timeline");

displayHistory();

function displayHistory() {
    computerHistory.forEach(element => {
        const div = document.createElement("div")
        const div2 = document.createElement("div")
        const h3 = document.createElement("h3");
        const p = document.createElement("p")
        h3.textContent = element.name;
        p.textContent = element.description;

        div.classList.add("child");
        div2.classList.add("content");
        div2.appendChild(h3);
        div2.appendChild(p);
        div.appendChild(div2);
        sectionElement.appendChild(div);
    });
}

let items = document.querySelectorAll(".child");

items.forEach(element => {
    if(element.offsetTop < 300){
        element.classList.add("visible")
    };
})

window.addEventListener("scroll", e => {
    let scroll = document.documentElement.scrollTop;
    let items = document.querySelectorAll(".child")
    items.forEach (elem => {
        if(elem.offsetTop - window.innerHeight/2 < scroll){
            elem.classList.remove("hide")
            elem.classList.add("visible")
        }
        else {
            elem.classList.remove("visible")
            elem.classList.add("hide")
        };
    });
});