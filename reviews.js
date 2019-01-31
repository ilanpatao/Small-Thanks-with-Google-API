// Add the click function for the go button
$('.go').click(function(){
	alert('API Execution time is about 15 seconds, please wait and your results will appear in a moment!');
	// Get the place ID value
	var placeid = $('#placeid').val();
	if (placeid == ''){
		// Alert if field is blank, else continue
		alert('You didn\'t enter a place ID!');
	} else {
		// Call my API
		$.getJSON("https://www.reviewsmaker.com/api/public/thanksgoogle?placeid=" + placeid, function (data){
			// Iterate through the results for this demo and display them on the page
			$.each( data.data.artwork, function( key, value ) {
			  $('.results').append('<b>Artwork: </b>' + value + "<br>");
			});
			$('.results').append('<hr>');
			$('.results').append('<b>Zipped Artwork: </b>' + data.data.artwork["zipped_file"] + "<br>");
			$('.results').append('<hr>');
			$.each( data.data.social_media, function( key, value ) {
			  $('.results').append('<b>Social Media: </b>' + value + "<br>");
			});
			$('.results').append('<hr>');

			  $('.results').append('<b>Social Media: </b>' + data.data.share_urls["fb"] + "<br>");
			  $('.results').append('<b>Social Media: </b>' + data.data.share_urls["twitter"] + "<br>");
			  $('.results').append('<b>Social Media: </b>' + data.data.share_urls["gplus"] + "<br>");
			  $('.results').append('<b>Social Media: </b>' + data.data.share_urls["fife"] + "<br>");

			// Display JSON feed in our input for the demo
			var json = JSON.stringify(data);
			$("#jsonresults").val(json);
		});
	}
});