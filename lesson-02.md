# A simple site

In our next lesson we're going to build a simple single page site. It
will contain a simple digital clock, current weather forcast (we will get this from
Yahoo's YQL service), and allow the setting of alarms if JavaScript
is turned on. We will take a responsive design approach for everything
except supporting alarms.

When you've completed this lesson you should have learned the following

* Use two additional Unix commands (*mkdir* and *touch*)
* Mock up an API using with JSON files
* How to use YUI 3 with Node
* Access remote services server side to support responsive design goals in the browser
* Create simple Mustache templates and process via YUI3 Handlebar module

### Project requirements

A single page site which includes at

* A recent weather forecast
* The time the page loaded

If JavaScript is available then we should
support

* A clock that updates each second
* The weather forecast, updating every hour (if on-line)
* The option to set alarms on specific days of the week
* Work off line with the last weather data available


### Why YUI?

Many people think of YUI interms of a UI library (which it can
be) but YUI provides much more than that. It provides a solid
module system that works in Node as well as in the browser. It
has robust data classes such as the Date module a reliable IO
library a consistant integration of Mustache templates via
the Handlbar module. In short YUI considers Node a first class
citizen along side browsers such as Firefox, Chrome and Safari.
YUI also comes with a robust toolchain which have migrated to
Node too.

## What we'll be using

The site will consist of the following files when we're done-

* Site/index.mustache
* Site/css/style.css
* Site/js/alarmclock.js
* Site/mockup/weather.json

We will iterate through the construction process so initially
Site/index.mustache will be Site/index.html before we convert it
to a template for server side processing.

## Prequisites

Install YUI3 for Node using the usual npm command-

```shell
	npm install yui@stable
```

## Setup boiler plat

From the Mac Terminal we need to create a new folder called alarmclock along
with a simple directory structure and some empty files.  We're going to use
three Unix commands - *mkdir*,  *cd*, and *touch*. The first two respectively
create a new directory (i.e. folder in Mac parlance), change directory (we
did this is the last lesson). The last one, *touch*, does two things

1. if a file doesn't exist it creates it
2. updates the modified timestamp for the file that exists or was just created


Starting up Terminal. If necessary change the directory to where
you'd like to work (e.g. Desktop is OK). 

```shell
	mkdir -p alarmclock/Site/js
	mkdir -p alarmclock/Site/css
	mkdir -p alarmclock/Site/mockup
	cd alarmclock
	touch server.js
	touch Site/index.html
	touch Site/css/style.css
	touch Site/js/alarmclock.js
	touch Site/mockup/weather.json
```


## Iteration One

This is what we'll build first

1) A very simple express based web server
2) Mockup of page using hard coded text
3) placeholder CSS
4) placeholder JavaScript

Now we're ready to fill in a very simple web server using express.  
Express can treat the *Site* folder like the _htdocs_ folder in an 
Apache setup.  To do that we tell express the full path to *Site*. 
That way only the contents in Sites is served up and nothing else.
We'll call this JavaScript file *server.js* like last time.


```JavaScript
    var path = require("path"),
        express = require("express"),
        server = express();
        
    // Setup of some default logging
    server.use(express.logger());
    // Now setup our document root.
    server.use(express.static(path.join(__dirname, "Site")));
    // Finally listen on port 3000
    server.listen(3000);
```


Next let's fill in some boilerplate HTML in *Site/index.html* (later
we'll rename this to *Site/index.mustache*).

```HTML
    <!DOCTYPE html>
	<html lang="en">
		<head>
			<title>Alarm Clock</title>
			<link href='http://fonts.googleapis.com/css?family=Roboto+Condensed' rel='stylesheet' type='text/css'>
			<link rel="stylesheet" href="/css/style.css" />
		</head>
		<body>
			<header>Alarm Clock</header>
			<section id="weather">Weather Info will go here.</section>
			<section id="clock">10:00 AM</section>
			<section id="alarms">None set.</section>
			<footer>Have a good day.</footer>
			<script src="http://yui.yahooapis.com/3.8.1/build/yui/yui-min.js"></script>
			<script src="/js/alarmclock.js"></script>
		</body>
	</html>
```

Our CSS will just set the color and font for now (i.e. 
*Site/css/style.css*)-

```CSS
	body {
		color: #990000;
		background-color: #ffffff;
		font-family: 'Roboto Condensed', sans-serif;
		font-weight: 400;
		font-size: 2em;
	}
```

And finally our JavaScript placeholder we'll run in the browser
(i.e. *Site/js/alarmclock.js*)-

```JavaScript
	// Setup YUI and our Y object
	YUI().use("node", "datatype-date", function (Y) {
		// We're going to get the DOM elements with
		// Y.one() and save them so we can use them.
		var clock = Y.one("#clock"),
			footer = Y.one("footer");

		// We'll set the contents of #clock to the current time
		// formatting it with Y.Date class.
		clock.set("text", Y.Date.format(new Date(), {format: "%T %p"}));
		// We'll set the contents of the footer to "It's alive!"
		footer.set("text", "It's alive!");
	});
```

Start up your simple web server and make sure you can see this page.

```shell
	node server.js
```

