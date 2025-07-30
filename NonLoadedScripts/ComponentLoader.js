
let currentComponents = []
var dynamicComponentEvent = 'DynamicComponentLoaded'
var componentEvent = 'ComponentLoaded'
var componentRemovalEvent = 'componentRemoved'
function LoadComponentList(components) {
  components.forEach(component => {
    LoadComponent(component);
  });
}

function LoadComponent(component) {
    return fetch(component.file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(component.componentID).innerHTML = html;
      document.dispatchEvent(new CustomEvent(componentEvent, {
        detail: { component: component }
      }));
    });
}

function UnloadDynamicComponent(componentID){
    if (componentID.innerHTML !== ""){
    let target = document.getElementById(componentID)
    target.innerHTML = "";
    currentComponents = currentComponents.filter(component => component.componentID !== componentID);
    document.dispatchEvent(new CustomEvent(componentRemovalEvent, {
        detail: { componentID: componentID }
      }));
  }
}

function LoadDynamicComponent(componentID, componentHtml) {
  let component= { file: componentHtml, componentID: componentID };
  let element = document.getElementById(component.componentID);

  if (element.innerHTML === "") {
      let componentElement = document.getElementById(component.componentID);
      let dynamicComponent = {
        file: componentHtml,
        componentID: componentID,
        componentElement: componentElement
      }
      LoadComponent(component).then(() => {
        //this is an event that other scripts can use when they wanna do stuff once a component has been loaded
        document.dispatchEvent(new CustomEvent(dynamicComponentEvent, {
          detail: { component: dynamicComponent }
        }));
        currentComponents.push(dynamicComponent);
        //scroll to last inserted
        const last = currentComponents[currentComponents.length - 1];
        window.scrollTo({
          top: last.componentElement.offsetTop,
          behavior: 'smooth'
        });
      });
  } else {
    UnloadDynamicComponent(componentID);
  }
}

function RemoveAllDynamicComponents(){
  currentComponents.forEach(component => {
      UnloadDynamicComponent(component.componentID)
    });
}