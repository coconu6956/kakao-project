// JavaScript Document
$("#main_navi").on({
		mouseover:function(){
			"use strict";
			$(this).children(".submenu").stop().slideDown(500);
		},
		mouseleave:function(){
			"use strict";
			$(this).children(".submenu").stop().slideUp(500);
		},
		click:function(){
			"use strict";
			$(".submenu").slideToggle();
		}
	
	});