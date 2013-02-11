
# Starting with NodeStack

## Goals

1. Simplicity
	a. HTML, CSS, JavaScript, JSON is the whole stack
2. Faster/easier development cycle
	a. Simple development environment
		1. Texteditor
		2. NodeJS
		3. npm (Node's module manager)
		4. MongoDB (optional) 
	b. A rapid development cycle
		1. Code a front end with HTML, CSS and JavaScript
		2. Use JSON blobs to mockup API requests (replace alter with API/DB calls as later)
		3. Map/Wrap the URLs you need to service your pages (i.e. a NodeJS script)
		4. Fire up the http server object, test, then iterate to evolve
	c. A growing ecosystem of modules and tools
		1. jslint, jscheckstyle, YUI's tools, eventually Mojito
		2. A huge developer community to plugin to
3. Performance and scalability
	a. More control with less complexity
		1. NodeJS
		2. A datastore/database (e.g. MongoDB)
		3. A scaling environment (e.g. Heroku)
	b. Levage frontend experience through the whole stack
		1. The NodeJS uses the same process model as the Browser
		2. You already are experienced with JavaScript
		3. You already use/understand an HTTP transaction (e.g. GET, POST, PUT, DELETE)
		4. Add an basic understanding of NodeJS' module system and you're ready to go


## Hands on

### Getting setup

	1. Startup your Macbook
	2. Download NodeJS package from http://nodejs.org
	3. Double click on Downloads/node-*.pkg and run the installer
	4. Fire up your favorite editor
	5. Open a the Mac "Terminal" (Applications -> Utilities -> Terminal)
	6. type "cd Desktop" and press enter (We'll use your desktop to keep things simple for now)
	7. type "node"
	8. type "console.log('Hello World!');"
	9. type ".exit" and you're done with getting setup
	10. Congratulations you're up and running with NodeJS.

### Moving forward

	1. Open a new file in your text editor
	2. Type the following line without the double quotes
		a. "console.log('Hello again.');"
		b. Save it to your desktop as hello.js
	3. Switch the Terminal
	4. Type "node hello.js"
	5. Congratulations you've written your first Node program

## Now for a web server

We're going to use two NodeJS modules. Both come built in with NodeJS so we don't need to
install anything extra.  One module is called "fs" and the other is called "http".  "fs" is used to
access the file system (e.g. you can read/write to files using it).  "http" module lets us create
web servers easily.


We're going to create three files in this example-

	+ index.html
	+ 404.html
	+ server.js

The first is some HTML we'll send to the browser, the second replaces Apache by reading an
index.html, keeping it in memory and anytime a browser requests it sends it out. Finally 404.html
is what we'll send back if someone requests anything besides the index.html file.


Here's the content you can put in index.html:

```html
	<!DOCTYPE html>
	<html lang="en">
	        <head>
	                <title>Hi there</title>
	        </head>
	        <body>
	                <h1>Hi there</title>
	        </body>
	</html>
```

Here is what I want you to type in 404.html.

```html
	<!DOCTYPE html>
	<html lang="en">
	        <head>
	                <title>Not found.</title>
	        </head>
	        <body>
	                Not found.
	        </body>
	</html>
```

Now here's the interested part. This is what you put in server.js (you don't have to
type the JavaScript comments)

```JavaScript
	// Load the NodeJS modules we need, this is like require() or require_once() in PHP
	var fs = require("fs"),
	        http = require("http"),
	// Get the contents of index.html and save them in homepage
	homepage = fs.readFileSync("index.html").toString(),
	// Get the contents of errorpage
	errorpage = fs.readFileSync("404.html").toString();


	// Let's create our web server
	http.createServer(function (request, response) {
	        // Handle our web requests, build a response
	        if (request.url === "/" || request.url = "/index.html") {
	                response.writeHead(200, {
	"Content-Type": "text/html",
	"Content-Size": homepage.length
	});
	response.end(homepage);
	        } else {
	                response.writeHead(404, {
	                        "Content-Type": "text/html",
	                        "Content-Size": errorpage.length
	                });
	                response.end(errorpage);
	        }
	}).listen(3000);
```

Now let's try this out.

	1. node server.js
	2. Point your browser at http://localhost:3000
	3. You should see your "Hi There" page
	4. Try http://localhost:3000/something-else
	5. You should see the 404 page now

That's it.  You've just written your first high performance web service.


#### Perspective

What you just wrote can about 600-800 concurrent requests (at least on my
Macbook Pro). That is comparable with what www.usc.edu. Our campus web server
is bad up of two large Solaris boxes run behind a high performance hardware based
load balancer. So why is that? We're using a different module to serve http requests.


	1. We're only doing what is needed and nothing more (Apache, etc. are doing much, much more)
	2. We're only running on process not one process per browser request
	3. We're reading the content from memory (fast) versus disc (slow) for each request


In the lines between "http.createServer" and "listen" you've implementing what Apache
does internally. In practice we don't have to do all this heavy lifting (e.g. set headers, etc).
We'll use a Node Module where we can setup some routes (partial URLs) that will call
functions that will send out an appropriate response. 


### Routes

Web browser interaction is centered around events and callback. I've seen this pattern
in the jQuery scripts-

```JavaScript
	$('#my-thing').blur(function () {
	         alert("Hi There");
	});
```

What this is doing behinds the scenes is listening for a "blur" event on the tag with the
id of "my-thing". When that event happens then a function (i.e. the callback) is called to
do some work. We can think of the function inside of "http.createServer(...);" is a callback.
When an http request is received, http calls a function to process the request and complete
the response.  In the next example we'll take it a step further by associating a specifically
requested path with a specific response. The approach has popularly been called routing
where a route is a specific relationship between a specific path and its callback.


In our "Hi There" example our routes are "/", and everything else (i.e. "*"). To explore this
route idea we're going to use a NodeJS module called express.


#### Prerequisites

We need to install express before we can build our next version of server.js. From the Mac
Terminal program run the following command-

```shell
	npm install express
```

This will install the express module and make it available to NodeJS.  


#### Exploring routes

Now let's make a simpler version of server.js-

```JavaScript
	var fs = require("fs"),
	        // Notice we don't need to include http directly, that is already inside express
	        express = require("express"),
	        // Read in our pages 
	        homepage = fs.readFileSync("index.html").toString(),
	        errorpage = fs.readFileSync("404.html").toString(),
	        // create our web server
	        server = express();


	console.log("Setting up routes");
	// Now we need to define our routes, first our homepage then everything else
	server.get("/", function (request, response) {
	        console.log(request.url, "received");
	        response.writeHead(200, {
	                'Content-Type': 'text/html',
	                'Content-Length': homepage.length
	        });
	        response.end(homepage);
	});


	// Here's a catch all route, in this case treating them as a 404.
	// You could also do other things (e.g. redirect to a CDN)
	server.get("*", function (request, response) {
	        console.error(request.url, "not found");
	        response.writeHead(404, {
	                'Content-Type': 'text/html',
	                'Content-Length': errorpage.length
	        });
	        response.end(errorpage);
	});


	console.log("Starting web server on port 3000");
	server.listen(3000);
```

The important part isn't the specifics of express versus the origin http module.
The important part is the idea of associating a path with an action to form a route. 


What can a route do? Anything you program it to.  A route can send back whatever
you want -  HTML, CSS, JavaScript, JSON, images or movies. It can talk to a database
and return results. It can run a calculation and return a result. It could also take a
template and combine it with data before sending it back to the browser via the response
object.


What we learned so far

	1. How to install NodeJS for development
	2. How to use the NodeJS as a shell
	3. How to write simple NodeJS programs
	4. How to use NodeJS modules
	5. How to install additional modules
	6. How to create a basic web server with either http module or the express framework


What would you like to see for a future topic?


