var sadWords = require('../words/sad.js');

var parse = function(tweets){

  for(var i = 0; i < tweets.length; i++){
    tweets[i].isSad = isSad(tweets[i]);
  }

  return tweets;

};

var isSad = function(tweet){

  for(var i = 0; i < sadWords.length; i++){
    if(tweet.text.toLowerCase().split(' ').indexOf(sadWords[i]) >= 0) {
      return true;
    }
  }

  return false;

};

module.exports.parse = parse;
