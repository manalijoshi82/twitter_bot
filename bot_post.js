console.log("The bot is starting");

var Twit = require ('twit');

var config = require('./config');
//console.log(config);

var T = new Twit(config);


var tweet = {
    status: "@manali_joshee learning to automate the bot which will finally feel like a BOT...LOL"
}

T.post('statuses/update',  tweet, tweeted);


function tweeted (err, data, response) {
     if(err){
         console.log("Something went wrong!");
     } else{
         console.log("It worked!!!");
     }
}
  
  