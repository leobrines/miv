var
	express = require('express'),
	app = express(),
	server = require('http').Server(app);
	// socket = require('socket.io')(server);

app.use('/', express.static('./'));
app.use('/', express.static('./views'));

app.get('/', function (req, res){
	res.sendFile('views/index.html');
});

server.listen(9080, function (){
	console.log('Holaaaaaa. Server running on port 8080');
});
