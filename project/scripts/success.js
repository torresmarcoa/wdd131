const displayvisitNum = document.getElementById("successMain");



let reviewNum = Number(window.localStorage.getItem("visits-ls")) || 1;

if (reviewNum !== 0) {
    
    const p = document.createElement("p");
    p.innerHTML = `<span> You have contacted us ${reviewNum} times!</span>`;
    displayvisitNum.appendChild(p);
}

reviewNum++;

localStorage.setItem("visits-ls", reviewNum);