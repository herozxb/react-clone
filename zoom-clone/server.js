const express = require('express')
const app = express()


const https = require('https')
const fs = require('fs');
var key = fs.readFileSync('./selfsigned.key');
var cert = fs.readFileSync('./selfsigned.crt');
var options = {
  key: key,
  cert: cert
};

//const server = require('https').Server(app)
const server = https.createServer(options, app);


const io = require('socket.io')(server);
const { v4: uuidv4 } = require('uuid');
const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
	debug: true
});

//setup
app.set('view engine','ejs');
app.use(express.static('public'));
app.use('/peerjs', peerServer);


//function
app.get('/',(req,res) => {
	//res.redirect(`/${uuidv4()}`);
	//res.render('room');
  res.redirect("/1");
})

app.get('/:room',(req,res) =>{
	res.render('room',{ roomId: req.params.room})
	console.log("==1.0==");	
	console.log(req.params.room);
})

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('join-room', (roomId, user_id) => {
    console.log('join-room');
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected",user_id);
  });


  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


server.listen(3020, () => {
  console.log('listening on *:3020');
});