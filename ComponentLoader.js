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
function LoadDynamicComponent(componentID,componentHtml) {
    let page = { file: componentHtml, target: componentID }
    LoadComponent(page);
}