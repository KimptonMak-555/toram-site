let htmlPages = [
  { file: 'Footer-Component/footer.html', target: 'footer' }
];

window.onload = function () {
  LoadHtml(htmlPages);
};

function LoadHtml(pages) {
  pages.forEach(page => {
    LoadComponent(page);
  });
}
function LoadComponent(page) {
    fetch(page.file)
        .then(res => res.text())
        .then(html => {
        document.getElementById(page.target).innerHTML = html;
    });
}

function UnloadDynamicComponent(componentID){
  console.log(document.getElementById(componentID).innerHTML)
  if (componentID.innerHTML !== ""){
    let target = document.getElementById(componentID)
    target.innerHTML = "";
  }
  console.log(document.getElementById(componentID).innerHTML)
}


function LoadDynamicComponent(componentID,componentHtml) {
    let page = { file: componentHtml, target: componentID }
    if (document.getElementById(page.target).innerHTML == ""){
      LoadComponent(page);
    }
    else{
      UnloadDynamicComponent(componentID)
    }
    
}
