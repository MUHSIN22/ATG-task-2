var purple = "#6311a8",
    offWhite =  "#ccccce",
    blue =  "#4d27cd",
    blueLeft =  "#1c0362",
    darkBlue =  "#0e123a",
    darkBlueLeft =  "#141748",
    offDarkBlue =  "#15253a",
    extraDark =  "#0d131b",
    lightBlue =  "#1264e7",
    aqua =  "#22cfea",
    sixthBlue =  "#012c91",
    darkGreen =  "#00834c",
    lightGreen =  "#01b769"

gsap.registerPlugin(ScrollTrigger)


let firstSection = gsap.timeline()
let secondSection = gsap.timeline()

const setColor = (section,textSection,imageSection) =>{
    section
    .to([".text-section",".circle-center"],{
        backgroundColor: textSection
    })
    .to(".image-section",{
        backgroundColor: imageSection
    },"-=0.4")
}

setColor(firstSection,purple,offWhite);
setColor(secondSection,blue, blueLeft)

ScrollTrigger.create({
    animation: firstSection,
    trigger: ".filler-1",
    start: "-20 top",
    bottom: "bottom top",
    scrub: true
    // toggleActions: "restart reverse play reverse"
})
ScrollTrigger.create({
    animation: secondSection,
    trigger: ".filler-2",
    start: "top top",
    bottom: "bottom top",
    scrub:true
})
