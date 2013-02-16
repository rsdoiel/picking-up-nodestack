
# Front to back development with Node

If we're using similar technology client side as server side can you start prototyping from the browser? Yes.
Because we're working with JavaScript on both sides of the equation it makes allot of sense to start in
the browser.  This is sometimes called "front to back" prototyping. All you need is the express based
web server from [lesson 1](lesson-01.md) to get started. Here's a simple web server that supports three
initial files - index.html, css/style.css, js/project-code.js. This time we're going to place all these
files in a their own folder called *Site*.

Setup your work environment by starting up your Mac Terminal and running the following commands-

```shell
    mkdir project-01
    cd project-01
    mkdir -p Site/js
    mkdir -p Site/css
    touch Site/index.html
    touch Site/css/style.css
    touch Site/js/project-code.js
    touch Site/weather-data.json
```

We're going

```JavaScript
    var express = requires("express"),
      server = express();
```
