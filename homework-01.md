
# On your own

The following homework explores adding more routes to your previous web server.

* How would you support to serve CSS files? (hint: add some more routes)
* How do you make sure that the files you're send to the browser are sent with the correct mime-type?
* How would you adjust the http status code returned along with your new content?


To start our server.js file should look like this-

```JavaScript
	var express = require("express"),
	        server = express();

	// Now we need to define our routes. 
	// First we define our homepage then everything else.
	server.get("/", function (request, response) {
	        console.log(request.url, 200, "found");
		// Notice we're using .send instead of .end
	        response.status(200).sendfile("index.html");
	});

	// YOUR CODE HERE
	
	// Here's a catch all route, in this case treating them as a 404.
	// You could also do other things (e.g. redirect to a CDN)
	server.get("*", function (request, response) {
	        console.error(request.url, "not found");
	        response.status(404).sendfile("404.html");
	});

	console.log("Starting web server on port",3000);
	server.listen(3000);
```

## Adding support for a CSS file

You can set a specific mime type in Express using the *set* method on the response
object.  This is done inside the route definition-

```JavaScript
	// Set a route to server your CSS content.
	server.get("/style.css", function (request, response) {
		// Set the mime-type with response.set()
		response.set("Content-Type", "text/css");
		// Now send out the css as usual
		response.status(200).sendfile("style.css");
	});
```

If we want to add support for "/style.css" we need to add this code to our
server.js. See the comment **// YOUR CODE HERE**? Just below that add
your route to support your CSS file. Remember to create your CSS file
before you restart your web server. If you don't you'll get an error
in your program. Here's a simple CSS block setting a default color
and background. You should save it as **style.css*.

```CSS
	body {
		color: #990000;
		background-color: #ffffff;
	}
```


Restart your web server and check if the path to the API is supported. 

IMPORTANT: In express the order you define your routes matters. Those defined
towards the top of the file will be matched before this towards the end. That is why
I've included the "*" route as the last route defined. Eventually we'll use
express' own handlers to response with appropraite http errors.

Your final **server.js** should look something like-

```JavaScript
	var express = require("express"),
	        server = express();

	// Now we need to define our routes. 
	// First we define our homepage then everything else.
	server.get("/", function (request, response) {
	        console.log(request.url, 200, "found");
		// Notice we're using .send instead of .end
	        response.status(200).sendfile("index.html");
	});

	// YOUR CODE HERE
	// Set a route to server your CSS content.
	server.get("/style.css", function (request, response) {
		// Set the mime-type with response.set()
		response.set("Content-Type", "text/css");
		// Now send out the css as usual
		response.status(200).sendfile("style.css");
	});

	// Here's a catch all route, in this case treating them as a 404.
	// You could also do other things (e.g. redirect to a CDN)
	server.get("*", function (request, response) {
	        console.error(request.url, "not found");
	        response.status(404).sendfile("404.html");
	});

	console.log("Starting web server on port",3000);
	server.listen(3000);
```


