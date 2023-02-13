$('.slider-home')
  .slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
  })
  .on('beforeChange', function (event, slick, currentSlide) {
    document.getAnimations().forEach((anim) => {
      anim.cancel();
      anim.play();
    });
  });
