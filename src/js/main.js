import { Fancybox, Carousel } from "@fancyapps/ui";
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', function(){
    const logoCarousel = new Carousel(document.querySelector(".slider-main"), {
        friction: 0.83,
        Dots: true,
        slidesPerPage: 1,
        center: false,
        fill: true
    });

    $('.categories-links li.with-secondary')
        .on('mouseenter', function () { toggleSubLinks($(this, true)) })
        .on('mouseleave', function () { toggleSubLinks($(this), false) });

    function toggleSubLinks(el, isOpen) {
        $('.sub-links').removeClass('opened');
        let category = el.data('category');
        $(`.sub-links[data-id=${category}]`).toggleClass('opened', isOpen);
    }

    $('.burger-btn').on('click', function () {
        $('.mobile-menu').addClass('opened');
    });

    $('.mobile-menu-close').on('click', function () {
        $('.mobile-menu').removeClass('opened');
    });
    $('.mobile-menu__backdrop').on('click', () => $('.mobile-menu').removeClass('opened'));

    $('.mobile-menu .arrow-btn').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('li').toggleClass('active');
        $(this).closest('li').find('.sub-links').slideToggle('opened');
    });
});