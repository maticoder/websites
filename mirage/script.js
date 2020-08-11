const hamburger = $(".hamburger");
const navigation = $(".navigation");
const navLinks = $(".navigation .nav-links .nav-link");

hamburger.click(() => {
    hamburger.toggleClass("is-active");
    navigation.toggleClass("active");
});

navLinks.click(() => {
    hamburger.removeClass("is-active");
    navigation.removeClass("active");
});

let currentDesktop = 1;

const leftButtonDesktop = $(".desktop .arrow-left");
const rightButtonDesktop = $(".desktop .arrow-right");

let currentMobile = 1;

const leftButtonMobile = $(".mobile .arrow-left");
const rightButtonMobile = $(".mobile .arrow-right");

const calculateThings = () => {
    let numberDesktop = $(".desktop .testimonial").outerWidth();

    let positionDesktop = 0 - (currentDesktop - 1) * numberDesktop;
    $(".desktop .testimonial").each((index, element) => {
        $(element).css("left", `${positionDesktop}px`);
        positionDesktop += numberDesktop;
    });

    rightButtonDesktop.off("click");
    rightButtonDesktop.click(() => {
        if (currentDesktop === 6) {
            return;
        } else {
            let offset =
                0 - (currentDesktop - 1) * numberDesktop - numberDesktop;
            $(".desktop .testimonial").each((index, element) => {
                $(element).css("left", `${offset}px`);
                offset += numberDesktop;
            });
            currentDesktop += 1;
        }
    });

    leftButtonDesktop.off("click");
    leftButtonDesktop.click(() => {
        if (currentDesktop === 1) {
            return;
        } else {
            let offset =
                0 - (currentDesktop - 1) * numberDesktop + numberDesktop;
            $(".desktop .testimonial").each((index, element) => {
                $(element).css("left", `${offset}px`);
                offset += numberDesktop;
            });
            currentDesktop -= 1;
        }
    });

    let numberMobile = $(".mobile .testimonial").outerWidth();

    let maxHeightOfParagraph = 0;
    let maxHeightOfHeader = 0;

    $(".mobile .testimonial h1").css("height", "initial");
    $(".mobile .testimonial p").css("height", "initial");

    $(".mobile .testimonial h1").each((index, element) => {
        if (maxHeightOfHeader < $(element).outerHeight()) {
            maxHeightOfHeader = $(element).outerHeight();
        }
    });

    $(".mobile .testimonial p").each((index, element) => {
        if (maxHeightOfParagraph < $(element).outerHeight()) {
            maxHeightOfParagraph = $(element).outerHeight();
        }
    });

    $(".mobile .testimonial h1").css("height", `${maxHeightOfHeader}px`);
    $(".mobile .testimonial p").css("height", `${maxHeightOfParagraph}px`);

    let height = maxHeightOfHeader + 10 + maxHeightOfParagraph + 20 + 75;
    $(".mobile .testimonial-content").css("height", `${height}px`);
    $(".mobile .testimonial").css("height", `${height}px`);

    let positionMobile = 0 - (currentMobile - 1) * numberMobile;
    $(".mobile .testimonial").each((index, element) => {
        $(element).css("left", `${positionMobile}px`);
        positionMobile += numberMobile;
    });

    rightButtonMobile.off("click");
    rightButtonMobile.click(() => {
        if (currentMobile === 6) {
            return;
        } else {
            let offset = 0 - (currentMobile - 1) * numberMobile - numberMobile;
            console.log(offset);
            $(".mobile .testimonial").each((index, element) => {
                $(element).css("left", `${offset}px`);
                offset += numberMobile;
            });
            currentMobile += 1;
        }
    });

    leftButtonMobile.off("click");
    leftButtonMobile.click(() => {
        if (currentMobile === 1) {
            return;
        } else {
            let offset = 0 - (currentMobile - 1) * numberMobile + numberMobile;
            $(".mobile .testimonial").each((index, element) => {
                $(element).css("left", `${offset}px`);
                offset += numberMobile;
            });
            currentMobile -= 1;
        }
    });
};

calculateThings();

window.onresize = calculateThings;
