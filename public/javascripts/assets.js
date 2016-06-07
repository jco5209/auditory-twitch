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