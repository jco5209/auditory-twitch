var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
	request('https://api.twitch.tv/kraken/games/top/?limit=1', function(error, response, body) {
		if (!error && response.statusCode == 200) {	
			console.log('inside request');
			var bodyJson = JSON.parse(body);
			
			res.render('index', { title: 'Twitch Audio' });
		}
	});
});

router.post('/', function(req, res) {
    console.log(req.body.streamer);
    res.render('index', { stream: req.body.streamer.toLowerCase(), iframe: 'iframe'});
});

// router.get('/', function(req, res, next) {

// });   

module.exports = router;
