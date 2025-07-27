
let maxWidthPercentage = 1200;
function Percentage(){
    var scrollpos = window.scrollY;
    const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
    var Percentage = scrollpos / maxScrollY;
    return Percentage;
}

function UpdateScroll() {
    let percentage = Percentage(); // should return a value from 0 to 1
    let imgforeground = document.getElementById("levelUpProgress");
    let percentageText = document.getElementById("levelUppercentage");

    let percentValue = Math.trunc(percentage * 100);

    percentageText.textContent = percentValue + "%";

    let currentScrollLevel = Math.trunc(percentage * maxWidthPercentage);
    imgforeground.style.width = currentScrollLevel + "px";
}

window.onscroll = function(){
UpdateScroll();
}
