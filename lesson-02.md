# Front to back development with Node

If we're using similar technology client side as server side can you start prototyping from the browser? Yes.
Because we're working with JavaScript on both sides of the equation it makes allot of sense to start in
the browser.  This is sometimes called "front to back" prototyping. All you need is the express based
web server from [lesson 1](lesson-01.md) to get started. Here's a simple web server that supports three
initial files - index.html, css/style.css, js/alarmclock.js. This time we're going to place all these
files in a their own folder called *Site*.

Setup your work environment by starting up your Mac Terminal and running the following commands-

```shell
    mkdir -p alarmcock/Site/js
    mkdir -p alarmcock/Site/css
    mkdir -p alarmcock/Site/mockup
    cd alarmclock
    touch server.js
    touch Site/index.html
    touch Site/css/style.css
    touch Site/js/alarmclock.js
    touch Site/mockup/alarmclock.json
```

Now we're ready to fill in a very simple web server using express.  Express can treat the *Site* folder
like the _htdocs_ folder in an Apache setup.  To do that we tell express the full path to *Site*. 
That way only the contents in Sites is served up and nothing else.


```JavaScript
    var path = require("path"),
        express = requires("express"),
        server = express();
        
    // Setup of some default logging
    server.use(express.logger);
    // Now setup our document root.
    server.use(express.static(path.join(__dirname, "Site")));
    // Finally listen on port 3000
    server.listen(3000);
```

