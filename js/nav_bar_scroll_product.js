// JavaScript Document

var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
		"use strict";
		var currentScrollPos = window.pageYOffset;
		var naviTopPos = document.getElementById("navi").offsetTop;
		//var naviBottomPos = document.getElementById("navi").offsetHeight;
  		if (prevScrollpos > currentScrollPos) {
			if (currentScrollPos>naviTopPos){
				document.getElementById("navbar").style.top = "-120px";
			}
			else {
				document.getElementById("navbar").style.top = "0px";
			}
			//prevScrollpos = currentScrollPos;
			
  		} else {
    	document.getElementById("navbar").style.top = "-120px";
  		}
		prevScrollpos = currentScrollPos;
	};

$(function(){
	"use strict";
	$("#main_ul li").hover(function(){
		$(this).children('.submenu').stop().slideDown();
		
		
	},function(){
		$(this).children('.submenu').stop().slideUp();
		
	});
});