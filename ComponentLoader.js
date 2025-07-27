let htmlComponents = [
  { file: 'Footer-Component/footer.html', componentID: 'footer' }
];
let currentComponents = []
window.onload = function () {
  LoadHtml(htmlComponents);
};

function LoadHtml(components) {
  components.forEach(component => {
    LoadComponent(component);
  });
}

//this is now an event, remove this text when you see it. it must be called like in the dynamic component fuction
function LoadComponent(component) {
    return fetch(component.file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(component.componentID).innerHTML = html;
    });
}

function UnloadDynamicComponent(componentID){
    if (componentID.innerHTML !== ""){
    let target = document.getElementById(componentID)
    target.innerHTML = "";
    currentComponents = currentComponents.filter(component => component.componentID !== componentID);
  }
}

function LoadDynamicComponent(componentID,componentHtml) {
    let component = { file: componentHtml, componentID: componentID }

    let element = document.getElementById(component.componentID);
  
    if (element.innerHTML == ""){

      LoadComponent(component).then(() => {
          currentComponents.push(component)
          CloseScroll();
          window.scrollBy({
            top: 500,
            left: 0,
            behavior: 'smooth'
          });
      });

    }
    else{
      UnloadDynamicComponent(componentID)
    }
}
function RemoveAllComponents(){
  currentComponents.forEach(component => {
      UnloadDynamicComponent(component.componentID)
    });
}