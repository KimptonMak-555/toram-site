let scrollOpen=true;
displayStates = []
function CloseScroll(){
    let scrollBody = document.getElementById("ScrollBody");
    scrollBody.style.display = "none";
    
    let scrollContents = document.getElementById("Scroll-Contents").children;

    for (let childElement of scrollContents) {//load current display states for when scroll gets opened again
        displayStates.push(childElement.style.display);
        childElement.style.display = "none";
    }
    scrollOpen = false;
}
function OpenScroll(){

    let scrollBody = document.getElementById("ScrollBody");
    scrollBody.style.display = "block";
    
    let scrollContents = document.getElementById("Scroll-Contents").children;

    for (let i =0;i<scrollContents.length;i++) {//reset display states of the scroll contents
        scrollContents[i].style.display = displayStates[i];
    }
    displayStates = [];
    scrollOpen = true;
    RemoveAllComponents();
}