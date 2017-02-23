var express = require('express')
var app = express()
var fs = require('fs')

var server = require('http').createServer(app);
var io = require('socket.io')(server);

// Socket.io

io.on('connection', function(client){

  client.on('event', function(data){
      console.log(data)

      if (data == "shout") {
        io.sockets.emit('event', data)
      }
      this.emit('event', 'üdv')
  });

  client.on('disconnect', function(){});
});
console.log("Socket server listening on 3001 port")
server.listen(3001);

//app.use(express.static('public'))

// Express
app.get('/', function (req, res) {
    res.writeHead( 200, { 'Content-Type': 'text/html' } );
	fs.createReadStream( 'public/index_old.html' ).pipe( res );
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});