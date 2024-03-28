window.addEventListener("DOMContentLoaded", (event) => {
  // Select the element with the id of "intro"
  // const introElement = document.getElementById("intro");

  // Remove the element from the DOM
  // introElement.parentNode.removeChild(introElement);

  const signElement = document.getElementById("sign");

  // Create a new DOMParser instance
  const parser = new DOMParser();

  // Parse the SVG string into an XML document
  const svgXmlDoc = parser.parseFromString(
    `
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 603.89 203.19">
    <defs>
      <style>
        .cls-1 {
          stroke-width: 4px;
        }
  
        .cls-1, .cls-2, .cls-3, .cls-4, .cls-5 {
          fill: none;
          stroke: #000;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
  
        .cls-2 {
          stroke-width: 4.32px;
        }
  
        .cls-3 {
          stroke-width: 3.5px;
        }
  
        .cls-4 {
          stroke-width: 5.66px;
        }
  
        .cls-5 {
          stroke-width: 5px;
        }
      </style>
    </defs>
    <g id="Layer_1-2" data-name="Layer 1">
      <g>
        <path class="cls-4" d="M3.8,77.16C-4.77,64.21,43.61,2.83,142.75,2.83s140.1,65.81,249.24,65.81c15.43,0,38.48-3.64,35.72-11.5-2.76-7.86-46.1,11.88-49.91,21.5,13.95-1.71,35.42-4.67,36.35,4.81,1.56,15.9-38.86,35.62-37.13,12.71"/>
        <path class="cls-5" d="M418.75,101.54c8.77-20.48,16.31-42.67,23.94-67.24-9.62,28.4-24.7,76.29-29.36,96.83,3.47-10.99,8.3-21.36,14.61-31.05l-2.99,13.97,7.62-12.79c-.34,5.1-.35,9.74.51,13.24l8.83-10.1s-.32,5.65,3.75,8.13"/>
        <path class="cls-5" d="M457.7,105.26c-9.11-1.62-5.7-9.2,14.19-65.05l-42.07,118.14-15.07,42.33"/>
        <path class="cls-5" d="M452.08,101.16c-5.58,15.67-12.07,37.7-13.39,48.86,14.72-25.01,28.28-67.68,41.58-112.57-8.14,28.14-21.86,73.77-27.24,105.81,6.41-11.67,12.52-22.41,17.78-30.44-.38,5.37-1.03,10.76-1.99,16.19,4.79-4.87,8.69-10.2,11.45-16.12-.29,3.03-.04,5.77.73,8.22,4.01-3.16,7.1-7.13,9.46-11.75-.41,3.3-.55,6.37-.26,9.05,3.49-2.98,6.3-6.22,8.17-9.81-.55,4.81-.56,9.27.39,13.11,7.96-7.27,13.99-16.85,17.8-29.82-6.81,20.76-9.48,38.52,3.71,38.52,17.62,0,43.02-18.29,59.27-18.29s21.84,17.52,21.84,17.52"/>
        <line class="cls-5" x1="510.47" y1="58.69" x2="504.21" y2="64.24"/>
        <path class="cls-1" d="M95.7,87.78c.05-5.55,3.44-10.29,9.74-10.29,10.93,0,2.45,24.94-10.94,24.94-3.46,0-1.62-7.41,5.27-7.41,7.98,0,7.71,10.52,16.36,10.52,5.44,0,9.13-7.27,9.13-7.27"/>
        <path class="cls-1" d="M125.61,97.57c1.37-4.98,5.75-11.43,10.1-11.43,5.27,0-7.11,14.13-12.16,14.13s-3.7-12.92,13.02-26.57"/>
        <line class="cls-1" x1="147.11" y1="94.76" x2="147.11" y2="94.76"/>
        <line class="cls-1" x1="178.11" y1="91.76" x2="178.11" y2="91.76"/>
        <path class="cls-2" d="M156.73,88.45c0-3.19,5.12-11.86,10.45-11.86s-.21,7.83-4,11.05c9.98,3.07,4.08,15.11-5.43,11.1"/>
        <path class="cls-2" d="M192.51,85.97s1.95-9.95,8.9-9.95-3.78,18.14-7.33,18.14c-2.74,0-1.37-4.14,2.57-4.14,6.55,0,6.67,8.1,13.05,8.1,4.45,0,14.51-5.97,14.51-11.29,0-3.12-3.41-4.74-5.94-4.74-4.11,0-8.14,2.98-8.14,5.98,0,5.82,8.78,5.41,8.78,5.41"/>
        <path class="cls-3" d="M231.99,83.31s2.14-5.81,6.76-5.81c9.29,0-6.09,19.47-7.95,16.1-1.6-2.9,6.17-5.73,8.56,1.16,2.41-1.75,5.3-7.19,5.3-7.19"/>
        <line class="cls-5" x1="257.51" y1="75.54" x2="255.28" y2="97.83"/>
        <path class="cls-5" d="M257.51,75.54c-10.79,7.02-11.91,14.64-2,14.02"/>
        <path class="cls-5" d="M232.66,91.73c24.5-10.35,50.82-10.47,78.89-1.17"/>
      </g>
    </g>
  </svg>
`,
    "image/svg+xml"
  );

  // Get the first child of the parsed XML document (the SVG element)
  const svgElement = svgXmlDoc.firstChild;

  // Replace the inner content of the "sign" element with the SVG element
  signElement.innerHTML = "";
  signElement.appendChild(svgElement);

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
      onEnter: () => setTimeout(() => timeline.play()), // Add delay before playing the timeline
    });
  }

  var tlPattern = new TimelineMax({ repeat: -1 });

  tlPattern.to("#pattern", 80, {
    backgroundPosition: "0% -300%",
    //autoRound:false,
  });

  $("[parallax-image]").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom", // Start the parallax effect when the top of the image hits the bottom of the viewport
        end: "bottom top", // End the parallax effect when the bottom of the image hits the top of the viewport
        scrub: true, // Enable smooth scrolling
      },
    });

    // Scale up the image to give space for parallax
    // tl.from($(this), {
    //   scale: 1.2,
    //   ease: "none",
    // });

    // Change the background position on the y-axis during scroll
    tl.fromTo(
      $(this),
      { backgroundPositionY: "0%" },
      { backgroundPositionY: "90%", ease: "power1.out" },
      0
    );
  });

  function createScrollTriggerFooter(triggerElement, timeline) {
    ScrollTrigger.create({
      trigger: "#contact", // Trigger the animation when the last section is scrolled
      start: "bottom top+=40%", // Start the animation when the bottom of the last section hits the bottom of the viewport
      onEnter: () => {
        console.log("Yippie!");
        timeline.play();
      }, // Play the timeline when the animation starts
      onLeaveBack: () => timeline.reverse(), // Reverse the timeline when the animation ends
    });
  }

  gsap.from(".navbar-link-text", {
    delay: 4.3,
    opacity: 0,
    yPercent: 100,
    duration: 0.3,
    ease: "power1.out",
    stagger: { amount: 0.5 },
  });

  gsap.from(".hero-image", {
    delay: 4.2,
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "expo",
    stagger: { amount: 0.5 },
  });

  $("[text-intro-1]").each(function (index) {
    let tl = gsap.timeline({ delay: 4.3 });
    tl.from($(this).find(".char"), {
      opacity: 0,
      yPercent: 100,
      duration: 0.6,
      rotation: 5,
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
      rotation: 5,
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
  jQuery(document).mouseleave(function () {
    gsap.to(".custom-cursor", { scale: 0, opacity: 0, ease: "expo" });
  });
  jQuery(document).mouseenter(function () {
    gsap.to(".custom-cursor", { scale: 1, opacity: 1, ease: "expo" });
  });

  gsap.set(".custom-cursor", { xPercent: -50, yPercent: -50 });

  let xTo = gsap.quickTo(".custom-cursor", "x", {
      duration: 0.6,
      ease: "expo",
    }),
    yTo = gsap.quickTo(".custom-cursor", "y", { duration: 0.6, ease: "expo" });

  window.addEventListener("mousemove", (e) => {
    xTo(e.clientX + 10);
    yTo(e.clientY + 10);
  });

  // Add event for scaling cursor on <a> element hover
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
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
    // const delay = parseFloat($(this).attr("delay")) || 0; // Read the delay attribute, or use 0 if not present
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      yPercent: 100,
      duration: 0.2,
      ease: "power1.out",
      stagger: { amount: 0.6 },
    });
    createScrollTrigger($(this), tl);
  });

  $("[words-slide-up-footer]").each(function (index) {
    let tl = gsap.timeline({ paused: true, delay: 0.2 });
    tl.from($(this).find(".word"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.4,
      ease: "expo",
      stagger: { amount: 0.4 },
    });
    createScrollTriggerFooter($(this), tl);
  });

  $("[letters-slide-up-footer]").each(function (index) {
    let tl = gsap.timeline({ paused: true, delay: 0.3 });
    tl.from($(this).find(".char"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.4,
      ease: "expo",
      stagger: { amount: 0.4 },
    });
    createScrollTriggerFooter($(this), tl);
  });
  $("[lines-slide-up-footer]").each(function (index) {
    let tl = gsap.timeline({ paused: true, delay: 0.4 });
    tl.from($(this).children(), {
      opacity: 0,
      yPercent: 50,
      duration: 0.4,
      ease: "expo",
      stagger: { amount: 0.4 },
    });
    createScrollTriggerFooter($(this), tl);
  });
  const vivusInstance = new Vivus("Layer_2", {
    duration: 100,
    type: "oneByOne",
    start: "manual",
  });
  ScrollTrigger.create({
    trigger: "#contact", // Trigger the animation when the last section is scrolled
    start: "bottom bottom", // Start the animation when the bottom of the last section hits the bottom of the viewport
    end: "bottom top-=90%", // End the animation when the bottom of the last section is 25% above the top of the viewport
    onEnter: () => vivusInstance.play(), // Play the timeline when the animation starts
    onLeaveBack: () => vivusInstance.reset(),
  });
  // ScrollTrigger.create({
  //   trigger: "#footer-section", // replace with the actual selector for your footer-section
  //   start: "top 80%", // adjust this value to control when the animation should start
  //   onEnter: () => {
  //     console.log("playing!");
  //     vivusInstance.play(); // start the Vivus animation
  //   },
  // });

  // const delay = parseFloat($(this).attr("delay")) || 0; // Read the delay attribute, or use 0 if not present
  // let tl = gsap.timeline({ paused: true, delay });
  // TweenMax.staggerFromTo($(this), 6, {drawSVG: "0%"}, {drawSVG: "100%"}, 6);
  // tl.fromTo(
  //   $(this),
  //   { drawSVG: "0%" },
  //   { drawSVG: "100%", duration: 0.6, stagger: 0.6 }
  // );
  // createScrollTrigger($(this), tl, delay);

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
