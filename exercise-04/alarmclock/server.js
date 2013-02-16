    var path = require("path"),
        express = require("express"),
        server = express();
        
    // Setup of some default logging
    server.use(express.logger());
    // Now setup our document root.
    server.use(express.static(path.join(__dirname, "Site")));
    // Finally listen on port 3000
    server.listen(3000);
