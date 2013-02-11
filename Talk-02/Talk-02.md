
# Nodestack+YUI3 for mockups and prototypes

Today's talk is focused on using our nacient knowledge of NodeJS to suppy
a development platform for prototyping web systems. These could be existing
systems or new ones.  Here's going to take advantage of our common JSON
data format, express framework for setting up routes.

### Prequistes

In this talk we assumed you've have your same setup as in talk one. That
means the following-

* NodeJS is installed and working
* You've previously installed express module
* You have a text editor
* You know how to start/stop your NodeJS servers using the Mac Terminal


## Mockup an API results browser side

+ Why YUI3?
	+ A good loader
	+ Excellent Module support
	+ NodeJS as a first class environment
	+ Can work along side jQuery

## Mocking up a the web API server side

We'll start with talk one's final example.  We'll extend that by using YUI 3's io
module in the browser to fetch the API data.  We'll use a JSON file server side
to simular API content and add a few routes so we make the simulation complete.


## NodeJS+YUI3 and server side real data mashups


YUI3 is more than a UI library[1].  It provides additional services such as a robust
loader and module system that can be leverage server side as well as in the browser. 
These work server side well as in the browser.  YUI treats NodeJS as a first class platform
just like it does with Firefox, Chrome, Safari and IE web browsers[2].  This means you can
write YUI code for data handling that works literally the same server side as it does in the
browser.


Two interesting modules to get started with are Io-base and Handlebars.  Io-base  provides
a consistent way of access remote resources whether you're in the browser or on the server.
Handlebars provides flexible templating that works both in the browser and server side. 


To explore this we'll install the YUI 3.x library  in NodeJS and use it to access some USC APIs.

### Prerequisites

We need to install yui@stable for this next example. Against we use the "npm" tool to install the module-

```shell
	npm install yui@stable
```

Excellent YUI 3.8.x is now available server side.

Exploring JSON APIs

This example is going to take a template defined in an HTML page using Handlebars markup
and combine it with data from our USC Event Calendar API (version 3).  Here's a results page
markup-

```JavaScript
	<!DOCTYPE html>
	<html>
	        <head>
	                <title>API Demo with YUI3 server side</title>
	        </head>
	        <body>
	                <h1>USC Event Calendar API Results</h1>
	                <ul></ul>
	        </body>
	</html>
```

[1] Before anyone gets excited, we can still use jQuery browser side.  YUI will happily load it
and play nice alongside it.
[2] Someday jQuery may do this but right now to get similar function you must cobble together
many projects (e.g. AngularJS, Backbone) as well as NodeJS specific modules to achieve the
same in.  If our goal is responsive systems that avoid compromising content access then having
code that runs the same server side as client becomes a big win.

