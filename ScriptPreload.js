let scripts = ["LevelUpSlider-Component/Scroll-ProgressBar.js","/WeaponScript.js"
    ,"/AnimateOnView.js","ScrollStateScontroller.js","/fontColorChanger.js",
    "/Weapons-Component/WeaponSkillsAnimation.js"]
    
let scriptsLoaded = false;

document.addEventListener("componentLoaded", (eventData) => {
    if(scriptsLoaded)return;
    element = document.getElementsByTagName("body");
    scripts.forEach((script)=>{
        let scriptelement = document.createElement("script");
        scriptelement.src = script;
        element[0].appendChild(scriptelement);
    });
    scriptsLoaded =true;
});