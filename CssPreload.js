var stylesheets = [
    "/global_styles.css","/Footer-Component/footer.css","About-Component/about.css","Weapons-Component/weaponsummary.css",
    "Home-Page/Home-FloatingHeader.css","Home-Page/Home-MainBody.css","Home-Page/Home-Scroll.css"
];

function preload(){
    let head = document.getElementsByTagName("head")[0];
    stylesheets.forEach((stylesheet) => {
        let link = document.createElement("link");
        link.href = stylesheet;
        link.type = "text/css";
        link.rel = "stylesheet";
        head.appendChild(link)
    });
   console.log('here')
}

if (document.readyState !== "loading"){
    preload()
}
else {
    document.addEventListener('DOMContentLoaded', preload);
}