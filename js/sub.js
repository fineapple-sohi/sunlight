$(document).ready(function(){


    /* tab */
    $(".tab:first-of-type, .tabpanel:first-of-type").addClass("active").attr("tabIndex", 0);
    $(".tab:first-of-type").attr("aria-selected", true);
    $(".tabpanel:first-of-type").attr("aria-hidden", false);
    
    $(".tab").on("keydown", function(e){

        var key = e.keyCode;  //왼37 오39 스페이스바32 엔터13
        
        switch(key){
            case 37:
                $(this).attr("tabIndex", -1);
                if($(this).hasClass("first")) $(this).siblings(".last").attr("tabIndex", 0).focus();
                else $(this).prev().attr("tabIndex", 0).focus();
                break;

            case 39:
                $(this).attr("tabIndex", -1);
                if($(this).hasClass("last")) $(this).siblings(".first").attr("tabIndex", 0).focus();
                else $(this).next().attr("tabIndex", 0).focus();
                break;

            case 32:
            case 13:
                var $tg = $(this);
                activeOn($tg);
                break;
        }
    });

    $(".tab").on("click", function(){
        var $tg = $(this);
        activeOn($tg);
    });

    function activeOn($target) {
        $($target).addClass("active").attr({"aria-selected": true, tabIndex: 0}).siblings().removeClass("active").attr({"aria-selected": false, tabIndex: -1});
        $("#" + $($target).attr("aria-controls")).addClass("active").attr({"aria-hidden": false, tabIndex: 0}).siblings
        (".tabpanel").removeClass("active").attr({"aria-hidden": true, tabIndex: -1});
    }




    /* interior slide */
    var interiorThumb1 = new Swiper('.interiorThumb1', {
        spaceBetween: 4,
        slidesPerView: 4,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        freeMode: true,
        loopedSlides: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideDuplicateActiveClass: 'swiper-slide-active'
    });
    var interiorView1 = new Swiper('.interiorView1', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.ctrls2.next',
            prevEl: '.ctrls2.prev',
        },
        autoplay: {
            delay: 3000,
        },
        loop: true,
        loopedSlides: 5,
        slideDuplicateActiveClass: 'swiper-slide-active',
        thumbs: {
            swiper: interiorThumb1,
        },
    });

    var interiorThumb2 = new Swiper('.interiorThumb2', {
        spaceBetween: 4,
        slidesPerView: 4,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        freeMode: true,
        loopedSlides: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideDuplicateActiveClass: 'swiper-slide-active'
    });
    var interiorView2 = new Swiper('.interiorView2', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.ctrls2.next',
            prevEl: '.ctrls2.prev',
        },
        autoplay: {
            delay: 3000,
        },
        loop: true,
        loopedSlides: 5,
        slideDuplicateActiveClass: 'swiper-slide-active',
        thumbs: {
            swiper: interiorThumb2,
        },
    });



});