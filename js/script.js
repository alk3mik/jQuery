$(document).ready(function() {

	var imgWidth = $("img").attr("width");

	var imgFirst = $("img:first");

	var positionFirst = imgFirst.position();

	var imgLast = $("img:last");

	var positionLast = imgLast.position();

	// var images = $("img");

	// define a self-repeating function...

	function rotateImages() {

		// var test = $("#image4");
		// console.log(test, typeof test);

// Displace the image4 by changing its CSS properties (specifically "top" and "left").
		$("#image4").css({

			top: '0px',
		
			left: '900px'
		
		}, 2000);

// Set the value (in this case 'temporary') of an attribute (in this case 'id')
// of the HTML element(s) that matches(match) the selector (in this case "#image4").
// Since we are going to act on the value of the 'id' of the image preceding
// image4 (that is image3), we need to prevent this change to happen to figure4 too,
// that is why we change (set) its 'id' value to the value 'temporary' (ehm... was this clear?)
		$("#image4").attr('id', 'temporary');

		$("#image1").css({

			top: '0px',
		
			left: '0px'
		
		}, 2000);

		$("#image1").attr('id', 'image4');

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

		$("#temporary").attr('id', 'image3');

// The function rotateImages calls itself as a *callback* of the window method setTimeout().
// Here we exploit the recursivity: the call will be repeated an infinite number of times.
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