$(document).ready(function(){

    /* sub tab */
    var $tabList = $('.sub_tap .tablist .tab');
    var $tabCnt = $('.sub_tap .tabcnt .tabpanel');

    $tabList.eq(0).addClass('on');
    $tabCnt.eq(0).addClass('active').siblings().removeClass('active');

    $tabList.on('click', function(){
        var tabbidx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        $(this).parent('.tablist').next().children().eq(tabbidx).addClass('active').siblings().removeClass('active');

        for (step = 0; step < idx; step++) {
            ost = sect.eq(step).offset().top;
            sectTop[step] = ost;
        }
    });




    /*scroll event */
    var $header = $('#header');
    var lastScrollTop = 0; 
    var delta = 5;
    var didScroll; 

	var sect = $('#main .sect');
    var step;
    var ost;
	var idx = sect.length;
    var sectTop = new Array();

	for (step = 0; step < idx; step++) {
		ost = sect.eq(step).offset().top;
		sectTop.push(ost);
    }

    var $moveTxt = $('.movetxt');
    if($moveTxt.length) {
        var $set1 = $('#introduce').offset().top;
        var $set2 = $('#program').offset().top;
        var $set3 = $('#special').offset().top;
    }



    var st;
    
    $(window).scroll(function(e){ 
        didScroll = true;
    }); 

    // hasScrolled()를 실행하고 didScroll 상태를 재설정 
    setInterval(function() { 
        if (didScroll) { 
            hasScrolled(); 
            didScroll = false; 
        } 
    }, 250);

    function hasScrolled() {
        st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta) 
            return;
        
        /* header */
        if(st > $('#mainTit').height() - $header.height()){
            $header.addClass('active');
        } else {
            $header.removeClass('active');
        }

        /* lnb */
        if(st > $('#subTit').height()/2) $('#lnb').addClass('active');
        else $('#lnb').removeClass('active');


        /* moving txt */
        if(st > $set1 && st < $set3) {
            $('#program .movetxt.movetxt1').addClass('on');
        } else {
            $('#program .movetxt.movetxt1').removeClass('on');
        }

        if(st > $set2 && st < $set3 + 500) {
            $('#program .movetxt.movetxt2').addClass('on');
        } else {
            $('#program .movetxt.movetxt2').removeClass('on');
        }


        chkSct(st);

        lastScrollTop = st;

    }
 
    $(window).scroll();



	
	//스크롤을 할때마다 배열들안의 값들을 체크합니다.
	function chkSct(st){
		for (i = 0; i < idx; i++){
			if(st + 400 > sectTop[i]){
				$('#lnb li').eq(i).addClass('on').siblings().removeClass('on');
				// $('#main .sect').eq(i).children('.ani-on').addClass('on').siblings().removeClass('on');
			} //조검문 끝
        } // 반복문 끝
        console.log(sectTop);
    }//chkSct 끝
    


    
    var controller = new ScrollMagic.Controller();
    var txtline = document.querySelectorAll(".ani-on");

    // create scene for every title
    for (var i = 0; i < txtline.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: txtline[i],
            triggerHook: "onStart",
            offset:-300
        })
        .setClassToggle(txtline[i], "on")
        .addTo(controller);
    }






    
});

	

	
