$(document).ready(function() {
	$('#myCarousel').carousel({
	interval: 5000
	})
    
    $('#myCarousel').on('slid.bs.carousel', function() {
    	//alert("slid");
	});
    
    
});

