// JavaScript Document
$(function() {
	"use strict";
	var $items = $(".items");
	var $buttons = $("#buttons");
	var tagged = {};
	
	$items.each(function(){
		var items = this;
		var tags = $(this).data("tags");
		if(tags){
			tags.split(',').forEach(function(tagName){
				if(tagged[tagName]==null){
					tagged[tagName]=[];
				}
				tagged[tagName].push(items);
				
			});
		}
	});
	//console.log(tagged);
	
	$('<span/>',{
		text:"모두보기",
		class:"active",
		click:function(){
			$(this).siblings().removeClass();
			$(this).addClass('active');
			$items.show();
		}
	}).appendTo($buttons);
	
	$.each(tagged, function(tagName){
		var tagArray;
		tagArray = tagName.split('/');
		var className = tagArray[1];
		$('<span/>',{
			text:tagArray[0]+' ('+tagged[tagName].length + ')',
			class:"btn",
			click:function(){
				if (tagArray.length>1){
					$(this).siblings().removeClass();
					$(this).addClass(className);					
				}
				else{
					$(this).siblings().removeClass();
					$(this).addClass('active');
				}
				$items.hide().filter(tagged[tagName]).show();
			}
		}).appendTo($buttons);
	});
	
}());