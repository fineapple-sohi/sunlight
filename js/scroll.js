$(document).ready(function(){

    /*scroll event */
    var $header = $('#header');
    var lastScrollTop = 0; 
    var delta = 5;
    var didScroll; 

	var sect = $('#main .sect');
	var step;
	var idx = sect.length;
    var sectTop = new Array();

	for (step = 0; step < idx; step++) {
		var ost = sect.eq(step).offset().top;
		sectTop.push(ost);
    }

	
	//스크롤을 할때마다 배열들안의 값들을 체크합니다.
	function chkSct(st){
		for (i = 0; i < idx; i++){
			if(st + 120 > sectTop[i]){
				$('#lnb li').eq(i).addClass('on').siblings().removeClass('on');

			} //조검문 끝
		} // 반복문 끝
	}//chkSct 끝
	

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
        var st = $(this).scrollTop();
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
        if(st > $('#introduce').offset().top && st < $('#special').offset().top) {
            $('#program .movetxt.movetxt1').addClass('on');
        } else {
            $('#program .movetxt.movetxt1').removeClass('on');
        }

        if(st > $('#program').offset().top && st < $('#special').offset().top + 500) {
            $('#program .movetxt.movetxt2').addClass('on');
        } else {
            $('#program .movetxt.movetxt2').removeClass('on');
        }


        chkSct(st);
        
        lastScrollTop = st;

    }
 
    $(window).scroll();
    
});

	

	
