var tl = gsap.timeline();

tl.from("#nav h1, #nav h4, #nav i, #nav h5", {
  delay: 0.5,
  y: -50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
})
  .from("#center>h1", {
    opacity: 0,
    y: 40,
    scale: 1.2,
  })
  .from("#center>p", {
    opacity: 0,
    y: 40,
    scale: 1.2,
    duration: 0.3,
  })
  .from("#page1 img", {
    opacity: 0,
    scale: 0.8,
    duration: 0.3,
  });

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2 h2",
    scroller: "body",
    // markers: true,
    start: "top 80%",
  },
});

tl2.from("#page2 > h2", {
  y: 30,
  opacity: 0,
});

tl2.from("#page2 > p", {
  y: 30,
  opacity: 0,
});

gsap.from("#page2 .elem", {
  y: 80,
  scale: 0.7,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2 .elem",
    scroller: "body",
    // markers: true,
    start: "top 80%",
  },
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2-part2 h2",
    scroller: "body",
    start: "top 80%",
  },
});

tl3.from("#page2-part2 h2, #page2-part2 p, #score-container", {
  y: 80,
  opacity: 0,
});

tl3.from(".score-bottom", {
  width: 0,
  duration: 1,
});

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3 h2",
    scroller: "body",
    start: "top 80%",
  },
});

tl4.from("#page3 h2, #page3 #item-container", {
  y: 80,
  opacity: 0,
});

gsap.from("#page4 h2, #page4 p,#page4 #elem-container", {
  y: 80,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page4 h2",
    scroller: "body",
    start: "top 80%",
  },
});

gsap.from("#page5 #last-box", {
  y: 80,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page5 #last-box",
    scroller: "body",
    start: "top 80%",
  },
});
