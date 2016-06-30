(function () {

	// Search field
		//if illegalChrs[i] in streamSearch disable additional input

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
			} 

			else {
				streamBtn.disabled = false;
				illegalChr.style.display = 'none';
			}

		} //end loop
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

	//Text Carousel
		//Stream title text scrollLeft on mouseenter

	var streamInfo = document.getElementById('streamInfo');

	function myScroll() { streamInfo.scrollLeft = streamInfo.scrollLeft + 1 };

	if(streamInfo.scrollWidth > 185) {
		streamInfo.addEventListener("mouseenter", function() {
			var myInterv = setInterval(myScroll, 50);

			streamInfo.addEventListener("mouseleave", function() {
				clearInterval(myInterv);

				if(streamInfo.scrollLeft == streamInfo.scrollWidth - 185) {
					streamInfo.scrollLeft = 0;
				}

			});
		});
	}


	// Display controls only when streamer is online

	var chat = document.getElementById('chat_embed');

	if(chat.nodeName == "UNDEFINED") {
		document.getElementById('playerControls').style.display='none';
	} else {
		document.getElementById('playerControls').style.display='block';
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

})();







