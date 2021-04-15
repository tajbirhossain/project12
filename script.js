function fadeOut() {
    TweenMax.to('.overlayContent', 1, {
        y: -400,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: .6
    });

    TweenMax.to('.overlay', 2, {
        delay: 1,
        top: '-210%',
        ease: Expo.easeInOut
    })

    // let allContent = document.getElementsByClassName('allContent')[0];
    // allContent.classList.toggle('active');
}




