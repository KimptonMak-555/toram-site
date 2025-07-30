
let gameIcons = [
  { src: 'About-Component/resources/dark souls icon.png', displayText: 'Darksouls' },
  { src: 'About-Component/resources/skyrim icon.png', displayText: 'Skyrim' },
  { src: 'About-Component/resources/Final Fantasy icon.png', displayText: 'Final Fantasy series' },
  { src: 'About-Component/resources/The Elder Scrolls Online icon.jpg', displayText: 'Elder Scrolls Online' },
];

let gameIconEventLoaded = false;

document.addEventListener(dynamicComponentEvent, async (eventData) => {
  if(eventData.detail.component.componentID!=="about") return;
  if (gameIconEventLoaded) return;
  gameIconEventLoaded = true;

  const listParent = document.getElementById('ListOfIcons');

  for (let i = 0; i < gameIcons.length; i++) {
    const res = await fetch('About-Component/resources/game-Icon.html');
    const html = await res.text();

    // Convert string to actual DOM node
    const temp = document.createElement('div');
    temp.innerHTML = html.trim();

    const iconElement = temp.querySelector('.Image-Icons');
    if (!iconElement) continue;

    // Bind data immediately
    const img = iconElement.querySelector('img');
    const span = iconElement.querySelector('span');

    if (img && span && gameIcons[i]) {
      img.src = gameIcons[i].src;
      span.innerHTML = gameIcons[i].displayText;
    }

    // Append the new element
    listParent.appendChild(iconElement);
  }
  AnimateOnScroll('ListOfIcons','.Image-Icons','animate',300);
});