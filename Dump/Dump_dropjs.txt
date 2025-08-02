var weaponList = ["sword","bow","halberd","knuckles","staff","katana"];
var parentElementID = "dropparent";
var template = "/NavigationHeader-Component/weapondrop-item.html";
var dynamicParent = ".weapondrop-content";
var dropdownOpen = false;
var directory = "/Weapons/"

function SetdropdownItems(){
    dropList = [];
    weaponList.forEach((weapon) => {
        let tagdata = [{className:".weapondrop-item", property:"href",value: `${directory + weapon}.html`},
        ];
        dropList.push(tagdata);
    })
    console.log(dropList.length)
    return dropList;
}

function dropDown() {
    if (dropdownOpen) return;
    let dynparentElement = document.querySelector(".weapondropDiv");
    let list = document.querySelectorAll(".weapondrop-item");
    document.addEventListener("click", ()=>{
        closedropdown(dynparentElement);
    })
    list.forEach((tag,index) =>{
        tag.innerHTML = `<strong>${weaponList[index]}</strong>`;
    })
    dynparentElement.setAttribute("style","display:block")
    setTimeout(()=>{dropdownOpen = true}, 100);

}

async function closedropdown(element) {
    if (dropdownOpen){
        dropdownOpen = false;
        element.style.display = "none";
        document.removeEventListener("click", closedropdown);
    }
}

async function loaddroplist() {
    let droptaglist = SetdropdownItems();
    LoadDynamicElements(parentElementID,template,dynamicParent,droptaglist);
}


async function Run(){
    if (document.getElementById(parentElementID) !== null) {
        await loaddroplist()
        let dropblock = document.querySelector(".weapondrop");
        dropblock.addEventListener("click",dropDown);
    }
}


document.addEventListener(componentEvent,async(eventData)=>{
    if (eventData.detail.component.componentID == "navbar"){
        Run()   
    };
});