console.log("The bot is starting II");

var Twit = require ('twit');

var config = require('./config');
//console.log(config);

var T = new Twit(config);

var params ={
    screen_name : "manali_joshee",
    max_id: "541830449278894100",
    count : 20
}

T.get('statuses/user_timeline', params, gotData);
//T.get('statuses/mentions_timeline', params, gotData);




function gotData(err, data, response) {
    //var tweets = data.statuses;
    for (var i= 0; i < data.length; i++){
        console.log(data[i].id_str);
  
        
        T.post('favorites/create', {id: data[i].id_str}, function(e,d,r){
            if (e) {
                console.log("Could not Like " +  e);
            } else {
                console.log("Liked " + d.id );
            }
        });
        
    }
};
  