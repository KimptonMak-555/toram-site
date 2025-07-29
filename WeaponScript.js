weaponNames = ["sword","bow","halberd","knuckles","staff","katana",]
function SetWeaponInteractionEvents() {

  let weaponFigures = document.querySelectorAll("figure.weapons");

  weaponFigures.forEach((figure, index) => {

    let weaponId = `#${weaponNames[index]}`;

    figure.addEventListener("mouseenter", function (event) {
      let hoveredElement = event.currentTarget;
      let image = hoveredElement.querySelector(weaponId);
      if (image) {
          imgsrc = image.src;
          image.src = `/Weapons-Component/resources/${image.id}.gif`;
          image.style.opacity = 0.65;
      }
      });

    figure.addEventListener("mouseleave", function (event) {
      let hoveredElement = event.currentTarget;
      let image = hoveredElement.querySelector(weaponId);
      if (image) {
          image.src = imgsrc;
          image.style.opacity = 1;
          image.style.width = "100%";
      }
    });
});

} 
document.addEventListener("componentLoaded", (eventData) => {
  
  if(eventData.detail.component.componentID!=="weaponsum") return;

  SetWeaponInteractionEvents();
});



