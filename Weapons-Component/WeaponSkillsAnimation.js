var x_translate = 0.0;
var y_translate = 0.0;
var List = ["weaponSkill1","weaponSkill2","weaponSkill3"];
var duration = setInterval(Animate)

function calcTranslate(num){
    for (let i=0;i<10;i++){
        x_translate = Math.random()*num;
        y_translate = Math.random()*num;
    }
    return {x:x_translate, y:y_translate}
}

function LinkLists(){
    let returnList = [];
    for (let i=0;i<List.length();i++){
        returnList[i] = document.querySelectorAll(`.${List[i]}`);
    };
    return returnList;
}

async function Animate(){
    let ElementList = LinkLists();
    let translation = {};
    ElementList.forEach((element) => {
        translation = calcTranslate(20/3);
        element.style.translate = translation;
    });
}