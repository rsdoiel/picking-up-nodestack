# Picking up Nodestack

## Prologue

picking-up-nodestack is designed to be a self guided tour to explore writing 
web services based on NodeJS and JSON friendly databases (e.g. [MongoDB](http://mongodb.org))
or public web APIs (e.g. [YQL](http://developer.yahoo/com/yql/console)). It
is evolving from a presentation I made for my colleages.


### What is Node and Nodestack?

Ever wonder what it would be like to build things for the web, including server side, and only
work with HTML, CSS, and JavaScript? Welcome to NodeJS (usually called Node). Since 2009 Node  has been a 
[platform that lets you build networked services using JavaScript](http://nodejs.org/about/)
(e.g. a web server). In simple terms it is an alternative to the more
vintage web development stacks like LAMP (Linux+Apache+MySQL+PHP/Perl/Python).

Add a database to the mix and you have Nodestack.  Typically the database
in one of the popular NoSQL varieties that is good at supporting JSON representation
(e.g. MongoDB, CouchDB, Redis) but Node can also talk to relational databases
like MySQL. Node+Database for web development is Nodestack.


#### The promise of Nodestack

It is easy to over sell Nodestack. It will not make you sliced toast and coffee when
you get up in the morning.  It will not bring us world peace.  It will provide a
platform that teases with possibilites.  Here's a list of promises which have devlopers
exited about Node on with sides the web server transaction-

1. Simplicity
	* HTML, CSS, JavaScript, JSON through the whole stack
2. Faster/easier development cycle
	* Simple development environment
		* [Text Editor](http://en.wikipedia.org/wiki/Text_Editor) (e.g. [Scripted-Editor](https://github.com/scripted-editor/scripted/), [Adobe Brackets](https://github.com/adobe/brackets), [SublimeText](http://www.sublimetext.com/), or even [Vi](http://en.wikipedia.org/wiki/Vi) and [Emacs](http://www.gnu.org/software/emacs/) if you're old school)
		* [NodeJS](http://nodejs.org)
		* [npm](http://npmjs.org) (Node's module manager)
		* [MongoDB](http://mongodb.org) (optional) 
	* A rapid development cycle
		1. Code a front end with HTML, CSS and JavaScript
		2. Use JSON blobs to mockup API requests (replace with API/DB calls on a later interation)
		3. Map the URLs you need to service your pages in a NodeJS http server
		4. Fire up the http server object, test, then iterate and evolve
	* A growing ecosystem of modules and tools
		* jslint, jscheckstyle, YUI's toolchain, Mojito, Derby, Meteor
		* A large developer community
3. Performance and scalability
	* More control with less complexity
		* NodeJS
		* NoSQL databases (e.g. MongoDB, CouchDB, Redis, etc.)
		* A scaling environments (e.g. Heroku, Nodejitsu, EngineYard, etc. )
	* Levage frontend experience through the whole stack
		* You already are experienced with JavaScript
		* You already use/understand an HTTP transaction (e.g. GET, POST, PUT, DELETE)
		* Node shares the same event oriented process model as the Browser
		* Add an basic understanding of NodeJS' module system and you're ready to go

Note that Node doesn't guarantee you'll always be simplier, faster, easier,
more performant and scalable. By supporting the same process model as the browser, the same programming
language as the browser and by providing a very solid module system it goes a long way to starting you
out closer to the goals of simpler, faster, easier, more performant and scalable.

That is the end of the sales pitch. Now onto something more productive.


## Introduction

This is a self guided tour broken down into lessons, excersizes and homeworks.  The lessons
are a narrative sprinkled with short exercises meant to illustrate a particular point. Homeworks
your jumping off point for exploring Node on your own. Homeworks will require additional
independant research on your part to complete (e.g. looking up docs at nodejs.org or a modules'
own website like yuilibrary.com or expressjs.com).

## The lessions

* [Getting Node setup and run](lesson-01.md)
* [A simple project](lesson-02.md)
