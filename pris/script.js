const toggle = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// hamburger menu toggle effect
toggle.addEventListener("click", () => {
    toggle.classList.toggle("is-active");
    navLinks.classList.toggle("active");
    $(".dropdown-links.active").removeClass("active");
    $(".nav-arrow").removeClass("flipped");
});

// calculate position of scope div
const why = document.querySelector(".why-link ul");
const learn = document.querySelector(".learn-link ul");
const projects = document.querySelector(".projects-link ul");
const community = document.querySelector(".community-link ul");
const style = document.createElement("style");

const whyLink = $(".why-link");
const learnLink = $(".learn-link");
const projectsLink = $(".projects-link");
const communityLink = $(".community-link");

const scope = $(".scope");

function calculateThings() {
    if (style.parentNode === document.head) {
        document.head.removeChild(style);
    }
    document.head.appendChild(style);
    const styleSheet = style.sheet;
    styleSheet.insertRule(
        `.why-scope { left: ${why.getBoundingClientRect().left}px; }`,
        0
    );
    styleSheet.insertRule(
        `.learn-scope { left: ${learn.getBoundingClientRect().left}px; }`,
        0
    );
    styleSheet.insertRule(
        `.projects-scope { left: ${projects.getBoundingClientRect().left}px; }`,
        0
    );
    styleSheet.insertRule(
        `.community-scope { left: ${
            community.getBoundingClientRect().left
        }px; }`,
        0
    );

    whyLink.hover(
        () => {
            scope.addClass("why-scope");
        },
        () => {
            scope.removeClass("why-scope");
        }
    );

    learnLink.hover(
        () => {
            scope.addClass("learn-scope");
        },
        () => {
            scope.removeClass("learn-scope");
        }
    );

    projectsLink.hover(
        () => {
            scope.addClass("projects-scope");
        },
        () => {
            scope.removeClass("projects-scope");
        }
    );

    communityLink.hover(
        () => {
            scope.addClass("community-scope");
        },
        () => {
            scope.removeClass("community-scope");
        }
    );
}

calculateThings();

window.onresize = calculateThings;

// Flipping arrows in mobier version of navbar
const navLink = $(".nav-link");
navLink.click(function (e) {
    if (
        $(e.target).is("span") &&
        !window.matchMedia("(min-width: 900px)").matches
    ) {
        if ($(this).children().eq(1).hasClass("active")) {
            $(this).children().eq(1).toggleClass("active");
            $(this).children().eq(0).children().eq(1).toggleClass("flipped");
        } else {
            $(".dropdown-links.active").removeClass("active");
            $(".nav-arrow.flipped").removeClass("flipped");
            $(this).children().eq(1).toggleClass("active");
            $(this).children().eq(0).children().eq(1).toggleClass("flipped");
        }
    }
});

let number = 0;

setInterval(() => {
    $(`.up-${number % 5}`).toggleClass(`up-${number % 5} up-${++number % 5}`);
}, 2000);
