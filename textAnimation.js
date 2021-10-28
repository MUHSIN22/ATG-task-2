gsap.registerPlugin(ScrollTrigger)



ScrollTrigger.create({
    animation: firstPartSD,
    trigger: ".filler-1",
    start: "top top",
})
ScrollTrigger.create({
    animation: firstPartSU,
    trigger: ".filler-1"
})