let eventLoaded = false;
var weaponNames = ["sword","bow","halberd","knuckles","staff","katana"]

function SetElementGroups() {
  let weaponGroups = [];
  let componentDirectory = '/Weapons-Component/resources/';
  for (let i = 0; i < 6; i++) {
    weaponGroups.push([
      { className: 'weapons', property: 'id', value: weaponNames[i]},
      { className: 'weapons', property: 'src', value: componentDirectory+'weapon_bg.png' },
      { className: 'weaponAura', property: 'src', value: componentDirectory + weaponNames[i] + '_Aura.png' },
      { className: 'weaponIcon', property: 'src', value: componentDirectory + weaponNames[i] + '_Icon.png' },
      { className: 'figcaptionText', property: 'innerHTML', value: `Weapon Class ${i + 1}: ${weaponNames[i]}` }
    ]);
  }
  return weaponGroups;
}

document.addEventListener(dynamicComponentEvent, async (eventData) => {
    if(eventData.detail.component.componentID!=="weaponsum") return;
    if (eventLoaded) return;
    eventLoaded = true;
    const childTagGroups = SetElementGroups();
    await LoadDynamicElements('weaponCardParent','Weapons-Component/WeaponCard.html','.weaponTextOverlayArea',childTagGroups);
    SetWeaponInteractionEvents();
});

function SetWeaponInteractionEvents() {
  
  let weaponFigures = document.querySelectorAll(".figureForWeapons");

  weaponFigures.forEach((figure, index) => {

    let weaponId = `#${weaponNames[index]}`;
  
    figure.addEventListener("mouseenter", function (event) {
      let hoveredElement = event.currentTarget;
      let image = hoveredElement.querySelector(weaponId);
      if (image) {
        image.dataset.originalSrc = image.src;
        image.src = `/Weapons-Component/resources/${image.id}.gif`;
        image.style.opacity = 0.65;
      }
    });
    
    figure.addEventListener("mouseleave", function (event) {
      let hoveredElement = event.currentTarget;
      let image = hoveredElement.querySelector(weaponId);
      if (image && image.dataset.originalSrc) {
        image.src = image.dataset.originalSrc;
        image.style.opacity = 1;
        image.style.width = "100%";
      }
    });
  });
} 