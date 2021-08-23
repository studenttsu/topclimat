import { Fancybox, Carousel } from "@fancyapps/ui";

document.addEventListener('DOMContentLoaded', function(){
    const logoCarousel = new Carousel(document.querySelector(".slider-main"), {
        friction: 0.83,
        Dots: true,
        slidesPerPage: 1,
        center: false,
        fill: true
    });
});