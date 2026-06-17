// Check out the really ⚡️ powerful gsap.utils if you're not familar with them https://gsap.com/docs/v3/GSAP/UtilityMethods
const scaleMax = gsap.utils.mapRange(1, document.querySelectorAll(".card").length - 1, 0.8, 1);  // Convert values we know to values we want https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()
const time = 2; 

gsap.set('.card', {
  y: (index) => 30 * index, // set offset
  transformStyle: "preserve-3d", // For the perspecitve effect
  transformPerspective: 1000, // For the perspecitve effect
  transformOrigin: "center top", 
})

//--------------------------------//
// The animation 
//--------------------------------//
const tl = gsap.timeline({
  // scrollTrigger:{
  //   trigger: "section",
  //   start: "top top",
  //   end: `${window.innerHeight * 5} top`,
  //   scrub: true, 
  //   pin: true,
  //   markers: true,
  // }
});

// Animte cards up from off screen one by one.
tl.from(".card", {
  y: () => window.innerHeight,
  duration: time/2,
  stagger: time
});

// 
tl.to(
  ".card:not(:last-child)",
  {
    rotationX: -20,
    scale: (index) => scaleMax(index), // dynamlicly get scale based on the index of the current card
    stagger: {
      each: time
    }
  },
  time // Start tween when the first cards has done animating
);

// END The animation --------------//


