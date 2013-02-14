# Picking up Nodestack

picking-up-nodestack is designed to be a self guided tour to explore writing 
web services based on NodeJS and JSON friendly databases (e.g. [MongoDB](http://mongodb.org))
or public web APIs (e.g. [YQL](http://developer.yahoo/com/yql/console)). It
is evolving from a presentation I made for my colleages.


## What is Node in Nodestack?

For those who might not have heard or just didn't ignored that buzz back
in 2009 NodeJS, more commonally just called Node, is a [platform that lets
you build networked services using JavaScript](http://nodejs.org/about/)
(e.g. a web server). In simple terms it is an alternative to more
vintage web development stacks like LAMP (Linux+Apache+MySQL+PHP/Perl/Python).


Ever wonder what it would be like to build things for the web and only
Have to work with HTML, CSS, and JavaScript? Including the server side
part of the web process. Welcome to NodeJS (usually just called Node).
Marry Node to a database that is JSON friendly like MongoDB and you
have a new web development stack to build with.


### The promise of Nodestack

While it is easy to over hype NodeJS and databases like MongoDB here's
the promise that has developers on both sides of the web server excited.

1. Simplicity
	* HTML, CSS, JavaScript, JSON is the whole stack
2. Faster/easier development cycle
	* Simple development environment
		* Texteditor
		* NodeJS
		* npm (Node's module manager)
		* MongoDB (optional) 
	* A rapid development cycle
		1. Code a front end with HTML, CSS and JavaScript
		2. Use JSON blobs to mockup API requests (replace alter with API/DB calls as later)
		3. Map/Wrap the URLs you need to service your pages in a NodeJS http server
		4. Fire up the http server object, test, then iterate to evolve
	* A growing ecosystem of modules and tools
		* jslint, jscheckstyle, YUI's toolchain, Mojito, Derby, Meteor
		* A large developer community
3. Performance and scalability
	* More control with less complexity
		* NodeJS
		* A datastore/database (e.g. MongoDB, CouchDB, Redis, etc.)
		* A scaling environments (e.g. Heroku, Nodejitsu, EngineYard, etc. )
	* Levage frontend experience through the whole stack
		* The NodeJS uses the same process model as the Browser
		* You already are experienced with JavaScript
		* You already use/understand an HTTP transaction (e.g. GET, POST, PUT, DELETE)
		* Add an basic understanding of NodeJS' module system and you're ready to go


## Picking up Nodestack

This self guided tour is broken down into lessons, excersizes and homeworks.  The lessons
are a narrative sprinkled with short exercises meant to illustrate a particular point.
Most exercises have a corresponding exercise directory you can copy and experiment with.
At the end of each lesson is a "homework". These are really just starting off points for your
own exploration of the ideas presented in the previous lessons. They will require additional
independant research on your part to complete (e.g. looking up docs at nodejs.org or a modules'
own website like yuilibrary.com or expressjs.com).

# The lessions

* [Getting Node setup and run](lesson-01.md)

