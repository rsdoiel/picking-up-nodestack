	var express = require("express"),
	        server = express();

	// Now we need to define our routes. 
	// First we define our homepage then everything else.
	server.get("/", function (request, response) {
	        console.log(request.url, 200, "found");
		// Notice we're using .send instead of .end
	        response.status(200).sendfile("index.html");
	});
	
	// Here's a catch all route, in this case treating them as a 404.
	// You could also do other things (e.g. redirect to a CDN)
	server.get("*", function (request, response) {
	        console.error(request.url, "not found");
	        response.status(404).sendfile("404.html");
	});

	console.log("Starting web server on port",3000);
	server.listen(3000);
