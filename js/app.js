
const timeLine = gsap.timeline({defaults: {ease: "power1.out"}});




timeLine.to(".text", {y: "0%", duration: 1, stagger: 0.25});
timeLine.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5 });
timeLine.to(".introAnimationSection", {y: "-100%", duration: 1}, "-=1.2");
timeLine.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1});
timeLine.fromTo(".introText", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");