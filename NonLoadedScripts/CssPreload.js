var stylesheets = [
    "global_styles.css",
    "Footer-Component/footer.css",
    "About-Component/about.css",
    "Weapons-Component/weaponsummary.css",
    "LevelUpSlider-Component/level-up.css",
    "Home Page/Home-MainBody.css",
    "Home Page/Home-Scroll.css",
    "NavigationHeader-Component/nav-bar.css",
];

function preload(){
    let head = document.getElementsByTagName("head")[0];
    stylesheets.forEach((stylesheet) => {
        let link = document.createElement("link");
        link.href = stylesheet;
        link.type = "text/css";
        link.rel = "stylesheet";
        link.onload = () => console.log(`Loaded: ${stylesheet}`);
        link.onerror = () => console.error(`Failed to load: ${stylesheet}`);
        head.appendChild(link);
    });
}

if (document.readyState !== "loading"){
    preload();
} else {
    document.addEventListener('DOMContentLoaded', preload);
}
