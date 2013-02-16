# Getting Node up and running

## Goals of this lesson

* Install NodeJS
* Install a NodeJS module
* Build a minimal, safe, web server


## Hands on

### Getting setup

1. Startup your Macbook
2. Download NodeJS package from http://nodejs.org
3. In Finger, double click on Downloads/node-*.pkg and run the installer
4. Open a the Mac "Terminal" (Applications -> Utilities -> Terminal)
5. type "cd Desktop" and press enter (We'll use your desktop to keep things simple for now)
6. type "node"
7. type "console.log('Hello World!');"
8. type ".exit" and you're done with getting setup

Congratulations you're up and running with NodeJS.

### [Small step forward](exercise-01)

1. Start up your favorite Text Editor
2. Open a new file
	a. Type the following line without the double quotes
	b. "console.log('Hello again.');"
	c. Save it to your desktop as "hello.js"
3. Switch the Terminal
4. Type "node hello.js"
5. Congratulations you've written your first Node program

You've written a simple program.

## [Big step forward](exercise-02)

We're going to use two NodeJS modules. Both are built in with NodeJS so we don't need to
install anything extra.  One module is called "fs" and the other is called "http".  "fs" is used to
access the file system (e.g. you can read or write files using it).  "http" module lets us create
web servers easily.


We're going to create three files in this example-

+ index.html
+ 404.html
+ server.js

The first is some HTML we'll send to the browser, the second is a simple 404 message page.
Finally server.js does the heavey lifting by keeping both files in memory ready for
ready to respond to browser requests appropriately. server.js replaces Apache+PHP
in the LAMP stack.


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
	        if (request.url === "/" || request.url === "/index.html") {
			console.log(request.url, "found");
	                response.writeHead(200, {
				"Content-Type": "text/html",
				"Content-Size": homepage.length
			});
			response.end(homepage);
	        } else {
			console.log(request.url, "not found");
	                response.writeHead(404, {
	                        "Content-Type": "text/html",
	                        "Content-Size": errorpage.length
	                });
	                response.end(errorpage);
	        }
	}).listen(3000);
```

Now let's try this out. 
	
1. Switch back to Terminal and type- "node server.js"
2. Point your browser at http://localhost:3000
3. You should see your "Hi There" page
4. Try http://localhost:3000/something-else
5. You should see the 404 page

That's it. You've written your first high performance web service.


### Perspective

What you just wrote can handle about 600-800 concurrent requests (at least on my
Macbook Pro). That is comparable with what www.usc.edu can handle for the home page.
Our campus web server is made up of two large Solaris boxes run behind a high 
performance hardware load balancer. So why is that? We're using a different
model to process http requests.

1. We're only doing what is needed and nothing more (Apache, does much, much more)
2. We're only running one process not one process per browser request
3. We're reading all our content from memory (fast) one time versus reading from disc (slow) for each request

Look at the lines between "http.createServer" and "listen". This is where we
implement what Apache does internally. In practice we don't have to do all 
this heavy lifting (e.g. set headers, etc).  We can use a Node module called express
which will let us define "routes" that will call a function that sends back an
appropriate response. 


## Routes

Let's take a step back to the web browser a moment.  Web browser interaction is 
centered around events and callback. I've seen this pattern in the jQuery scripts-

```JavaScript
	$('#my-thing').blur(function () {
	         alert("Hi There");
	});
```

What this is doing is listening for a "blur" event on the tag with the
id attribute of "my-thing". When that event happens then a function
is called to do some work. The jargon name for this is a "callback". 

Now look at our previous web server.  The function inside of "http.createServer(...);" 
is a callback. When an http request is received, http calls this function to process 
the request and complete the response.  

In our next example we'll take it a step further. We'll associate a specifically
requested path with a specific response. This is the core idea behind what is
popularly been called "routing". A route describes the specific relationship between
a path and how to process it.  

Looking back at our "Hi There" example our routes were "/", and everything else (i.e. "*").
To explore building a web server we're going to use this route idea by using a Node
module called Express (see http://expressjs.com for all the gory details).


### Prerequisites

Before we can use express we need to install it. It is not one of the core modules
that comes out of the box with NodeJS though it is a very popular model.
From your Mac Terminal program run the following command-

```shell
	npm install express
```

This will install the express module and make it available to NodeJS.  

We're going to create a new file to add to our example. In your text editor
create a file named "api-mockup.json" that will have the content below-

```JavaScript
	{
		"friends": ["John", "Paulina", "Georgina", "Ringo"],
		"favorites": {
			"colors": {
				"cardinal": ["John", "Paulina"],
				"gold": ["Georgina", "Ringo"]
			}
		}
	}
```

### [Exploring routes](exercise-03)

Now let's make a new version of server.js by modifying what we previously wrote
so it now looks like (you can skip typing the JavaScript comments)-

```JavaScript
	var express = require("express"),
	        server = express();

	// Now we need to define our routes. 
	// First we define our homepage then everything else.
	server.get("/", function (request, response) {
	        console.log(request.url, 200, "found");
	        // Set the http status code we want to return.
	        response.status(200);
		// Notice we're using .sendfile instead of .end
		// .sendfile will read a file from disc and keep
		// it resident in memory for a period of time.
		// How long can be configured by express.
	        response.sendfile("index.html");
	});
	
	// Here's a catch all route, in this case treating them as a 404.
	// You could also do other things (e.g. redirect to a CDN)
	server.get("*", function (request, response) {
	        console.error(request.url, "not found");
	        // Here we've chained .status and and .sendfile together
	        // for brevity.
	        response.status(404).sendfile("404.html");
	});

	console.log("Starting web server on port",3000);
	server.listen(3000);
```

Don't worry about the the specifics of express versus the http module. Focus on
the concept of routes.

What can a route do? Anything you program it to.  A route can send back whatever
you want -  HTML, CSS, JavaScript, JSON, images or movies. It can talk to a database
and return results. It can run a calculation and return a result. It could also take a
template and combine it with data before sending it back to the browser via the response
object.

For more information about the Express NodeJS module see http://expressjs.com.

What we learned so far

1. How to install Node for development
2. How to use the Node as a shell (i.e. the repl - Read, Evaluate, Process loop)
3. How to write and run simple Node programs
4. How to use Node modules
5. How to install additional modules
6. How to create a basic web server with either http module or the express framework
7. We've started to explore the concept of "routes" in web services

# [On your own](homework-01.md)

The following homework explores adding more routes to your previous web server.

* How would you support adding CSS, JavaScript and [JSON](http://json.org) files? (hint: add some more routes)
* Using express, how do you make sure that the files you're send to the browser are sent with the correct mime-type?
* How would you adjust the http status code returned along with your new content?

Here's an example [JSON](http://json.org) file:

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

JSON files are usually served with a content type of application/javascript.


