// Zepto/jQuery fadeLoop plugin for fade slide show effects
(function($){
	$.extend($.fn,{
		fadeLoop :function(options){

			options=$.extend({
				duration : 2500,
				delay : 2000,
				startIndex : -1,
				fadeFirstImage : true
			},options);

			var nextPic,
				pics    =this,
				indx    =options.startIndex,
				plen    =this.length,
				fadeIn  ={opacity:1},
				fadeOut ={opacity:0},
				ease = !!window.Zepto ? 'ease-in-out' : 'swing';

			pics.css(fadeOut);
			options.fadeFirstImage || pics.eq(0).css(fadeIn);

			(nextPic=function(){
				pics.eq(indx).animate(fadeOut,options.duration,ease);
				indx=indx<plen-1?indx+1:0;
				pics.eq(indx).animate(fadeIn,options.duration,ease,function(){
					setTimeout(nextPic,options.delay);
				});
			})();
		}
	});
})($)

$(function(){
	var BgImg1 = $('.backimg  #img1'),
		BgImg2 = $('.backimg  #img2'),
		BgImg3 = $('.backimg  #img3');

	BgImg1.click(function(){
		window.open("./test3.php","_self");
	});
		
	BgImg2.click(function(){
		window.open("./demo2.php","_self");
	});
	
	BgImg3.click(function(){
		window.open("./404.php","_self");
	});

});