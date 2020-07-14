// JavaScript Document
$(function(){
	"use strict";
		 $(window).scroll(function(){
               if($(this).scrollTop()>300){
                  $(".top").fadeIn("slow");
                  }else{
                    $(".top").fadeOut("slow");
                  }
           });
           
           $(".top").on("click",function(){
               $("html,body").animate({scrollTop:0},400);
               return false;
           });
           
       });   