var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
	request('https://api.twitch.tv/kraken/games/top/?limit=1', function(error, response, body) {
		if (!error && response.statusCode == 200) {	
			console.log('inside request');
			var bodyJson = JSON.parse(body);
			var topGame = bodyJson.top[0].game.name;
			console.log(topGame);
			console.log(typeof topGame);
			res.render('index', { title: 'Twitch Audio', game: topGame });
		}
	});
});

// router.get('/', function(req, res, next) {

// });   

module.exports = router;
