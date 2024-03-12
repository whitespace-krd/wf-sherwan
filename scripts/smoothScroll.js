$(document).ready(function () {
  window.addEventListener("load", () => ScrollTrigger.refresh());

  // init lenis with smoothness factor & make sure gsap doesn't kill itself
  const lenis = new Lenis({ lerp: 0.09 });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
});
