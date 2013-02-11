	var fs = require("fs"),
	        // Notice we don't need to include http directly, that is already inside express
	        express = require("express"),
	        // Read in our pages 
	        homepage = fs.readFileSync("index.html").toString(),
		api_mockup = JSON.parse(fs.readFileSync("api-mockup.json").toString(), errorpage = fs.readFileSync("404.html").toString()),
	        // create our web server
	        server = express();

	// Now we need to define our routes, first our homepage then everything else
	server.get("/", function (request, response) {
	        console.log(request.url, 200, "found");
		// Notice we're using .send instead of .end
	        response.send(200, homepage);
	});
	
	// This is a our api mockup route
	server.get("/api/*", function (request, response) {
		console.log(request.url, 200, "found");
		// Since api_mockup is JavaScript object,
		// the content type will automatically set to application/javascript
		response.send(200, api_mockup);
	});

	// Here's a catch all route, in this case treating them as a 404.
	// You could also do other things (e.g. redirect to a CDN)
	server.get("*", function (request, response) {
	        console.error(request.url, "not found");
	        response.send(404, errorpage);
	});


	console.log("Starting web server on port 3000");
	server.listen(3000);
