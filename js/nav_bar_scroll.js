// JavaScript Document
var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
		"use strict";
		var currentScrollPos = window.pageYOffset;
  		if (prevScrollpos > currentScrollPos) {
			document.getElementById("navbar").style.top = "0";
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
