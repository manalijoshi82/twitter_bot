

console.log("The bot is starting II");

var Twit = require ('twit');

//importing config.js file
var config = require('./config');

//make a new Twit object
var T = new Twit(config);

var stream = T.stream('statuses/filter', { track: '#javascript' })

var allTweets= [];
stream.on('tweet', function (tweet) {
    if(tweet.retweeted == false){
        //console.log(tweet.id_str);
        allTweets.push(tweet.text);
    }
})
    setInterval(tweetIt, 1000 * 60 * 20);
    function tweetIt(){
        var randomIndex = Math.round(Math.random() * allTweets.length);
        //console.log(allTweets[randomIndex]);
        T.post('statuses/retweet/:id', { id: 'allTweets[randomIndex]' }, function (err, tweet, response) {
            if(err){
                console.log(error);
            }
      
            console.log(tweetIt.text);
        });
      
  }


  


/*
T.stream('statuses/filter', {track: ''}, function(stream) {
    stream.on('data', function(tweet){
        console.log(tweet.text);
    });

    stream.on('error', function(error){
        console.log(error);
    });
});
*/


//T.get('geo/reverse_geocode', params, gotData);
//T.get('statuses/mentions_timeline', params, gotData);

/*
function gotData(err, data, response) {
    //var tweets = data.statuses;
    for(var i = 0; i < data.length; i++){
        console.log(data);
    }
       
        /*
        T.post('favorites/create', {id: data[i].id_str}, function(e,d,r){
            if (e) {
                console.log("Could not Like " +  e);
            } else {
                console.log("Liked " + d.id );
            }
        });
        
    }
  */