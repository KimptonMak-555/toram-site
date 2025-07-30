displayStates = []
function CloseScroll(){
    let scrollBody = document.getElementById("ScrollBody");
    scrollBody.style.animation = "stretchUp 2.5s"
    let scrollContents = document.getElementById("Scroll-Contents").children;

    for (let childElement of scrollContents) {//load current display states for when scroll gets opened again
        displayStates.push(childElement.style.display);
        childElement.style.display = "none";
    }
    setTimeout(() => {
        scrollBody.style.display = "none";
    }, 3500);
    
}
function OpenScroll(){
    let scrollBody = document.getElementById("ScrollBody");
    if(scrollBody.style.display === "block")
    {
        CloseScroll();
        return;
    }
    scrollBody.style.animation = "stretchDown 2.5s ease forwards"
    scrollBody.style.display = "block";
    let scrollContents = document.getElementById("Scroll-Contents").children;

    for (let i =0;i<scrollContents.length;i++) {//reset display states of the scroll contents
        scrollContents[i].style.display = displayStates[i];
    }
    displayStates = [];
}