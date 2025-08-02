var weaponList = ["sword","bow","halberd","knuckles","staff","katana"];
var parentElementID = "dropparent";
var template = "/NavigationHeader-Component/weapondrop-item.html";
var dynamicParent = ".weapondrop-content";
var dropdownOpen = false;
var dropDownLoaded=false
var directory = "/Weapons/"

function SetdropdownItems(){
    dropList = [];
    weaponList.forEach((weapon) => {
        let tagdata = [{className:".weapondrop-item", property:"href",value: `${directory + weapon}.html`}];
        dropList.push(tagdata);
    })
    console.log(dropList.length)
    return dropList;
}

function DisplayDropDown() {    
    let dynamicParentElement = document.querySelector(".weapondropDiv");
    
    if (dropdownOpen) {
        CloseDropdown(dynamicParentElement);
        return;
    }
    dropdownOpen = true

    let list = document.querySelectorAll(".weapondrop-item");

    list.forEach((tag,index) =>{
        tag.querySelector('strong').innerHTML = `${weaponList[index]}`;
    })

    dynamicParentElement.setAttribute("style","display:block")
    
    setTimeout(()=>{
    document.addEventListener("click",()=>{    
        CloseDropdown(dynamicParentElement)
        },{once:true});
    });
}

async function CloseDropdown(element) {
    dropdownOpen = false;
    element.style.display = "none";
}

document.addEventListener(componentEvent,async(eventData)=>{
    if(dropDownLoaded)return;
    if (eventData.detail.component.componentID == "navbar"){

        if (document.getElementById(parentElementID) !== null) {
            dropDownLoaded = true;

            //load drop-down items and events
            let dropTagList = SetdropdownItems();
            LoadDynamicElements(parentElementID,template,dynamicParent,dropTagList);

            let dropDownBlock = document.querySelector(".weapondrop");
            dropDownBlock.addEventListener("click",DisplayDropDown);
        }  
    };
});