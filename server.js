var
	express = require('express'),
	app = express(),
	server = require('http').Server(app);
	// socket = require('socket.io')(server);

var port = process.env.PORT || 5000;

app.use('/', express.static('./'));
app.use('/', express.static('./views'));

app.get('/', function (req, res){
	res.sendFile('views/index.html');
});

server.listen(port, function (){
	console.log('Server running on port ' + port);
});
