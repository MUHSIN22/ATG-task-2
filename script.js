
gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ duration: 0.5})

let firstSectionTL = gsap.timeline()
let secondSectionTL = gsap.timeline()
let thirdSectionTL = gsap.timeline()
let fourthSectionTL = gsap.timeline()
let fifthSectionTL = gsap.timeline()
let sixthSectionTL = gsap.timeline()
let seventhSectionTL = gsap.timeline()


firstSectionTL
    .fromTo('.first-section-image-1',
        { 
            yPercent:"100"
        },
        {
            yPercent:"-50", 
            autoAlpha : 1
        }
    )
    
    .fromTo('.first-section-image-2',
        {
            yPercent:"100"
        },
        {
            autoAlpha : 1,
            yPercent:"-50"
        },
        "-=0.5"
    )

secondSectionTL
        .fromTo('.second-section-image-1',
            {
                yPercent:"100"
            },
            {
                autoAlpha : 1,
                yPercent:"0"
            },
        )
        .fromTo('.second-section-image-2',
            {
                yPercent:"-100"
            },
            {
                yPercent:"0",
                autoAlpha : 1,
            },
            "-=0.5"
        )


thirdSectionTL  
            .fromTo('.third-section-image-1',
                {
                    yPercent:"100"
                },
                {
                    autoAlpha : 1,
                    yPercent:"-50"
                }
            )
            .fromTo('.third-section-image-2',
                {
                    yPercent:"-100"
                },
                {
                    yPercent:"0",
                    autoAlpha : 1,
                },
                "-=0.5"
            )

fourthSectionTL
                .fromTo('.fourth-section-image-1',
                    {
                        yPercent:"100"
                    },
                    {
                        yPercent:"0",
                        autoAlpha : 1,
                    }
                )
                .fromTo('.fourth-section-image-2',
                    {
                        yPercent:"-100"
                    },
                    {
                        yPercent:"0",
                        autoAlpha : 1,
                    },
                    "-=0.5"
                )
                .fromTo('.fourth-section-image-3',
                    {
                        yPercent:"-100"
                    },
                    {
                        yPercent:"0",
                        autoAlpha: 1
                    },
                    "-=0.5"
                )
                .fromTo('.fourth-section-image-4',
                    {
                        yPercent:"-100"
                    },
                    {
                        yPercent:"-50",
                        autoAlpha: 1
                    },
                    "-=0.5"
                )
                .fromTo('.fourth-section-image-5',
                    {
                        xPercent:"100",
                        yPercent:"100"
                    },
                    {
                        xPercent:"0",
                        yPercent:"0",
                        autoAlpha:1
                    },
                    "-=0.5"
                )

fifthSectionTL
            .fromTo(".fifth-section-image-1",
                {
                    yPercent:"-100"
                },
                {
                    yPercent:"0",
                    autoAlpha: 1
                }
            )
            .fromTo(".fifth-section-image-2",
                {
                    yPercent:"-100",
                },
                {
                    yPercent:"0",
                    autoAlpha: 1
                },
                "-=0.5"
            )
            .fromTo(".fifth-section-image-3",
                {
                    yPercent:"100"
                },
                {
                    yPercent:"0",
                    autoAlpha:"1"
                },
                "-=0.5"
            )
            .fromTo(".fifth-section-image-4",
                {
                    yPercent:"100"
                },
                {
                    yPercent:"0",
                    autoAlpha:"1"
                },
                "-=0.5"
            )
            .fromTo('.fifth-section-image-5',
                {
                    xPercent:"100",
                },
                {
                    xPercent:"0",
                    autoAlpha: 1
                },
                "-=0.5"
            )


sixthSectionTL
        .fromTo('.sixth-section-images',
            {
                yPercent:"100"
            },
            {
                yPercent:"0",
                autoAlpha:"1"
            }
        )


seventhSectionTL
        .fromTo(['.seventh-section-image-1','.seventh-section-image-2'],
            {
                yPercent:"100"
            },
            {
                yPercent:"0",
                autoAlpha:1
            }
        )

// Trigger For the first section
ScrollTrigger.create({
    animation: firstSectionTL,
    trigger:".filler-1",
    start: "-30 top",
    end:"bottom 100",
    toggleActions : "restart reverse play none"
})  

// Trigger for the second section

ScrollTrigger.create({
    animation: secondSectionTL,
    trigger:".filler-2",
    start:"top top",
    end:"bottom 100",
    toggleActions : "restart reverse play reverse"
})

// Trigger forn the third secondS
ScrollTrigger.create({
    animation: thirdSectionTL,
    trigger:".filler-3",
    start:"top top",
    end:"bottom 100",
    toggleActions : "restart reverse play reverse"
})

// Trigger for the fourth section
ScrollTrigger.create({
    animation: fourthSectionTL,
    trigger:".filler-4",
    start:"top top",
    end:"bottom 100",
    toggleActions : "restart reverse play reverse"
})

// Trigger for the fifth section
ScrollTrigger.create({
    animation: fifthSectionTL,
    trigger:".filler-5",
    start:"top top",
    end:"bottom 100",
    toggleActions : "restart reverse play reverse"
})

// Trigger for the sixth section
ScrollTrigger.create({
    animation: sixthSectionTL,
    trigger:".filler-6",
    start:"top top",
    end:"bottom 100",
    toggleActions : "restart reverse play reverse"
})

// Trigger for the seventh section
ScrollTrigger.create({
    animation: seventhSectionTL,
    trigger:".filler-7",
    start:"top top",
    toggleActions : "restart none play reverse"
})

