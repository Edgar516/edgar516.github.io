const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const zone = document.querySelector(".no-zone");

function moveNoButton() {
    const zoneRect = zone.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = zoneRect.width - btnRect.width;
    const maxY = zoneRect.height - btnRect.height;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

/* Desktop hover */
noBtn.addEventListener("mouseover", moveNoButton);

/* Mobile touch */
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
    window.location.href = "celebrate.html";
});
