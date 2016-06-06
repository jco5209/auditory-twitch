var playerPlay = document.getElementById("play");
var playerPause = document.getElementById("pause");

var playerUp = document.getElementById("volumeUp");
var playerDown = document.getElementById("volumeDown");

playerPlay.addEventListener("click", function() {
	player.play();
});

playerPause.addEventListener("click", function() {
	player.pause();
});

playerUp.addEventListener("click", function() {
	player.setVolume(player.getVolume() + 0.1);
});

playerDown.addEventListener("click", function() {
	player.setVolume(player.getVolume() - 0.1);
});
