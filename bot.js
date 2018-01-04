console.log("The bot is starting II");

var Twit = require ('twit');

var config = require('./config');
//console.log(config);

var T = new Twit(config);

var params ={
    screen_name : "manali_joshee"
}

T.get('users/show', params, gotData);
//T.get('statuses/mentions_timeline', params, gotData);


function gotData(err, data, response) {
    //var tweets = data.statuses;

        console.log(data);
  
        /*
        T.post('favorites/create', {id: data[i].id_str}, function(e,d,r){
            if (e) {
                console.log("Could not Like " +  e);
            } else {
                console.log("Liked " + d.id );
            }
        });
        */
    }
  