
### Mockup a API

Let's add a route to mockup a simple JSON API.  We can add one more route and 
mockup a JSON in the process. You need to add our JSON object and parse it
as well as one more route *before* the default route that handles our 404.

Your updated server.js file should look like this-

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
	
	// Here's a catch all route, in this case treating them as a 404.
	// You could also do other things (e.g. redirect to a CDN)
	server.get("*", function (request, response) {
	        console.error(request.url, "not found");
	        response.status(404).sendfile("404.html");
	});

	console.log("Starting web server on port",3000);
	server.listen(3000);
```

Restart your web server and check if the path to the API is supported. 

Note: In express the order you define your routes matters. Those defined
towards the top of the file with be matched before this towards the end. That is why
I've included the "*" route as the last route defined.

Here's an example JSON file:

```JavaScript
	{
		"friends": ["John", "Paulina", "Georgia", "Ringo"],
		"favorites": {
			"colors": {
				"cardinal": ["John", "Ringo"],
				"gold": ["Paulina", "Georgia"],
			}
		}
	}
```

You can set a specific mime type in Express using the *set* method on the response-

```JavaScript
	// Set a route to server your CSS content.
	server.get("/style.css", function (request, response) {
		// Set the mime-type with response.set()
		response.set("Content-Type", "text/css");
		// Now send out the css as usual
		response.status(200).sendfile("style.css");
	});
```

