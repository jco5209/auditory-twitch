var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.use(function(req, res, next) {
	// request('https://api.twitch.tv/kraken/users/test_user1', function(error, response, body) {
	// 	if (!error && response.statusCode == 200) {	
	// 		console.log('inside request');
	// 		var bodyJson = JSON.parse(body);
	// 		console.dir(bodyJson.display_name);
	// 	}
	// });
	res.send('yo');
});




	


module.exports = router;
