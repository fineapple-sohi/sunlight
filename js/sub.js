$(document).ready(function(){


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




    /* sub2,3,4,5 lnb tab */
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