// smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    //  console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// GSAP

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);



const svganim = gsap.utils.toArray(".svganim");
svganim.forEach((animdiv) => {

})

/* Pin scenes */
let scenes = gsap.utils.toArray(".scene");
timePerCharacter = 0.02;

scenes.forEach(el => {
    ScrollTrigger.create({
        trigger: "#" + el.id,
        start: "top top",
        end: "bottom bottom",
        pin: "#" + el.id,
        pinSpacing: true,
    });

    /* typewriter effect */
    let lines = gsap.utils.toArray("#" + el.id + " .love div");

    lines.forEach(el2 => {

        gsap.from(el2, {
            scrollTrigger: {
                trigger: el2,
                start: "top: 40%",
                end: "top 0%",
                
            },
            text: "",
            duration: el2.innerHTML.length * timePerCharacter,
            ease: "none",

        });

    })

    /* animate images */
    gsap.from('#' + el.id + ' .drawsvg', {
        drawSVG: 0,
        duration: 35,
        stagger: .3,
        scrollTrigger: {
            trigger: el,
            start: 'top 00%',
            end: 'bottom 10%',
            scrub: true,
        },
    });
    gsap.to('#' + el.id + ' img', {
        scrollTrigger: {
            trigger: el,
            start: 'top 0%',
            end: 'bottom 10%',
            scrub: true,

        },
        opacity: 1
    })

});

/* some cute color changes */

gsap.to("h1", {
    color: 'red',
    scale:2,
    scrollTrigger: {
        trigger:"h1",
        start: "top 30%",
        scrub:true,
        end: "bottom: 10%"

    }
})


/* Progress Bar */
gsap.from("#progress",{
    scrollTrigger:{
        trigger: "#plb-scene",
        scrub:true,
        start: "top top",
        end:() => document.querySelector(".wrapper").offsetHeight
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
})