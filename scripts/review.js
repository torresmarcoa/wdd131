const displayReviewNum = document.getElementById("reviewHTML");



let reviewNum = Number(window.localStorage.getItem("reviewNum-ls")) || 1;

if (reviewNum !== 0) {
    
    const p = document.createElement("p");
    p.innerHTML = `<span> This is your ${reviewNum} review submitted</span>`;
    displayReviewNum.appendChild(p);
}

reviewNum++;

localStorage.setItem("reviewNum-ls", reviewNum);