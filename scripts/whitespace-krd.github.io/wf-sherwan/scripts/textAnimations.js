window.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span",
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      },
    });

    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 80%",
      onEnter: () => timeline.play(),
    });
  }

  gsap.from(".navbar-link-text", {
      delay: 4.3,
      opacity: 0,
      yPercent: 100,
      duration: 0.3,
      ease: "power1.out",
      stagger: { amount: 0.5 },
  })

    gsap.from(".hero-image", {
      delay: 4.2,
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "expo",
      stagger: { amount: 0.5 },
  })
  
  $("[text-intro-1]").each(function (index) {
    let tl = gsap.timeline({ delay: 4.3 });
    tl.from($(this).find(".char"), {
      opacity: 0,
      yPercent: 100,
      duration: 0.6,
      rotation:5,
      ease: "power3.out",
      stagger: { amount: 0.8 },
    });
    tl.play(); // Play the timeline immediately on page load
  });
  $("[text-intro-2]").each(function (index) {
    let tl = gsap.timeline({ delay: 5 });
    tl.from($(this).find(".word"), {
      opacity: 0,
      yPercent: -50,
      duration: 1,
      ease: "expo",
    });
    tl.play(); // Play the timeline immediately on page load
  });
  $("[text-intro-3]").each(function (index) {
    let tl = gsap.timeline({ delay: 6 });
    tl.from($(this).find(".char"), {
      opacity: 0,
      yPercent: 100,
      duration: 0.6,
      rotation:5,
      ease: "power3.out",
      stagger: { amount: 0.8 },
    });
    tl.play(); // Play the timeline immediately on page load
  });
  
  // a bunch of cool animations to use around, will clean up unused ones later
  $("[words-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.4,
      ease: "expo",
      stagger: { amount: 0.3 },
    });
    createScrollTrigger($(this), tl);
  });

  // animate cursor
  jQuery(document).mouseleave(function() {
    gsap.to(".custom-cursor", { scale: 0, opacity: 0, ease: "expo" });
  });
  jQuery(document).mouseenter(function() {
    gsap.to(".custom-cursor", { scale: 1, opacity: 1, ease: "expo" });
  });

  gsap.set(".custom-cursor", { xPercent: -50, yPercent: -50 });

  let xTo = gsap.quickTo(".custom-cursor", "x", { duration: 0.6, ease: "expo" }),
    yTo = gsap.quickTo(".custom-cursor", "y", { duration: 0.6, ease: "expo" });

  window.addEventListener("mousemove", e => {
    xTo(e.clientX + 10);
    yTo(e.clientY + 10);
  });

  // Add event for scaling cursor on <a> element hover
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      gsap.to(".custom-cursor", { scale: 1.5, ease: "expo" });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(".custom-cursor", { scale: 1, ease: "expo" });
    });
  });

  
  
  $("[headings-animation]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), {
      opacity: 0,
      yPercent: 100,
      duration: 0.5,
      ease: "back.out(2)",
      stagger: { amount: 0.8 },
    });
    createScrollTrigger($(this), tl);
  });

  $("[words-slide-from-right]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), {
      opacity: 0,
      x: "1em",
      duration: 0.6,
      ease: "power2.out",
      stagger: { amount: 0.2 },
    });
    createScrollTrigger($(this), tl);
  });

  $("[letters-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      yPercent: 100,
      duration: 0.2,
      ease: "power1.out",
      stagger: { amount: 0.6 },
    });
    createScrollTrigger($(this), tl);
  });

  $("[letters-slide-down]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      yPercent: -120,
      duration: 0.3,
      ease: "power1.out",
      stagger: { amount: 0.7 },
    });
    createScrollTrigger($(this), tl);
  });

  $("[letters-fade-in]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      opacity: 0,
      duration: 0.2,
      ease: "power1.out",
      stagger: { amount: 0.8 },
    });
    createScrollTrigger($(this), tl);
  });

  $("[letters-fade-in-random]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      opacity: 0,
      duration: 0.05,
      ease: "power1.out",
      stagger: { amount: 0.4, from: "random" },
    });
    createScrollTrigger($(this), tl);
  });

  $("[scrub-each-word]").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 90%",
        end: "top center",
        scrub: true,
      },
    });
    tl.from($(this).find(".word"), {
      opacity: 0.2,
      duration: 0.2,
      ease: "power1.out",
      stagger: { each: 0.4 },
    });
  });



  
  // Avoid flash of unstyled content
  gsap.set("[text-split]", { opacity: 1 });
});
