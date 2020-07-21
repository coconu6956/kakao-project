// JavaScript Document
$(function(){ //즉시 실행되는 함
	"use strict";
	var $items = $("div.items");
	var $search = $("#filter-search");
	var cache = [];
	
	$items.each(function(){
		cache.push({
			element:this,
			title:$(this).find('.itemTitle').text(),
			//제목을 저장
			text:$(this).find('img').attr('alt').trim().toLocaleLowerCase()
			//이미지의 텍스트를저장
			
		});
	});
	//console.log(cache);
	function imgFilter(){
		var query = this.value.trim().toLocaleLowerCase();
		cache.forEach(function(item){
			var index = 0;
			if(query){
				index = item.title.indexOf(query);
				//해당 검색어가 존재하는지의 여부
				if(index===-1){
					index = item.text.indexOf(query);
				}
			}
			item.element.style.display = index === -1?"none":"inline-block";
			//보이거나 숨기는 기능
			
			
		});	
	}
	if('oninput'in $search[0]){
		$search.on("input",imgFilter); //인풋박스에 이벤트 발생할때 함수 호출
	}
	else {
		$search.on("keyup",imgFilter); //키보드 자판 이벤트가 발생할 떄 실행
	}
	
	
	
}());