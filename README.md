# Starting with NodeStack

picking-up-nodestack is a self guided tour of learning the basics of NodeJS
along with the basics of MongoDB. It is evolving from a series of
presentations for my colleages.


## Goals of picking new stack

### What is Nodestack?

For those who might not have heard of it or just didn't follow what
the buzz was about since 2010. 

Since 1992 most of us working on the web have used either LAMP (i.e. Linux,
Apache, MySQL and PHP) or a variant to develop and deploy websites
and applications. The other big option was the Microsoft webstack - (Windows
Server, IIS, ASP, SQL Server).  There are a few industrial strength stacks
like .Net, C# or Java's Tomcat, jBoss or WebSphere. The trouble
with these platforms is they have become increasingly complex. This is
particularly true when you try to scale them out. 

The result of these challenges is recent years has been to expriment with
replacing the vintage web stacks with something either simpler to develop
with or scale. Popular examples have included Ruby on Rails and Google's
Python based App Engine. For some these weren't quite the fit they wanted.
Then Ryan Dahl started this little project called NodeJS...


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

* [Getting Node setup and run](lesson-01)

