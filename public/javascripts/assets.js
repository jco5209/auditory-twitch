// Search field

document.getElementById("streamSearch").addEventListener("keypress", function(evt) {
	var streamBtn = document.getElementById('streamBtn');
	var streamSearch = document.getElementById('streamSearch');
	var illegalChr = document.getElementById('illegalChr');

	var illegalChrs = [' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

	for(var i = 0; i < illegalChrs.length; i++) {
		if(streamSearch.value.indexOf(illegalChrs[i]) >= 0) {
			streamBtn.disabled = true;
			illegalChr.innerHTML = "Illegal Character " + "' " + streamSearch.value.slice(streamSearch.value.length -1) + " '";
			illegalChr.style.display = 'block';
			evt.preventDefault();
			break;
		} else {
			streamBtn.disabled = false;
			illegalChr.style.display = 'none';
		}
	}

});





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









