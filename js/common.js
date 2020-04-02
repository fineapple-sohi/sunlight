$(document).ready(function(){

    var $branch = $('#header .branch');
    var $bname;

    $branch.children('a').on({
        'mouseenter focus': function(){
            $bname = $(this).text();
            $(this).text('GO!').addClass('over');
        },
        'mouseleave blur': function(){
            $(this).text($bname).removeClass('over');
        }
    });


    var $lnb = $('#lnb');
    var secTop;
    var secHref;

    $lnb.find('a').on('click', function(e){
        e.preventDefault();
        if ($('html, body').is(':animated')) return false;

        secHref = $(this).attr('href');
        secTop =  $(secHref).offset().top;

        $('html, body').stop().animate({scrollTop: secTop}, 600);
        
    });


    $('.waypoint').each(function (index, item) {
        $(item).waypoint(function (direction) {
            if (direction === 'down') {
                  $(this[0,'element']).addClass('on');
            }
            else if (direction === 'up') {
                $(this[0,'element']).removeClass('on');
            }
        }, {
            offset: '70%'
        });
    });



    // var btnVal = location.hash;

    // if($('#facility').length) var facilHei = $('#facility').offset().top;
    // console.log(facilHei);

    // if(btnVal == '#facility1' || '#facility2') {
    //     $('html, body').animate({scrollTop: facilHei}, 200);
    // }


});