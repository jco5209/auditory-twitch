var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Twitch Audio' });
});

router.post('/', function(req, res) {
	request('https://api.twitch.tv/kraken/streams/' + req.body.streamer.toLowerCase(), function(error, response, body) {
		if (!error && response.statusCode == 200) {

			var reqJP = JSON.parse(body);
			console.log(reqJP.stream);

			if (reqJP.stream === null) {
				res.render('index', { onOff: 'Stream offline - ', stream: req.body.streamer.toLowerCase(), iframe: 'iframe'});
			}	else {
				res.render('index', { onOff: 'Now listening to ', stream: req.body.streamer.toLowerCase(), iframe: 'iframe'});
			}

		} // end request() error check
	}); // end request()
});


module.exports = router;
