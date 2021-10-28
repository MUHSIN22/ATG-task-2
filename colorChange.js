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
gsap.defaults({duration: 0.1})

let previousTop;


let firstSection = gsap.timeline()
let secondSection = gsap.timeline()
let thirdSection = gsap.timeline()
let fourthSection = gsap.timeline()
let fifthSection = gsap.timeline()
let sixthSection = gsap.timeline()
let seventhSection = gsap.timeline()

const setColor = (section,textSection,imageSection,top,fromLocation,headingFrom,headingTo, badgeFrom, badgeTo) => {

    section
    .fromTo([".text-section",".circle-center"],
        {
            backgroundColor: textSection
        },
        {
            backgroundColor: textSection
        }
    )
    .fromTo(".image-section",
        {
            backgroundColor: imageSection
        },
        {
            backgroundColor:imageSection
        }
    )
    .fromTo(".main-heading-wrapper",
        {
            css:{marginTop:fromLocation}
        },
        {
            css:{marginTop: top},
            duration: 0.3
        },
    )
    .fromTo(".headings-wrapper",
        {
            css:{marginTop: headingFrom}
        },
        {
            css:{marginTop: headingTo},
            duration: 0.3
        },
        "-=0.3"
    )
    .fromTo([".description",".btn-case-study",".btn-skip"],
        {
            yPercent: "50",
            autoAlpha: 0
        },
        {
            yPercent: "0",
            autoAlpha: 1,
            duration: 0.3
        },
        "-=0.3"
    )
    .fromTo('.badge-wrapper',
        {
            css:{marginTop: badgeFrom}
        },
        {
            css:{marginTop: badgeTo},
            duration: 0.3
        },
        "-0.3"
    )
    
    
}
sixthSection
    .fromTo([".text-section",".circle-center"],
        {
            backgroundColor: sixthBlue
        },
        {
            backgroundColor: sixthBlue
        }
    )
    .to(".image-section",{
        backgroundColor: 'transparent',
        backgroundImage: 'url(Assets/furniture-bg.jpg)'
    })
    .fromTo(".main-heading-wrapper",
        {
            css:{marginTop: -576}
        },
        {
            css:{marginTop: -720},
            duration: 0.3
        }
    )
    .fromTo(".headings-wrapper",
        {
            css:{marginTop: -320}
        },
        {
            css:{marginTop: -400},
            duration: 0.3
        },
        "-=0.3"
    )
    .fromTo([".description",".btn-case-study",".btn-skip"],
        {
            yPercent: "50",
            autoAlpha: 0
        },
        {
            yPercent: "0",
            autoAlpha: 1,
            duration: 0.3
        },
        "-=0.3"
    )


setColor(firstSection,purple,offWhite,0,144,80,0, 96, 0);
setColor(secondSection,blue, blueLeft, -144, 0, 0, -80, 0, -96)
setColor(thirdSection,darkBlue,darkBlueLeft, -288, -144, -80, -160)
setColor(fourthSection,offDarkBlue,extraDark, -432, -288, -160, -240)
setColor(fifthSection,lightBlue,aqua, -576, -432, -240, -320)
setColor(seventhSection,darkGreen,lightGreen,-864,-720, -400, -480, -500,-576)



ScrollTrigger.create({
    animation: firstSection,
    trigger: ".filler-1",
    start: "-20 top",
    bottom: "bottom top",
    toggleActions: "restart none restart none"
})
ScrollTrigger.create({
    animation: secondSection,
    trigger: ".filler-2",
    start: "top top",
    bottom: "bottom top",
    toggleActions: "restart none restart none"
})
ScrollTrigger.create({
    animation: thirdSection,
    trigger: ".filler-3",
    start: "top top",
    bottom: "bottom top",
    toggleActions: "restart none restart none"
})
ScrollTrigger.create({
    animation: fourthSection,
    trigger: ".filler-4",
    start: "top top",
    bottom: "bottom top",
    toggleActions: "restart none restart none"
})
ScrollTrigger.create({
    animation: fifthSection,
    trigger: ".filler-5",
    start: "top top",
    bottom: "bottom top",
    toggleActions: "restart none restart none"
})
ScrollTrigger.create({
    animation: sixthSection,
    trigger: ".filler-6",
    start: "top top",
    bottom: "bottom top",
    toggleActions: "restart reset restart reset"
})
ScrollTrigger.create({
    animation: seventhSection,
    trigger: ".filler-7",
    start: "top top",
    bottom: "bottom top",
    toggleActions: "restart none reverse none"
})
