const hamburger = $(".hamburger");
const navigation = $(".navigation");

hamburger.click(() => {
    hamburger.toggleClass("is-active");
    navigation.toggleClass("active");
});
