

# NodeJS+YUI3 and server side mashups


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

#### Prerequisites

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

