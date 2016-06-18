// General player control functionality 
	// Play; Pause; Volume Up; Volume Down; Mute/Unmute

document.getElementById("play").addEventListener("click", function() {
	player.play();
});
document.getElementById("pause").addEventListener("click", function() {
	player.pause();
});
document.getElementById("volumeUp").addEventListener("click", function() {
	player.setVolume(player.getVolume() + 0.1);
});
document.getElementById("volumeDown").addEventListener("click", function() {
	player.setVolume(player.getVolume() - 0.1);
});

document.getElementById("mute").addEventListener("click", function() {

	if(player.getMuted()) {
		player.setMuted(false);
	}	else {
		player.setMuted(true);
	}

});

// Display controls only when streamer is online

var chat = document.getElementById('chat_embed');

if(chat.nodeName === "UNDEFINED") {
	document.getElementById('placeHolder').style.display='none';
} else {
	document.getElementById('placeHolder').style.display='block';
}

// Display chat on/off on toggle'd click

var chatOnOff = true;

document.getElementById('chatToggle').addEventListener("click", function() {
	if(chatOnOff) {
		chatOnOff = false;
		document.getElementById('chat_embed').style.display='none';
	} else if(!chatOnOff) {
		chatOnOff = true;
		document.getElementById('chat_embed').style.display='block';
	}
});









