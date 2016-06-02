var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.use(function(req, res, next) {
	var router1 = 'inside router.get 1';
	req.routerOne = router1;
	next();
});

router.use(function(req, res, next) {
	console.log(req.routerOne);
	res.end();
});
// request('https://api.twitch.tv/kraken/users/test_user1', function(error, response, body) {
// 	if (!error && response.statusCode == 200) {	
// 		console.log('inside request');
// 		var bodyJson = JSON.parse(body);
// 		console.dir(bodyJson.display_name);
// 	}
// });

	


module.exports = router;
