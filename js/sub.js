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
    var interiorSwiper1 = new Swiper('.interiorView1', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                // return '<span class="' + className + '">' + (index + 1) + '</span>';
                return '<span class="' + className + '"><img src="images/place/thumb_hg0' + (index + 1) + '.jpg" alt=""></span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 800,
        autoplay: {
            delay: 2000,
          },
        loop: true,
        effect: 'fade',

        observer: true,
        observeParents: true,
        
    });

    var interiorSwiper2 = new Swiper('.interiorView2', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                // return '<span class="' + className + '">' + (index + 1) + '</span>';
                return '<span class="' + className + '"><img src="images/place/thumb_mg0' + (index + 1) + '.jpg" alt=""></span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 800,
        autoplay: {
            delay: 2000,
          },
        loop: true,
        effect: 'fade',
        
        observer: true,
        observeParents: true,
    });




    /* lnb_list */
    var $lnbList = $('#topLnb .lnb_list li');
    var $lnbCnt = $('.lnb_cnt article');

    $lnbList.eq(0).addClass('on');
    $lnbCnt.eq(0).show().siblings().hide();

    $lnbList.on('click', function(){
        var lnbidx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        $lnbCnt.eq(lnbidx).show().siblings().hide();
        
    });





});