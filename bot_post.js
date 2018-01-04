console.log("The bot is starting");

var Twit = require ('twit');

var config = require('./config');
//console.log(config);

var T = new Twit(config);


var tweet = {
    status:"This is @manali_joshee learning how to build a twitter bot using node.js and loving every bit of it!!!"
}

T.post('statuses/update',  tweet, tweeted);


function tweeted (err, data, response) {
     if(err){
         console.log("Something went wrong!");
     } else{
         console.log("It worked!!!");
     }
}
  
  