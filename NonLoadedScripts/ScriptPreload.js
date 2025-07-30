let scripts = ["LevelUpSlider-Component/Scroll-ProgressBar.js","Weapons-Component/WeaponScript.js"
    ,"NonLoadedScripts/AnimateOnView.js","Home Page/ScrollStateScontroller.js","Home Page/fontColorChanger.js",
    "/Weapons-Component/WeaponSkillsAnimation.js","About-Component/GameIconAnimation.js"]
    
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