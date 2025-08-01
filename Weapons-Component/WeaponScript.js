let eventLoaded = false;
var weaponNames = ["sword","bow","halberd","knuckles","staff","katana"]

function SetElementGroups() {
  let weaponGroups = [];
  let componentDirectory = '/Weapons-Component/resources/';
  for (let i = 0; i < 6; i++) {
    weaponGroups.push([
      { className: '.weapons', property: 'id', value: weaponNames[i] },
      { className: '.weapons', property: 'src', value: componentDirectory + 'weapon_bg.png' },
      {className:".weaponSkillsParent", property:"id", value:`${weaponNames[i]}weaponSkillsParent`},
      { className: '.weaponAura', property: 'src', value: componentDirectory + weaponNames[i] + '_Aura.png' },
      { className: '.weaponIcon', property: 'src', value: componentDirectory + weaponNames[i] + '_Icon_noAura.png' },
      { className: '.figureForWeapons', property: 'id', value: weaponNames[i]+'WeaponParent' },
      { className: '.figcaptionText', property: 'innerHTML', value: `Weapon Class ${i + 1}: ${weaponNames[i]}` }
    ]);
  }
  return weaponGroups;
}
async function loadWeaponSkills(){
  let componentDirectory = '/Weapons-Component/resources/';
  let skillGroups = [];
  for (let i = 0; i < 6; i++) {
      skillGroups.push([
        { className: '.weaponSkill1', property: 'src', value:`${componentDirectory}${weaponNames[i]}skill1.png` },
        { className: '.weaponSkill2', property: 'src', value:`${componentDirectory}${weaponNames[i]}skill2.png` },
        { className: '.weaponSkill3', property: 'src', value:`${componentDirectory}${weaponNames[i]}skill3.png` },
      ]);
      await LoadDynamicElements(weaponNames[i]+'weaponSkillsParent','Weapons-Component/weaponSkills.html'
      ,'.weaponSkillsHolder',skillGroups);
      skillGroups = [];
  }
}
document.addEventListener(componentRemovalEvent, async (eventData) => {
  if(eventData.detail.componentID!=="weaponsum") return;
  eventLoaded = false;
});

document.addEventListener(dynamicComponentEvent, async (eventData) => {
    if(eventData.detail.component.componentID!=="weaponsum") return;
    if (eventLoaded) return;
    eventLoaded = true;
    const childTagGroups = SetElementGroups();
    await LoadDynamicElements('weaponCardParent','Weapons-Component/WeaponCard.html','.weaponTextOverlayArea',childTagGroups);
    await loadWeaponSkills();
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
        let icon = hoveredElement.querySelector(".weaponIcon");
        let aura = hoveredElement.querySelector(".weaponAura");
        image.dataset.originalSrc = image.src;
        icon.style.display = "none";
        aura.style.display = "none";
        image.src = `/Weapons-Component/resources/${image.id}.gif`;
        image.style.opacity = 0.65;
      }
    });
    
    figure.addEventListener("mouseleave", function (event) {
      let hoveredElement = event.currentTarget;
      let image = hoveredElement.querySelector(weaponId);
      if (image && image.dataset.originalSrc) {
        let icon = hoveredElement.querySelector(".weaponIcon");
        let aura = hoveredElement.querySelector(".weaponAura");
        image.src = image.dataset.originalSrc;
        icon.style.display = "initial";
        aura.style.display = "initial";
        image.style.opacity = 1;
        image.style.width = "100%";
      }
    });
  });
} 