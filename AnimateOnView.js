

document.addEventListener("componentLoaded", (eventData) => {

const target = document.getElementById('ListOfIcons');
if(!target) return;
if(!eventData.detail.component.componentElement.contains(target))return;
//wait for view to scroll to the icons and then displays those icons sequentially
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.Image-Icons').forEach( (icon,index) => {
            setTimeout(() => {
                icon.classList.add('animate');
            }, index * 300);
        });
        observer.unobserve(target);
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(target);
});