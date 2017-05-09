$(document).ready(function() {

	var imgWidth = $("img").attr("width");

	var imgFirst = $("img:first");

	var positionFirst = imgFirst.position();

	var imgLast = $("img:last");

	var positionLast = imgLast.position();

// Define a self-repeating function...

	function rotateImagesRtoL() {

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

// And finally we can give the id value 'image3' to the image n.4 (whose id value
// was set to temporary).

		$("#temporary").attr('id', 'image3');

// The function rotateImagesRtoL calls itself as a *callback* of the window method setTimeout().
// Here we exploit the recursivity: the call will be repeated an infinite number of times.
// Moreover, making use setTimeout(), we are sure that each call to the callback function
// (i.e. rotateImagesRtoL()) will be executed only when the previous call has terminated.

		window.setTimeout(rotateImagesRtoL, 2000);

	}

	rotateImagesRtoL();

});