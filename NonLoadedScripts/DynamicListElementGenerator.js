
async function LoadDynamicElements(parentElementID,templateDirectory,parentOfDynamicElement,childTagGroups){

  const listParent = document.getElementById(parentElementID);

  for (let i = 0; i < childTagGroups.length; i++) {
    const res = await fetch(templateDirectory);
    const html = await res.text();

    const temp = document.createElement('div');
    temp.innerHTML = html.trim();

    const parentElement = temp.querySelector(parentOfDynamicElement);

    if (!parentElement) continue;
    // Apply dynamic properties
    childTagGroups[i].forEach((dataObj) => {

      const childTag = parentElement.querySelector(dataObj.className);

      if (!childTag) return;

      if (dataObj.property in childTag) {
        childTag[dataObj.property] = dataObj.value;
      } else {
        childTag.setAttribute(dataObj.property, dataObj.value);
      }
    });

    listParent.appendChild(parentElement);
  }
}
