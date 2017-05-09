$(document).ready(function() {

	var scrollTime = 1500;
	var timeInterval = 2500;
	var pauseSetTimeOutID;

// Call the rotation L to R if the 'right' button is clicked.

	$("#r-arrow").click(function() {
		clearTimeout(pauseSetTimeOutID);
		rotateImagesLtoR();
		pauseSetTimeOutID = window.setTimeout(rotateImagesRtoL, timeInterval);
	});

// Call the rotation R to L if the 'left' button is clicked.

	$("#l-arrow").click(function() {
		clearTimeout(pauseSetTimeOutID);
		pauseSetTimeOutID = window.setTimeout(rotateImagesRtoL, timeInterval);
	});

// Define the self-repeating function which rotate the images from right (R) to left (L)

	function rotateImagesRtoL() {

// Displace the IMAGE 4 by changing its CSS properties (specifically "left").
		$("#image4").css({
		
			left: '900px',
		
		});
// Set the value (in this case 'temporary') of an attribute (in this case 'id')
// of the HTML element(s) that matches(match) the selector (in this case "#image4").
// Since we are going to act on the value of the 'id' of the image preceding
// image4 (that is image3), we need to prevent this change to happen to figure4 too,
// that is why we change (set) its 'id' value to the value 'temporary' (ehm... was this clear?)
		$("#image4").attr('id', 'temporary');


// Displace the IMAGE 1 by changing its CSS properties (specifically "left").
		$("#image1").animate({
		
			left: '-=300'
		
		}, scrollTime, function() {
			// Animation complete.
		});

		$("#image1").attr('id', 'image4');


// Displace the IMAGE 2 by changing its CSS properties (specifically "left").
		$("#image2").animate({
		
			left: '-=300'
		
		}, scrollTime);

		$("#image2").attr('id', 'image1');


// Displace the IMAGE 3 by changing its CSS properties (specifically "left").
		$("#image3").css({
		
			left: '600px'
		
		});

		$("#image3").attr('id', 'image2');

// And finally we can give the id value 'image3' to the image n.4 (whose id value
// was set to 'temporary').

		$("#temporary").attr('id', 'image3');

// The function rotateImagesRtoL calls itself as a *callback* of the window method setTimeout().
// Here we exploit the recursivity: the call will be repeated an infinite number of times.
// Moreover, making use setTimeout(), we are sure that each call to the callback function
// (i.e. rotateImagesRtoL()) will be executed only when the previous call has terminated.

		pauseSetTimeOutID = window.setTimeout(rotateImagesRtoL, timeInterval);

	}

	rotateImagesRtoL();


// Define the function which rotate the images from left (L) to right (R)

	function rotateImagesLtoR() {

		clearTimeout(pauseSetTimeOutID);

// Displace the IMAGE 4
		$("#image4").animate({
		
			left: '+=300',
		
		}, scrollTime, function() {
			// Animation complete.
		});

		$("#image4").attr('id', 'temporary');

// Displace the IMAGE 3
		$("#image3").css({
		
			left: '0px'
		
		});

		$("#image3").attr('id', 'image4');

// Displace the IMAGE 2
		$("#image2").css({
		
			left: '+=300'
		
		});

		$("#image2").attr('id', 'image3');

// Displace the IMAGE 1
		$("#image1").animate({
		
			left: '+=300'
		
		}, scrollTime, function() {
			// Animation complete.
		});

		$("#image1").attr('id', 'image2');

// And finally we change the id of figure4 to image1

		$("#temporary").attr('id', 'image1');

		// window.setTimeout(rotateImagesRtoL, 2000);

	}

});