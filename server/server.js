// server.js -- initialize node.js server
// ----------------------------------------------
var app = require('./config/server-config.js');

var port = 3000;

app.listen(port);

console.log('Grizzly server listening on port ' + port);