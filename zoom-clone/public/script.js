const videoGrid = document.getElementById('video-grid')
const myVideo = document.createElement('video')
console.log(videoGrid)
const peer = new Peer(undefined, {
  path: '/peerjs',
  host: '/',
  port: '3020'
})

let myVideoStream;
//myVideo.muted = true;
myVideo.setAttribute('autoplay', '');
myVideo.setAttribute('muted', '');
myVideo.setAttribute('playsinline', '');

var getMedia = navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;


getMedia({
  video: true,
  audio: false,
}).then(stream => {

	myVideoStream = stream;
	addVideoStream(myVideo, stream)



	peer.on('call', function(call) {
		call.answer(stream); // Answer the call with an A/V stream.
		const video = document.createElement('video');
		call.on('stream', function(remoteStream) {
		  addVideoStream(video,remoteStream)
		})
	});
//*/
	socket.on("user-connected",(user_id)=>{
		connectToNewUser(user_id,stream);
	});

})

peer.on('open', user_id =>{
	console.log("==peer_id==")
	console.log(user_id)
	socket.emit("join-room",ROOM_ID,user_id);

})
socket.emit("join-room",ROOM_ID);


const connectToNewUser = (user_id,stream)=>{
	console.log("new user in client side");
	console.log(user_id);
    console.log("has come");



    const call = peer.call(user_id,stream)
    const video = document.createElement('video');
    call.on('stream', remoteStream => {
    	addVideoStream(video,remoteStream)
    })
};

function addVideoStream(video, stream) {
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play();
  })
  videoGrid.append(video)
}
