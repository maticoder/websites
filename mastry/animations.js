const peopleMan = document.querySelector("#people #man");
const peopleWoman = document.querySelector("#people #woman");
const peopleBackground = document.querySelector("#people #background");
const peoplePot = document.querySelector("#people #pot");
const peopleText = document.querySelector(".hero .top");

const brandsBox = document.querySelector(".brands");
const brandsText = document.querySelector(".brands h4");
const brands = document.querySelectorAll(".brands .brand");

const services = document.querySelector(".services");
const servicesTop = document.querySelector(".services .top");
const servicesBottom = document.querySelector(".services .bottom");

const prove = document.querySelector(".prove");
const proveTop = document.querySelector(".prove .top");
const proveBottom = document.querySelector(".prove .bottom");

const cardspatrons = document.querySelector(".patrons");
const patronsArray = document.querySelectorAll(".patrons .patron");

const process = document.querySelector(".process");

const cards = document.querySelector(".cards");
const cardsArray = document.querySelectorAll(".cards .card");

const message = document.querySelector(".message");

const nav = document.querySelector("#nav");

const footer = document.querySelector(".footer");
const footerLeft = document.querySelector(".footer .left");
const footerRight = document.querySelector(".footer .right");

const mql = window.matchMedia("(min-width: 992px)");

gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline();
timeline

    .fromTo(
        nav,
        {
            y: "-50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    )
    .addLabel("myLabel", "+=0")
    .fromTo(
        peopleText,
        {
            y: "-50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    )
    .fromTo(
        peopleBackground,
        {
            y: "50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "easeInOut",
        },
        "myLabel"
    )
    .fromTo(
        peopleMan,
        {
            y: "-50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    )
    .fromTo(
        peopleWoman,
        {
            y: "-50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    )

    .fromTo(
        peoplePot,
        {
            y: "-50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "easeInOut",
        }
    );

gsap.fromTo(
    brandsText,
    {
        y: "50px",
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "easeInOut",
        scrollTrigger: {
            trigger: brandsBox,
            start: "top 70%",
        },
    }
);

gsap.fromTo(
    brands,
    {
        y: "50px",
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: brandsBox,
            start: "top 70%",
        },
    }
);

if (mql.matches) {
    gsap.fromTo(
        servicesTop,
        {
            y: "50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: services,
                start: "30% 70%",
            },
        }
    );

    gsap.fromTo(
        servicesBottom,
        {
            y: "-50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: services,
                start: "30% 70%",
            },
        }
    );

    gsap.fromTo(
        proveTop,
        {
            y: "50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: prove,
                start: "30% 70%",
            },
        }
    );

    gsap.fromTo(
        proveBottom,
        {
            y: "-50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: prove,
                start: "30% 70%",
            },
        }
    );

    gsap.fromTo(
        patronsArray,
        {
            y: "50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: patrons,
                start: "30% 70%",
            },
        }
    );

    gsap.fromTo(
        process.children,
        {
            y: "50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: process,
                start: "30% 70%",
            },
        }
    );

    gsap.fromTo(
        cardsArray,
        {
            y: "50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: cards,
                start: "30% 70%",
            },
        }
    );

    gsap.fromTo(
        message,
        {
            y: "50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: message,
                start: "30% 70%",
            },
        }
    );

    gsap.fromTo(
        [footerLeft, footerRight.children],
        {
            y: "50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: footer,
                start: "30% 70%",
            },
        }
    );
} else {
    gsap.fromTo(
        servicesTop,
        {
            y: "50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: servicesTop,
                start: "30% 70%",
            },
        }
    );

    gsap.fromTo(
        servicesBottom,
        {
            y: "50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: servicesBottom,
                start: "30% 70%",
            },
        }
    );

    gsap.fromTo(
        proveTop,
        {
            y: "50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: proveTop,
                start: "30% 70%",
            },
        }
    );

    gsap.fromTo(
        proveBottom,
        {
            y: "50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: proveBottom,
                start: "30% 70%",
            },
        }
    );

    patronsArray.forEach((patron) => {
        gsap.fromTo(
            patron,
            {
                y: "50px",
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: patron,
                    start: "30% 70%",
                },
            }
        );
    });

    Array.from(process.children).forEach((process) => {
        gsap.fromTo(
            process,
            {
                y: "50px",
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: process,
                    start: "30% 70%",
                },
            }
        );
    });

    cardsArray.forEach((card) => {
        gsap.fromTo(
            card,
            {
                y: "50px",
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: card,
                    start: "30% 70%",
                },
            }
        );
    });

    gsap.fromTo(
        message,
        {
            y: "50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: message,
                start: "30% 70%",
            },
        }
    );

    gsap.fromTo(
        [footerLeft, footerRight.children],
        {
            y: "50px",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: footer,
                start: "30% 70%",
            },
        }
    );
}
