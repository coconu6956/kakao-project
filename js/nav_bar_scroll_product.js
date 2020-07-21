// JavaScript Document


$(function(){
	"use strict";
	
	$("#main_ul>li").hover(function(){
		$(this).children('.submenu').stop().slideDown();
		
		
	},function(){
		$(this).children('.submenu').stop().slideUp();
		
	});
	
	/*모바일 서브메뉴*/
	 $("#mob_main_ul>li>a").each(function(){
    			var $this = $(this); 
				$this.on('click', function(e){
        		e.preventDefault();
					$(this).children(".arrow").toggleClass('active');
    			});
			});
	
	$("#mob_main_ul>li>a").click(function(e){
		e.preventDefault();
		$(this).next(".mob_submenu").slideToggle(500);
		
	});  
	
	$(".menu-trigger").click(function(){
		$("#mob_menu").stop().css("left","0");
	});
	$("#mob_close").click(function(){
		$("#mob_menu").stop().css("left","-110%");
	});
	
	
	
	function myscroll()  {
		if ($('#navi').length){
		var $window = window.outerWidth;
		var el2 = $('#navi');
		var naviTop = $('#item_detail_form').offset().top; // returns number
		var naviHeight = $('#navi').height();
		var topNum = $("#navbar").height();
		$(window).scroll(function() {
			var limit2 = $('#sub_content').offset().top - naviHeight -500 ;
			var windowTop = $(window).scrollTop();			 
			var diff2;	
			if($window > 768){
					if (naviTop < windowTop) {
					el2.css({
						position: 'fixed',
						top: 0,
						width:756,
						marginLeft:0
					});
					
					} else {
					el2.css('position', 'static');
					}

					if (limit2 < windowTop) {
						diff2 = limit2 - windowTop;
						el2.css({
							top: diff2
						});
					}
				} else {
					if (naviTop < windowTop) {
					el2.css({
						position: 'fixed',
						top:topNum ,
						width:"100%",
						marginLeft:-20
					});
					
					} else {
						el2.css({
							position: 'static',
							marginLeft:0
						});
					}

					if (limit2 < windowTop) {
						diff2 = limit2 - windowTop + 100 ;
						el2.css({
							top: diff2
						});
				} 
			}
			/*if (naviTop < windowTop) {
				if ($window>683){
					el2.css({
						position: 'fixed',
						top: 0,
						width:"756px",
						marginLeft:0
					});
					
				} else {
					el2.css({
						position: 'fixed',
						top: 45,
						width:"100%",
						marginLeft:-20
					});
				}
					
			} else {
					el2.css({
						position: 'static',
						marginLeft:0
					});
				}*/

			/*if (limit2 < windowTop) {
				diff2 = limit2 - windowTop;
				el2.css({
						top: diff2
						});
				}*/
					
		});
			
			if ($('#shipping').length) { // make sure "#sticky" element exists
			    $window = window.outerWidth;
				var el = $('#shipping');
				var shippingTop = $('#shipping').offset().top; // returns number
				var shippingHeight = $('#shipping').height();


			$(window).scroll(function() { // scroll event
				var limit = $('#sub_content').offset().top - shippingHeight -370.4 ;
				var windowTop = $(window).scrollTop(); // returns number
				
				if($window>683){
					if (shippingTop < windowTop) {
					el.css({
						position: 'fixed',
						width:756
					});
					
					} else {
					el.css('position', 'static');
					}

					if (limit < windowTop) {
						var diff = limit - windowTop;
						el.css({
							top: diff
						});
					}
				} else {
					el.css({
						position:'none'
					});
				}	
					
				
				

				});
			}		
		
		}
	}
		
	myscroll();	
	
	$(window).resize(function() { 
		myscroll();
	});
	
	
	
	/*섬네일이미지*/
		$("#item_thumb_bottom img").hover(function(){
						var productNum=$(this).index();
						
						$("#item_thumb_top img").hide();
						$("#item_thumb_top img").eq(productNum).fadeIn("fast");
						
						$(this).siblings().removeClass("activeImg");
						$(this).addClass("activeImg");
					},function(){
						return false;
					});
					
					$("#item_thumb_bottom img").click(function(){
						var productNum=$(this).index();
						
						$("#item_thumb_top img").hide();
						$("#item_thumb_top img").eq(productNum).fadeIn("fast");
						
						$(this).siblings().removeClass("activeImg");
						$(this).addClass("activeImg");
					});
	
	
	
	
	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') 
			&& 
			location.hostname === this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 800, function() {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":visible")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					}
				});
			}
		}
	});
	/*수량, 가격 계산*/
	function totalNum(){
					var order = $(".order_numder").val();
					var price = $("#item_price").text();
					var num_price = parseInt(price,10);
					var num_order = parseInt(order,10);
					var total= num_order*num_price;
					var showTotal = total.toLocaleString();//숫자 세자리단위 	
					$(".total_price").text(showTotal);
					
					}
			
			var min = 0;
			var max = 100;
			
			$('.btn_minus').click(function(e){
				e.preventDefault();
				var stat = $('.order_numder').val();
				var num = parseInt(stat,10);
				num--;
				if(num<=min){
					alert('1개는 최소 수량입니다.');
					num =1;
				}
				$('.order_numder').val(num);
				totalNum();
				
			});
			$('.btn_plus').click(function(e){
				e.preventDefault();
				var stat = $('.order_numder').val();
				var num = parseInt(stat,10);
				num++;

				if(num>max){
					alert('아이디당 '+max+'개로 주문 제한되어 있습니다.');
					num = max;
				}
				$('.order_numder').val(num);
				totalNum();
			});
});