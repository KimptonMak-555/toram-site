let scripts = ["/Home-Page/Home-ProgressBar.js","/WeaponScript.js","/ComponentLoader.js","/AnimateOnView.js","/ScrollStateScontroller.js","/fontColorChanger.js"]

window.onload = function preload() {
    element = document.getElementsByTagName("head");
    scripts.forEach((script)=>{
        let scriptelement = document.createElement("script");
        scriptelement.src = script;
        element[0].appendChild(scriptelement);
    });
    console.log("loadedscripts");
}