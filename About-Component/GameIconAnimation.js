
let gameIcons = [
  { src: 'About-Component/resources/dark souls icon.png', displayText: 'Darksouls' },
  { src: 'About-Component/resources/skyrim icon.png', displayText: 'Skyrim' },
  { src: 'About-Component/resources/Final Fantasy icon.png', displayText: 'Final Fantasy series' },
  { src: 'About-Component/resources/The Elder Scrolls Online icon.jpg', displayText: 'Elder Scrolls Online' },
];

let gameIconEventLoaded = false;

document.addEventListener(componentRemovalEvent, async (eventData) => {
  if(eventData.detail.componentID!=="about") return;
  gameIconEventLoaded = false;
});

document.addEventListener(dynamicComponentEvent, async (eventData) => {
  if(eventData.detail.component.componentID!=="about") return;
  if (gameIconEventLoaded) return;
  gameIconEventLoaded = true;
  const childTagGroups = SetGameIconGroups();
  await LoadDynamicElements('ListOfIcons','About-Component/game-Icon.html'
    ,'.Image-Icons',childTagGroups);
  AnimateOnScroll('ListOfIcons','.Image-Icons','animate',300);
});

function SetGameIconGroups() {
  let gameIconGroups = [];
  for (let i = 0; i < gameIcons.length; i++) {
    gameIconGroups.push([
      { className: 'img', property: 'src', value: gameIcons[i].src},
      { className: 'span', property: 'innerHTML', value: gameIcons[i].displayText},
    ]);
  }
  return gameIconGroups;
}