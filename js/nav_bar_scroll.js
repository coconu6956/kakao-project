// JavaScript Document
var prevScrollpos = window.pageYOffset;

	window.onscroll = function(e) {
		"use strict";
		e.preventDefault();
		var currentScrollPos = window.pageYOffset; //현재 스크롤 y축 좌표
		var width = window.outerWidth;
		if ( width > 683 ){ 
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("navbar").style.top = "0px";
  			} else {
    			document.getElementById("navbar").style.top = "-135px";
  			}
			prevScrollpos = currentScrollPos;
		} else {
			document.getElementById("navbar").style.top = "0px";
		}
		
	};


$(function(){
	"use strict";
	$("#main_ul>li").hover(function(){
		$(this).children('.submenu').stop().slideDown();
		
		
	},function(){
		$(this).children('.submenu').stop().slideUp();
		
	});
	
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
});
