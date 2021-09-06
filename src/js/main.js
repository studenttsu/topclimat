import { Fancybox, Carousel } from "@fancyapps/ui";

$(function() {
    function phone_mask() {
        $('input.phone-input').inputmask({
            mask: '+7 (999) 999-99-99'
        });

        $("input.phone-input").intlTelInput({
            autoHideDialCode: false,
            autoPlaceholder: "aggressive",
            placeholderNumberType: "MOBILE",
            preferredCountries: ['ru'],
            separateDialCode: true,
            utilsScript: "js/utils.js",
            customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
                return '+' + selectedCountryData.dialCode + ' ' + selectedCountryPlaceholder.replace(/[0-9]/g, '_');
            },
        });
        $("input.phone-input").on("countrychange", function (e, countryData) {
            $(this).val('');
            $(this).inputmask($(this).attr('placeholder').replace(/[_]/g, '9'));
        });
    }

    phone_mask();

    jQuery.validator.addMethod("phoneValidator", function (value, element) {
        return value.length > 0 ? /\+\d{1}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g.test(value) : true;
    });

    ['contains-dialog', 'price-dialog', 'order-dialog'].forEach(name => {
        $(`#${name} form`).validate({
            rules: {
                phone: {
                    required: true,
                    phoneValidator: true
                },
                name: 'required',
                policy: 'required'
            },
            errorPlacement: function (error, element) { },
            submitHandler: function (form) {
                form.submit();
            }
        });
    });

    $(`#price-list-form`).validate({
        rules: {
            phone: {
                required: true,
                phoneValidator: true
            },
            policy: 'required'
        },
        errorPlacement: function (error, element) { },
        submitHandler: function (form) {
            form.submit();
        }
    });

    $(`#full-catalog-form`).validate({
        rules: {
            phone: {
                required: true,
                phoneValidator: true
            },
            policy: 'required'
        },
        errorPlacement: function (error, element) { },
        submitHandler: function (form) {
            form.submit();
        }
    });

    $(`#price-form form`).validate({
        rules: {
            phone: {
                required: true,
                phoneValidator: true
            },
            name: 'required',
            policy: 'required'
        },
        errorPlacement: function (error, element) { },
        submitHandler: function (form) {
            form.submit();
        }
    });

    $(`#calc-request form`).validate({
        rules: {
            phone: {
                required: true,
                phoneValidator: true
            },
            name: 'required',
            policy: 'required'
        },
        errorPlacement: function (error, element) { },
        submitHandler: function (form) {
            form.submit();
        }
    });

    $('#actual-price-form').validate({
        rules: {
            phone: {
                required: true,
                phoneValidator: true
            },
            policy: 'required',
            square: 'required',
            name: 'required',
            'room-type': 'required'
        },
        errorPlacement: function (error, element) { },
        submitHandler: function (form) {
            form.submit();
        }
    });

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
        $('body').addClass('menu-opened');
    });

    $('.mobile-menu-close').on('click', function () {
        $('.mobile-menu').removeClass('opened');
        $('body').removeClass('menu-opened');
    });

    $('.mobile-menu__backdrop').on('click', () => $('.mobile-menu').removeClass('opened'));

    $('.mobile-menu li.with-secondary > div').on('click', function () {
        $(this).find('.arrow-btn').toggleClass('active')
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

    $('.append-room').click(appendRoom);
    $('.rooms ul li').click(activateRoomControls);
    $('.rooms ul li button').click(removeRoom);

    function appendRoom() {
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
    }

    function removeRoom() {
        if ($('.rooms ul li').length > 1) {
            $(this).closest('li').remove();
            $('.rooms ul li').last().addClass('active');

            $(`.rooms-controls[data-id=${$(this).closest('li').data('id')}]`).remove();
            $('.rooms-controls').last().addClass('active');

            if (!document.querySelector('.step[data-id=step1] .append-room')) {
                $('.step[data-id=step1] .calc-form__actions').prepend($('<button class="btn btn--outline append-room" type="button">Добавить комнату</button>'));
                $('.append-room').click(appendRoom);
            }

            if ($('.rooms ul li').length === 1) {
                $('.rooms ul li').first().addClass('active');
                $('.rooms-controls').first().addClass('active')
            }

            reorderRooms();
        }
    }

    function reorderRooms() {
        $('.rooms li').each(function (index, el) {
            el.setAttribute('data-id', `room${index + 1}`);
            el.innerHTML = `Комната ${index + 1} <button type="button"></button>`;
        });

        $('.rooms-controls').each(function (index, el) {
            el.setAttribute('data-id', `room${index + 1}`);
        });

        $('.rooms ul li button').click(removeRoom);
    }

    function activateRoomControls() {
        const room = $(this).data('id');

        $('.rooms ul li').removeClass('active');
        $(this).addClass('active');

        $('.rooms-controls').removeClass('active');
        $(`.rooms-controls[data-id=${room}]`).addClass('active');
    }
});