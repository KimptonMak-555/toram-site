const fontcolors = ["B7773Eff","A1713Cff","D6C9BBff","EECF96ff","DEB676ff","DFBC85ff"];
const headcolors = ["FEEDB7ff","F7DE94ff","F4DEB8ff","F4DCA4ff","ffffffff"];

function firstfunc() {
  const options = ["first", "second", "third"];
  alert("Changing Font colors...(can also be done by reloading)");
  colorchange("head");
  colorchange("body");
}

function fontcolpick(fonts) {
  let fontcol="";
  var i = Math.floor(Math.random()*(fonts.length));
  fontcol = '#' + fonts[i];
  return (fontcol);
}

function colorchange(choice) {
  var f;
  switch(choice)
    {
    case "body":
      f=fontcolpick(fontcolors);
      console.log("body: \n");
      console.log(f);
      break;
    case "head":
      f=fontcolpick(headcolors);
      console.log("head: \n");
      console.log(f);
      break;
    }
  for (var i = 0; i< document.getElementsByClassName(choice).length;i++)
    {
      document.getElementsByClassName(choice)[i].style.color = f;
    }
    
  for (i = 0; i< document.getElementsByClassName("weaponTextOverlayArea").length;i++)
    {
      document.getElementsByClassName("weaponTextOverlayArea")[i].style.color = f;
    }
}

function DisplayClassText() {
let i = this.querySelectorAll("img.weapons");

let x = this.getElementsByClassName("overImageText");
let img = i[0];
let text = x[0];
img.style.opacity = 0.65;
text.style.display = "block";
}

function HideClassText() {
 let i = this.querySelectorAll("img.weapons");
 let img = i[0];
 let x = this.getElementsByClassName("overImageText"); 
 let text = x[0];
 img.style.opacity = 1;
 text.style.display = "none";
}

function WeaponImgInteraction() {
  for (var i of document.querySelectorAll("figure.weapons")){
  i.addEventListener("mouseenter",DisplayClassText);
  i.addEventListener("click",DisplayClassText);
  i.addEventListener("mouseleave",HideClassText);
  }
} 

WeaponImgInteraction();
document.getElementById("firstButton").addEventListener("click",firstfunc);
window.addEventListener("load",colorchange("head"));
window.addEventListener("load",colorchange("body"));

