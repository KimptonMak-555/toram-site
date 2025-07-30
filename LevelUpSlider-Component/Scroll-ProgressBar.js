
function Percentage(){
    var scrollpos = window.scrollY;
    const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
    var Percentage = scrollpos / maxScrollY;
    return Percentage;
}

function UpdateScroll() {
    let percentage = Percentage(); // should return a value from 0 to 1
    let imgForeground = document.getElementById("levelUpProgress");
    let imgBackground = document.getElementById("levelUpBackground");
    let percentageText = document.getElementById("levelUpPercentage");

    let percentValue = Math.trunc(percentage * 100);

    percentageText.textContent = percentValue + "%";

    let currentScrollLevel = Math.trunc(percentage * imgBackground.offsetWidth);
    imgForeground.style.width = currentScrollLevel + "px";
}

window.onscroll = function(){
UpdateScroll();
}
