var sadWords = require('../words/sad.js');

var parse = function(tweets, isSad){

  var parsedTweets = [];

  for(var i = 0; i < tweets.length; i++){

    var containsSadWord = false;

    for(var j = 0; j < sadWords.length; j++){

      containsSadWord = tweets[i].text.toLowerCase().split(' ').indexOf(sadWords[j]) >= 0;

      if(containsSadWord){
        break;
      }
    }

    if((containsSadWord && isSad) || (!containsSadWord && !isSad)){
      parsedTweets.push(tweets[i]);
    }
  }

  return parsedTweets;

};

module.exports = parse;
