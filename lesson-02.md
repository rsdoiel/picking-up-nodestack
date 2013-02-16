# A simple site

In our next lesson we're going to build a simple single page site. It
will be a simple alarm clock page. It will include the days weather
forcast (we will get this from Yahoo's YQL service), a clock and
alarms.  We will using responsive design so that browsers without
JavaScript enabled will still see something useful.

When you've completed this lesson you should have learned the following

* Mocking up services with JSON blobs
* Access remote services server side via YUI3' io and YQL modules
* Simple Mustache template processing via YUI3 Handlebar module

The site will consist of the following files when we're done-

* Site/index.mustache
* Site/css/style.css
* Site/js/alarmclock.js
* Site/mockup/weather.json

## Prequisites

Install YUI3 stable with npm with the following command-

```shell
	npm isnstall yui@stable
```

## Setup

Setup your work environment by starting up your Mac Terminal and running the following commands-

```shell
    mkdir -p alarmclock/Site/js
    mkdir -p alarmclock/Site/css
    mkdir -p alarmclock/Site/mockup
    cd alarmclock
    touch server.js
    touch Site/index.mustache
    touch Site/index.html
    touch Site/css/style.css
    touch Site/js/alarmclock.js
    touch Site/mockup/weather.json
```

Now we're ready to fill in a very simple web server using express.  Express can treat the *Site* folder
like the _htdocs_ folder in an Apache setup.  To do that we tell express the full path to *Site*. 
That way only the contents in Sites is served up and nothing else.


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

Next let's fill in some boiler plate HTML in *Site/index.mustache*.

```HTML
    <!DOCTYPE html>
	<html lang="en">
		<head>
			<title>Alarm Clock</title>
			<link rel="stylesheet" href="/css/style.css" />
		</head>
		<body>
			<header>Alarm Clock</header>
			<section id="weather">
				<noscript>Weather information requires JavaScript to contact the weather service</noscript>
			</section>
			<section id="clock"></section>
			<section id="alarms"></section>
			<!--
				I'm using YUI 3 to build this app because it is supported both in most browser and server side with Node.
			-->
			<script rel="javascript" src="http://yui.yahoo.com/3.8.0/build/yui-min.js"></script>
			<script rel="javascript" src="/js/alarmclock.js"></script>
		</body>
	</html>
```

Start up your simple web server and make sure you can see this page.

```shell
	node server.js
```
