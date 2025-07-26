function Percentage(x,y){
    var scrollpos = x//window.scrollY;
    var maxHeight = y//window.maxHeight;
    var Percentage = Math.round(scrollpos / maxHeight)
    return Percentage
}

function UpdateScroll() {
    var Percentage = Percentage(2,5);
    var imgforeground = document.getElementById("fgimg");

    var newWidth = toString(Percentage)+"px";
    //imgforeground.style.width = newWidth;
    window.alert(newWidth);
    console.log(newWidth);
}
console.log("starting")
UpdateScroll();
