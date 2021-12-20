import WebSocket from 'ws';
import { BufferWS } from 'buffer.ws';

console.log("Gear Launcher - 1.0.0");

// On créer la connexion
const socket = new WebSocket('ws://localhost:3000');
socket.binaryType = 'arraybuffer';

// La connexion est ouverte, on ping le serveur
socket.addEventListener('open', function (event) {
	let buffer = new BufferWS()
		.writeString("Ping!");
	socket.send(buffer);
});

// On écoute les messages
socket.addEventListener('message', function (event) {
  let buffer = new BufferWS(event.data);
	socket.send(buffer.readString()); // Pong!
});


