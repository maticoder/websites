gsap.registerPlugin(ScrollTrigger);

const heroH1 = document.querySelector(".hero h1");
const heroA = document.querySelectorAll(".hero a");
const news = document.querySelector(".news");
const can = document.querySelector(".can");
const cards = document.querySelectorAll(".cards .card");
const cardsH1 = document.querySelector(".can h1");
const codeContent = document.querySelector(".code .code-content");
const testimonials = document.querySelector(".testimonials");
const info = document.querySelector("#info");
const infoContent = document.querySelectorAll(".info .info-content");
const footer = document.querySelector(".footer");

const tl = gsap.timeline();

tl.fromTo(
    heroH1,
    {
        opacity: 0,
        transform: "translateY(50%)",
    },
    {
        opacity: 1,
        transform: "translateY(0)",
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
    }
).fromTo(
    heroA,
    {
        opacity: 0,
        transform: "translateY(50%)",
    },
    {
        opacity: 1,
        transform: "translateY(0)",
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut",
    },
    "-=1"
);

gsap.fromTo(
    news,
    {
        opacity: 0,
        transform: "translateY(20%)",
    },
    {
        opacity: 1,
        transform: "translateY(0)",
        duration: 0.5,
        stagger: 0.15,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: news,
            start: "top 70%",
        },
    }
);

gsap.fromTo(
    [cardsH1, cards],
    {
        opacity: 0,
        transform: "translateY(20%)",
    },
    {
        opacity: 1,
        transform: "translateY(0)",
        duration: 0.5,
        stagger: 0.15,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: can,
            start: "top 70%",
        },
    }
);

gsap.fromTo(
    codeContent.children,
    {
        opacity: 0,
        transform: "translateY(50%)",
    },
    {
        opacity: 1,
        transform: "translateY(0)",
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
        scrollTrigger: {
            trigger: codeContent,
            start: "top 70%",
        },
    }
);

gsap.fromTo(
    testimonials.children,
    {
        opacity: 0,
        transform: "translateY(50px)",
    },
    {
        opacity: 1,
        transform: "translateY(0)",
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
        stagger: 0.2,
        scrollTrigger: {
            trigger: testimonials,
            start: "top 70%",
        },
    }
);

gsap.fromTo(
    infoContent,
    {
        opacity: 0,
        transform: "translateY(50px)",
    },
    {
        opacity: 1,
        transform: "translateY(0)",
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
        stagger: 0.2,
        scrollTrigger: {
            trigger: info,
            start: "top 70%",
        },
    }
);

gsap.fromTo(
    footer.children,
    {
        opacity: 0,
        transform: "translateY(50px)",
    },
    {
        opacity: 1,
        transform: "translateY(0)",
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
        stagger: 0.2,
        scrollTrigger: {
            trigger: footer,
            start: "top 70%",
        },
    }
);
