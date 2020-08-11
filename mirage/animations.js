gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

const nav = document.querySelector(".nav");

const hero = document.querySelector(".hero");
const heroTop = document.querySelector(".hero .hero-top");
const heroBottom = document.querySelector(".hero .hero-bottom");

tl.set([heroTop, heroBottom], {
    opacity: 0,
});

tl.fromTo(
    nav,
    {
        y: "-=100",
    },
    {
        y: 0,
        duration: 1,
        ease: "easeInOut",
    }
)
    .fromTo(
        heroTop,
        {
            y: "-=100",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "easeInOut",
        },
        "-=0.5"
    )
    .fromTo(
        heroBottom,
        {
            y: "+=100",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "easeInOut",
        },
        "-=1"
    );

const services = document.querySelector(".services");
const servicesParagraphH3 = document.querySelector(".services h3");
const servicesParagraphH1 = document.querySelector(".services h1");

gsap.set([servicesParagraphH1, servicesParagraphH3], {
    opacity: 0,
});

gsap.fromTo(
    [servicesParagraphH1, servicesParagraphH3],
    {
        y: "+=100",
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "easeInOut",
        scrollTrigger: {
            trigger: services,
            start: "top 50%",
        },
    }
);

const mq = window.matchMedia("(min-width: 992px)");
const cards = document.querySelectorAll(".services .card");

if (mq.matches === true) {
    gsap.fromTo(
        cards,
        {
            y: "+=100",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "easeInOut",
            scrollTrigger: {
                trigger: cards,
                start: "top 60%",
            },
        }
    );
} else {
    cards.forEach((card) => {
        gsap.fromTo(
            card,
            {
                y: "+=100",
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "easeInOut",
                scrollTrigger: {
                    trigger: card,
                    start: "top 70%",
                },
            }
        );
    });
}

const designTop = document.querySelector(".design .top");
const designBottom = document.querySelector(".design .bottom");

gsap.fromTo(
    designTop,
    {
        transform: "rotateY(90deg)",
        opacity: 0,
    },
    {
        transform: "rotateY(0)",
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: designTop,
            start: "top 40%",
        },
    }
);

gsap.fromTo(
    designBottom,
    {
        transform: "rotateY(-90deg)",
        opacity: 0,
    },
    {
        transform: "rotateY(0)",
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: designBottom,
            start: "top 40%",
        },
    }
);

const teamworkTop = document.querySelector(".teamwork .top");
const teamworkBottom = document.querySelector(".teamwork .bottom");

gsap.fromTo(
    teamworkTop,
    {
        transform: "scale(0.6)",
        opacity: 0,
    },
    {
        transform: "scale(1)",
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
            trigger: teamworkTop,
            start: "top 60%",
        },
    }
);

gsap.fromTo(
    teamworkBottom,
    {
        transform: "scale(0.6)",
        opacity: 0,
    },
    {
        transform: "scale(1)",
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
            trigger: teamworkBottom,
            start: "top 60%",
        },
    }
);

const testimonials = document.querySelectorAll(".testimonials");
const testimonialsH1 = document.querySelector(".testimonials h1");
const testimonialsH3 = document.querySelector(".testimonials h3");
const testimonialContent = document.querySelectorAll(
    ".testimonials .testimonial-content"
);
const testimonialArrows = document.querySelectorAll(".testimonials .arrows");
const testimonialQuotes = document.querySelector(".testimonials .quotes");

const testimonialsTl = gsap.timeline({
    scrollTrigger: {
        trigger: testimonials,
        start: "top 70%",
    },
});

testimonialsTl
    .fromTo(
        testimonialsH3,
        {
            transform: "translateX(-100px)",
            opacity: 0,
        },
        {
            transform: "translateX(0)",
            opacity: 1,
            duration: 1,
        }
    )
    .fromTo(
        testimonialsH1,
        {
            transform: "translateX(100px)",
            opacity: 0,
        },
        {
            transform: "translateX(0)",
            opacity: 1,
            duration: 1,
        },
        "-=0.7"
    )
    .fromTo(
        testimonialQuotes,
        {
            transform: "translateX(100px)",
            opacity: 0,
        },
        {
            transform: "translateX(0)",
            opacity: 1,
            duration: 1,
        },
        "-=1"
    )
    .fromTo(
        testimonialContent,
        {
            transform: "translateX(-100px)",
            opacity: 0,
        },
        {
            transform: "translateX(0)",
            opacity: 1,
            duration: 1,
        },
        "-=0.7"
    )
    .fromTo(
        testimonialArrows,
        {
            transform: "translateX(100px)",
            opacity: 0,
        },
        {
            transform: "translateX(0)",
            opacity: 1,
            duration: 1,
        },
        "-=0.7"
    );

const clients = document.querySelectorAll(".clients .client");
gsap.fromTo(
    clients,
    {
        opacity: 0,
        transform: "translateY(100px)",
    },
    {
        opacity: 1,
        transform: "translateY(0)",
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: clients,
            start: "top 70%",
        },
    }
);

const subscribe = document.querySelector(".subscribe");
const subscribeH3 = document.querySelector(".subscribe h3");
const subscribeH1 = document.querySelector(".subscribe h1");
const subscribeP = document.querySelector(".subscribe p");
const subscribeForm = document.querySelector(".subscribe form");

gsap.fromTo(
    [subscribeH3, subscribeH1, subscribeP, subscribeForm],
    {
        transform: "translateY(100px)",
        opacity: 0,
    },
    {
        transform: "translateY(0)",
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: subscribe,
            start: "top 40%",
        },
    }
);

const footer = document.querySelector(".footer");
const footerLeft = document.querySelector(".footer .left");
const footerRight = document.querySelector(".footer .right");

gsap.fromTo(
    [footerLeft, footerRight.children],
    {
        transform: "translateY(200px)",
        opacity: 0,
    },
    {
        transform: "translateY(0)",
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: footer,
            start: "top 70%",
        },
    }
);

// gsap.fromTo(
//     services.children,
//     {
//         y: "+=100",
//         opacity: 0,
//     },
//     {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "easeInOut",
//         scrollTrigger: {
//             trigger: services,
//             start: "top 50%",
//         },
//     }
// );
