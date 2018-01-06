console.log('The bot is starting II');

var Twit = require('twit');

//importing config.js file
var config = require('./config');

//make a new Twit object
var T = new Twit(config);

var stream = T.stream('statuses/filter', { track: '#javascript' });

var allTweets = [];
stream.on('tweet', function(tweet) {
	if (tweet.retweeted == false) {
		console.log(tweet.id_str);
		allTweets.push(tweet.id_str);
	}
});
setInterval(tweetIt, 1000 * 60 * 30);

function tweetIt() {
	var randomIndex = Math.floor(Math.random() * allTweets.length);
	if (allTweets.length > 0) {
		console.log('selected tweet ' + allTweets[randomIndex]);
		T.post('statuses/retweet/:id', { id: allTweets[randomIndex] }, function(err, tweet, response) {
			if (err) {
				console.log(err);
			} else {
				console.log('retweeting ' + tweet.text + ' whose id is ' + tweet.id_str);
			}
		});
	} else {
		console.log('Skipping this time - allTweets empty');
	}

	allTweets = [];
}
