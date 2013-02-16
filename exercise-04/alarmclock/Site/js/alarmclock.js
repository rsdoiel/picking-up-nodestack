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
