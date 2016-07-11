(function () {


	// Search field
		//if illegalChrs[i] in streamSearch disable keypress input

	function atIllegalChrs() {

		var streamBtn = document.getElementById('streamBtn'),
			streamSearch = document.getElementById('streamSearch'),
			illegalChr = document.getElementById('illegalChr');	

		streamSearch.addEventListener("keypress", function(evt) {

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

	}	atIllegalChrs();	


	// General player control functionality 
		// Play; Pause; Volume Up; Volume Down; Mute/Unmute

	function atControls() {

		var play = document.getElementById("play"),
			pause = document.getElementById("pause"),
			volumeUp = document.getElementById("volumeUp"),
			volumeDown = document.getElementById("volumeDown"),
			mute = document.getElementById("mute");	

		play.addEventListener("click", function() {
			player.play();
		});
		pause.addEventListener("click", function() {
			player.pause();
		});
		volumeUp.addEventListener("click", function() {
			player.setVolume(player.getVolume() + 0.1);
		});
		volumeDown.addEventListener("click", function() {
			player.setVolume(player.getVolume() - 0.1);
		});

		mute.addEventListener("click", function() {

			if(player.getMuted()) {
				player.setMuted(false);
			}	else {
				player.setMuted(true);
			}

		});

	}	atControls();	

	
	//Text Carousel
		//Stream title text scrollLeft on mouseenter

	function atTextCarousel() {

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

	}	atTextCarousel();	


	// Display controls only when streamer is online

	function atchatVisual() {

		var chat = document.getElementById('chat_embed'),
			controls = document.getElementById('playerControls');

		if(chat.nodeName == "UNDEFINED") {
			controls.style.display='none';
		} else {
			controls.style.display='block';
		}

	} 	atchatVisual();

	
	// Display chat on/off on toggle'd click

	function atChatToggle() {
		var chatOnOff = true,
			chatToggle = document.getElementById('chatToggle'),
			chatEmbed = document.getElementById('chat_embed');

		chatToggle.addEventListener("click", function() {
			if(chatOnOff) {
				chatOnOff = false;
				chatEmbed.style.display='none';
			} else if(!chatOnOff) {
				chatOnOff = true;
				chatEmbed.style.display='block';
			}
		});
	}	atChatToggle();
	
})();







