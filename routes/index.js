var express = require('express');
var router  = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Auditory' });
});

router.post('/', function(req, res) {
	request('https://api.twitch.tv/kraken/streams/' + req.body.streamer.toLowerCase(), function(error, response, body) {
		if (!error && response.statusCode == 200) {

			var reqJP = JSON.parse(body);

			if (reqJP.stream === null) {
				res.render('index', { onOff: 'Offline - ', stream: req.body.streamer.toLowerCase(), iframe: 'iframe'});
			} else {
				res.render('index', { onOff: 'Live - ', stream: req.body.streamer.toLowerCase(), iframe: 'iframe'});
			}

		} else {
			var errJP = JSON.parse(body);
			res.render('index', { onOff: errJP.error + ' - ', stream: req.body.streamer.toLowerCase(), iframe: 'notFound' });
		}
	}); // end request()
});


module.exports = router;
