$(document).ready(function() {

	var imgWidth = $("img").attr("width");

	var imgFirst = $("img:first");

	var positionFirst = imgFirst.position();

	var imgLast = $("img:last");

	var positionLast = imgLast.position();

	// var images = $("img");

	// define a self-repeating function...

	function rotateImages() {

		// var placehold = '';

		$("#image4").css({

			top: '0px',
		
			left: '900px'
		
		}, 2000);

		// placehold = $("img").attr("id");

		// console.log(placehold);

		$("#image1").css({

			top: '0px',
		
			left: '0px'
		
		}, 2000);

		$("#image2").css({

			top: '0px',
		
			left: '300px'
		
		}, 2000);

		$("#image2").attr('id', 'image1');

		$("#image3").css({

			top: '0px',
		
			left: '600px'
		
		}, 2000);

		$("#image3").attr('id', 'image2');

		$("#image4").attr('id', 'image3');

		// window.setTimeout(rotateImages, 2000);

	}

	rotateImages();

	// $("#image1").css({

	// 	'transform': 'translate(100%, 0%)'

	// }, 5000);

	// $('.img#image3').toggle(500, "swing");

	// $('img:first').toggle(500, "swing");

	// $("#").animate({width:'toggle'},350);
	// $("#l-arrow").click(function() {

	// 	$('#image1').animate({width:'toggle'}, 500)});


});