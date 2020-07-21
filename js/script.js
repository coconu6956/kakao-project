// JavaScript Document

$(function(){
	"use strict";
	
		/*인기친구들*/
			$("#lista1").als({
			visible_items: 4,
			scrolling_items: 1,
			orientation: "horizontal",
			circular: "yes",
			autoscroll: "yes",
			interval: 4000,
			speed: 200,
			easing: "linear",
			direction: "left",
			start_from: 0
		});
	
		$('#popular').owlCarousel({
			   center: true,
			   items:2,
			   loop:true,
			   margin:20,
    			responsive:{
					600:{
						items:4
        			}
    			}
		   });
	
		$('#mob_calender_items').owlCarousel({
			   center: true,
			   items:2,
			   loop:true,
			   margin:20,
    			responsive:{
					600:{
						items:4
        			}
    			}
		   });
	
		var width = window.outerWidth;
		var el_text = $('.content_container_list');
		var contnetTop; // returns number
		var contentHeight = $('#bg_banner').height();
		var limit;
	
		if(width>768){
			

		
			
			/*메인배너*/
			 	
			    var swiper = new Swiper('.swiper-container', {
				spaceBetween: 50,
				centeredSlides: true,
				autoplay:true,
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
      			},
      			navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
 	 		});
			
			
			
			/*hover 시 이미지 변경*/
			$("#calender_items .items_img>img").hover(function() { 
        var url = $(this).attr("src").match(/[^\.]+/) + "_over.jpg";
        $(this).attr("src", url);
    },function(){ var url = $(this).attr("src").replace("_over", "");
        $(this).attr("src", url);}
												 );
			
			
		$(".al_item img").hover(function() { 
        var url = $(this).attr("src").match(/[^\.]+/) + "_over.jpg";
        $(this).attr("src", url);
    },function(){ var url = $(this).attr("src").replace("_over", "");
        $(this).attr("src", url);}
												 );
			
		/* 헤이카카오 텍스트 효과 */
		contnetTop = $('#bg_banner').offset().top-300;
		limit = $('#footer').offset().top - contentHeight -200 ;	
	   
	   }else {
		   /*메인배너*/
		   var swiper = new Swiper('.swiper-container', {
			   	spaceBetween: 0,
			    loop:true,
				autoplay:true,
				scrollbar: {
					el: '.swiper-scrollbar',
        			hide: true,
      			},
		
    		});
		   
		    
		   
		   


		   
	
		   
		   /*$(".calender_items>.items").addClass(".swiper-slide2");
		   
		   var swiper2 = new Swiper('.swiper-container2', {
      		slidesPerView: 'auto',
      		centeredSlides: true,
      		spaceBetween: 30,
      		pagination: {
				el: '.swiper-pagination',
        		clickable: true,
			},
		   }); */
		   
		   /* 헤이카카오 텍스트 효과 */
		contnetTop = $('#bg_banner').offset().top-500;
		limit = $('#footer').offset().top - contentHeight-20 ;	
	   	}
	
		/*모달창*/
		$(".bg_img").on("click", function () { //클릭 이벤트
			
			$(".modal").fadeIn(); //팝업 열기
			var url = $(".modal iframe").attr("src").replace("autoplay=0", "autoplay=1");
			$(".modal iframe").attr("src", url);
		});
		$(".close").on("click", function () {
			$(".modal").fadeOut(); //팝업 닫기
			
			var url = $(".modal iframe").attr("src").replace("autoplay=1", "autoplay=0");
			$(".modal iframe").attr("src", url);
		});
		
		/* 헤이카카오 텍스트 효과 */
			if ($('#bg_banner').length) { // make sure "#sticky" element exists
				
			$(window).scroll(function() { // scroll event

				var windowTop = $(window).scrollTop(); // returns number

				if (contnetTop < windowTop) {
						//el.addClass("content_blink");
						el_text.addClass("text_slide");
					}
				else {
					    //el.removeClass("content_blink");
						el_text.removeClass("text_slide");
				}
				if (limit < windowTop) {
					//el.removeClass("content_blink");
					el_text.removeClass("text_slide");
				}
							

				});
			}
			
		

	});