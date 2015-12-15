var index = 0;
var array = ["Amber Joy", "Christopher Graff", "Brooks Nagel", "Altamir Coelho", "Eric Anderson", "Elizabeth Westberg", "Jeremy Cloutier", "Joe Anderson", "Kenzie Bultema", "Matthew Reinders", "Nathan Briscoe", "Natalie Koch", "Charlie Angus", "Paul Sotherland", "Robby Newman", "Anthony Rohr", "Sam Musselman", "Scott Jorgenson", "Zach Hintgen"];

$(document).ready(function(){
	$(document).on('click', '.create', appendDOM);
	$("body").on('click', '.remove', function(){
	// var $el = $(this).parent().attr("class");
		$(this).parent().toggleClass("dormant");
		console.log($(this).parent().attr("class"));
		if($(this).parent().hasClass("dormant")){
			$(this).parent().animate({opacity: 0.05});
		}
		else{
			$(this).parent().animate({opacity: 1});
		}
	// $(this).parent().animate({opacity: 0.05});
	
	});

});

function appendDOM(){
	if(index >= array.length-1) {
		clearAll();
	}
	var person = array[index];
		
	$("#container").append("<div class='person active " + index + "'></div>");
	var $el = $("#container").children().last();

	$el.append("<p>" + person + "</p> <button class='remove'>Remove</button>");
	$el.hide().slideDown();

	index++; 
}

function clearAll(){
	index = 0;
	$("#container").children().remove();
	alert("You are restarting the roster");
}








	// $("body").on('click', '.remove', removeName($(this).parent().attr("class")));
// 