console.log("The bot is starting");

var Twit = require ('twit');

var config = require('./config');
//console.log(config);

var T = new Twit(config);

tweetIt();
setInterval(tweetIt, 1000 * 60 * 5);


function tweetIt(){
    var r = Math.floor(Math.random() * 100);

    var tweet = {
        status: "Here is a random number " + r + " @manali_joshee from node.js"
    }
    
    T.post('statuses/update',  tweet, tweeted);
    
    function tweeted (err, data, response) {
         if(err){
             console.log("Something went wrong!" + err);
         } else{
             console.log("It worked!!!");
         }
    }
}

  
  