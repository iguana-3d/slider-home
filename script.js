$('.slider-home')
  .slick({
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: true,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    // appendArrows: '.slider-home',
    cssEase: 'linear',
  })
  .on('beforeChange', function () {
    document.getAnimations().forEach((anim) => {
      anim.cancel();
      anim.play();
    });
  });
