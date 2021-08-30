import { Fancybox, Carousel } from "@fancyapps/ui";
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', function(){
    const sliderEl = document.querySelector(".slider-main");

    if (sliderEl) {
        const logoCarousel = new Carousel(document.querySelector(".slider-main"), {
            friction: 0.83,
            Dots: true,
            slidesPerPage: 1,
            center: false,
            fill: true
        });
    }

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

    $('.scroll-btn').click(function (e) {
        e.preventDefault();

        $([document.documentElement, document.body]).animate({
            scrollTop: $($(this).data('query')).offset().top
        }, 1000);
    });

    $('.calc-form .next-step').click(function () {
       const id = $(this).data('id');
       $('.step').removeClass('active');
       $(`.step[data-id=${id}]`).addClass('active');
    });

    $('.append-room').click(function () {
        $('.rooms ul li').removeClass('active');

        const roomsCount = $('.rooms li').length;
        const nextRoomNumber = roomsCount + 1;

        if (roomsCount < 4) {
            $('.rooms ul').append(`<li class="active" data-id="room${nextRoomNumber}">Комната ${nextRoomNumber} <button type="button"></button></li>`);

            $('.rooms-controls').removeClass('active');

            $('.rooms-wrap').append(`
                <div class="rooms-controls active" data-id="room${nextRoomNumber}">
              <div class="form-item">
                <label>Площадь помещения, м2</label>
                <input name="square" type="number" class="form-control" placeholder="Не указано">
              </div>
  
              <div class="form-item">
                <label>Тип помещения</label>
  
                <select name="room-type" class="select form-control">
                  <option>Выберите тип</option>
                  <option value="Спальня">Спальня</option>
                  <option value="Гостинная">Гостинная</option>
                  <option value="Кухня">Кухня</option>
                  <option value="Детская">Детская</option>
                </select>
              </div>
  
              <div class="two-controls">
                <div class="form-item">
                  <label>Сторона дома</label>
  
                  <select name="house-side" class="select form-control">
                    <option>Выберите тип</option>
                    <option value="Теневая">Теневая</option>
                    <option value="Солнечная">Солнечная</option>
                  </select>
                </div>
  
                <div class="form-item">
                  <label>Окна</label>
  
                  <select name="windows" class="select form-control">
                    <option>Выберите тип</option>
                    <option value="Стандартные">Стандартные</option>
                    <option value="Панорамные">Панорамные</option>
                  </select>
                </div>
              </div>
            </div>
            `);

            $('.rooms ul li').click(activateRoomControls);
            $('.rooms ul li button').click(removeRoom);
        }

        if (roomsCount === 3) {
            $(this).remove();
        }
    });

    $('.rooms ul li').click(activateRoomControls);
    $('.rooms ul li button').click(removeRoom);

    function removeRoom() {
        if ($('.rooms ul li').length > 1) {
            $(this).closest('li').remove();
            $('.rooms ul li').last().addClass('active');
        }
    }

    function activateRoomControls() {
        const room = $(this).data('id');

        $('.rooms ul li').removeClass('active');
        $(this).addClass('active');

        $('.rooms-controls').removeClass('active');
        $(`.rooms-controls[data-id=${room}]`).addClass('active');
    }
});