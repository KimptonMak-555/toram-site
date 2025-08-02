var weaponSkillList = ["weaponSkill1","weaponSkill2","weaponSkill3"];
//delete this comment, i wanted to make the skillls rotate around a circle, though it
//looks cool, you can change if you want ig. but ts looks awesome, i suggest tweaking
// it to look better

function GetWeaponSkillElements(){
    let queryResult = [];
    for (let i=0; i < weaponSkillList.length; i++){
        queryResult.push(document.querySelectorAll(`.${weaponSkillList[i]}`));
    };
    //convert nodeList result from querySelectorAll() into an array of htmlElement
    let elements = []
        queryResult.forEach((node) => {
            elements.push(node[0])
        });
    return elements;
}
function AnimateWeaponSkills() {
  const holder = document.querySelector('.weaponSkillsHolder');
  const images = holder.querySelectorAll('img');
  const radius = 40; // px distance from center

  // Position images evenly around the circle
  images.forEach((img, i) => {
    const angle = (i / images.length) * 2 * Math.PI; // in radians
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    img.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  });

  // Animate rotation of the container
  holder.animate([
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(360deg)' }
  ], {
    duration: 3000,
    iterations: Infinity,
    easing: 'linear'
  });
}


