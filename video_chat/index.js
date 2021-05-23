const app = require("express")();
const https = require('https')
const fs = require('fs');
//var key = fs.readFileSync('./localhost.key','utf8');
//var cert = fs.readFileSync('./localhost.crt','utf8');

var key = fs.readFileSync('./file.pem','utf8');
var cert = fs.readFileSync('./file.crt','utf8');

var options = {
  key: key,
  cert: cert
};

//const server = require('https').Server(app)
const https_server = https.createServer(options, app);
const cors = require("cors");

const io = require("socket.io")(https_server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Running');
});

io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});

https_server.listen(PORT, () => console.log(`https server is running on port ${PORT}`));
