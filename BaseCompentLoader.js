let htmlComponents = [
  { file: 'Footer-Component/footer.html', componentID: 'footer' },
  { file: 'NavigationHeader-Component/nav-bar.html', componentID: 'navbar' },
  { file: 'LevelUpSlider-Component/level-up.html', componentID: 'levelup' },
];

window.onload = function () {
  LoadComponentList(htmlComponents);
};
