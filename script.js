//SCROLL SUAVE

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

ScrollSmoother.create({
	smooth: 3,
    effects: true
});

// CHAMAR ANIMAÇÕES APÓS O PRELOADER
function animarPagina(){
    //ANIMAÇÕES HERO

gsap.from(".hero", {
    opacity:0,
    duration: 3
})

gsap.from("picture:nth-child(2)", {
    y:200,
    duration:1
})

gsap.from("picture:nth-child(1)", {
    y:-20,
    duration:1,
    filter:"blur(10px)",
})

//ANIMAÇÕ9ES CARDS

gsap.from(".card", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: .3,
    scrollTrigger: {
        trigger: ".cards",
        markers: false,
        start:"0% 80%",
        end: "100% 80%",
        scrub: true
    }
})

gsap.from(".secaoObrigado ul li", {
    opacity: 0,
    x: 40,
    stagger: 0.1,
    filter: "blur(5px)",
    scrollTrigger: {
        trigger: ".secaoObrigado",
        markers: false,
        start: "0% 80%",
        end: "100% 40%",
        scrub: true

    }

})

//ANIMAÇÕES FOOTER
gsap.from("footer", {
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
        trigger: "footer",
        markers: false,
        scrub: true,
        invalidateOnRefresh: true,
        end: "100% 100%"
        }
})

//ANIMAÇÕES LETRAS SURGINDO
const grupoTextoSplit = document.querySelectorAll(".textoSplit");

grupoTextoSplit.forEach(textoUnicoSplit =>{
    const split = SplitText.create(textoUnicoSplit, {
        type: "lines, words, chars",
        mask: "lines"
    });

    gsap.from(split.chars, {
        y: 40,
        duration: 0.05,
        stagger: .03,
        scrollTrigger: {
            trigger: textoUnicoSplit,
            markers: false
        }
    });
});
}



//ANIMAÇÕES PRELOADER

const tl = gsap.timeline({
    onComplete(){
        animarPagina()
        gsap.to("#preloader", {
            opacity:0,
            display: "none"
            
        })
    }
})

tl.to('#preloader path', {
    strokeDashoffset: 0,
    duration: 1.5,
})

tl.to('#preloader path', {
    fill: "rgb(168, 19, 19)",
    duration:0.5,
})