gsap.registerPlugin(ScrollTrigger)

let firstSectionSVG = gsap.timeline()
let secondSectionSVG = gsap.timeline()
let thirdSectionSVG = gsap.timeline()
let fourthSectionSVG = gsap.timeline()
let fifthSectionSVG = gsap.timeline()
let sixthSectionSVG = gsap.timeline()
let seventhSectionSVG = gsap.timeline()

firstSectionSVG
    .fromTo("#Opaque_Ring",
        {
            strokeDasharray:"0,1000"
        },
        {
            strokeDasharray:"0,1000"
        }
    )

secondSectionSVG
    .fromTo("#Opaque_Ring",
        {
            strokeDasharray:"0,1000"
        },
        {
            strokeDasharray: "143,1000",
            duration: 0.5
        }
    )
    .fromTo(".dotsfill2",
        {
            autoAlpha: 0.2
        },
        {
            autoAlpha: 1
        }
    )

thirdSectionSVG
    .fromTo("#Opaque_Ring",
        {
            strokeDasharray: "143,1000"
        },
        {
            strokeDasharray: "286,1000",
            duration: 0.5
        }
    )
    .fromTo(".dotsfill3",
        {
            autoAlpha: 0.2
        },
        {
            autoAlpha: 1
        }
    )

fourthSectionSVG
    .fromTo("#Opaque_Ring",
        {
            strokeDasharray: "286,1000"
        },
        {
            strokeDasharray: "405,1000",
            duration: 0.5
        }
    )
    .fromTo(".dotsfill4",
        {
            autoAlpha: 0.2
        },
        {
            autoAlpha: 1
        }
    )    

fifthSectionSVG
    .fromTo("#Opaque_Ring",
        {
            strokeDasharray: "405,1000"
        },
        {
            strokeDasharray: "540,1000",
            duration: 0.5
        }
    )
    .fromTo(".dotsfill5",
        {
            autoAlpha: 0.2
        },
        {
            autoAlpha: 1
        }
    )


sixthSectionSVG
    .fromTo("#Opaque_Ring",
        {
            strokeDasharray: "540,1000"
        },
        {
            strokeDasharray: "680,1000",
            duration: 0.5
        }
    )
    .fromTo(".dotsfill6",
        {
            autoAlpha: 0.2
        },
        {
            autoAlpha: 1
        }
    )
seventhSectionSVG
    .fromTo("#Opaque_Ring",
        {
            strokeDasharray: "680,1000"
        },
        {
            strokeDasharray: "820,1000",
            duration: 0.5
        }
    )
    .fromTo(".dotsfill7",
        {
            autoAlpha: 0.2
        },
        {
            autoAlpha: 1
        }
    )


    ScrollTrigger.create({
        animation: firstSectionSVG,
        trigger:".filler-1",
        start: "-30 top",
        end:"bottom 100",
        toggleActions : "restart none none reverse"
    }) 

    ScrollTrigger.create({
        animation: secondSectionSVG,
        trigger:".filler-2",
        start:"top top",
        end:"bottom 100",
        toggleActions : "restart none none reverse"
    })
    
    // Trigger forn the third secondS
    ScrollTrigger.create({
        animation: thirdSectionSVG,
        trigger:".filler-3",
        start:"top top",
        end:"bottom 100",
        toggleActions : "restart none none reverse"
    })
    
    // Trigger for the fourth section
    ScrollTrigger.create({
        animation: fourthSectionSVG,
        trigger:".filler-4",
        start:"top top",
        end:"bottom 100",
        toggleActions : "restart none none reverse"
    })
    
    // Trigger for the fifth section
    ScrollTrigger.create({
        animation: fifthSectionSVG,
        trigger:".filler-5",
        start:"top top",
        end:"bottom 100",
        toggleActions : "restart none none reverse"
    })
    
    // Trigger for the sixth section
    ScrollTrigger.create({
        animation: sixthSectionSVG,
        trigger:".filler-6",
        start:"top top",
        end:"bottom 100",
        toggleActions : "restart none none reverse"
    })
    
    // Trigger for the seventh section
    ScrollTrigger.create({
        animation: seventhSectionSVG,
        trigger:".filler-7",
        start:"top top",
        toggleActions : "restart none none reverse"
    })
    
    