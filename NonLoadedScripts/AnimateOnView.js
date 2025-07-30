//this can now be used anywhere for animations OnScroll
function AddOnScrollEvent(scrollTargetID,classToBeAnimted,animationName,delay){

document.addEventListener("DynamicComponentLoaded", (eventData) => {

  const target = document.getElementById(scrollTargetID);
  if(!target) return;
  if(!eventData.detail.component.componentElement.contains(target))return;
  //wait for view to scroll to the icons and then displays those icons sequentially
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll(classToBeAnimted).forEach( (icon,index) => {
              setTimeout(() => {
                  icon.classList.add(animationName);
              }, index * delay);
          });
          observer.unobserve(target);
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(target);
  });

}