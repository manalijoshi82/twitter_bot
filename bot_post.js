console.log("The follow bot is starting");

var Twit = require ('twit');

var config = require('./config');
//console.log(config);

var T = new Twit(config);

//Setting up a user stream
var stream = T.stream('user');

//Anytime someone follows me
stream.on('follow', followed);

function followed(eventMsg){
    console.log("Follow event!");
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    tweetIt('.@' + screenName + ' Thanks for the follow!')
}


//tweetIt();
//setInterval(tweetIt, 1000 * 60 * 2);


function tweetIt(txt){
    var r = Math.floor(Math.random() * 100);

    var tweet = {
        status: txt
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

  
  