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
		console.log(request.url, 200, "found");
                response.writeHead(200, {
			"Content-Type": "text/html",
			"Content-Size": homepage.length
		});
		response.end(homepage);
        } else {
		console.log(request.url, 404, "not found");
                response.writeHead(404, {
                        "Content-Type": "text/html",
                        "Content-Size": errorpage.length
                });
                response.end(errorpage);
        }
}).listen(3000);
console.log("Started web server on port 3000");
