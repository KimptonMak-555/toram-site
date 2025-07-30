function AnimateOnScroll(scrollTargetID,classToBeAnimted,animationName,delay){
    //wait for view to scroll to the icons and then displays those icons sequentially
    const target = document.getElementById(scrollTargetID);
    if(!target) {
      console.log(scrollTargetID+": doesnt exist")
      return;
    }
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
}
