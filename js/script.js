$(document).ready(function() {

	var imgWidth = $("img").attr("width");

	var imgFirst = $("img:first");

	var positionFirst = imgFirst.position();

	var imgLast = $("img:last");

	var positionLast = imgLast.position();

	// console.log(position);

	$("img:first").css({

		top: '0px',
	
		left: '900px'
	
	}, 5000);

	// $("#image1").css({

	// 	'transform': 'translate(100%, 0%)'

	// }, 5000);

	// $('.img#image3').toggle(500, "swing");

	// $('img:first').toggle(500, "swing");

	// $("#").animate({width:'toggle'},350);
	// $("#l-arrow").click(function() {

	// 	$('#image1').animate({width:'toggle'}, 500)});


});