var compression = require('compression');

var express = require('express')
    , app = express()
    , server = require("http").createServer(app)

app.use(compression());
app.use(express.static(__dirname + '/public'));

require("./drone/camera-feed");
require("./drone/controller");

server.listen(3000);
