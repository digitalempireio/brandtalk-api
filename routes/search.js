var search = require('express').Router(),
    Twitter = require('twitter'),
    client = new Twitter(require('../env/credentials.js').twitter),
    tweetParser = require('../util/tweetParser.js');

search.get('/:query', function(req, res){

  client.get('search/tweets', { q: req.params.query } , function(error, tweets, response){
    if (!error) {
      res.json(tweetParser.parse(tweets.statuses));
    }
  });

});

module.exports = search;
