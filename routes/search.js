var search = require('express').Router(),
    Twitter = require('twitter'),
    client = new Twitter(require('../env/credentials.js').twitter),
    tweetParser = require('../util/tweetParser.js');

search.get('/:query/positive', function(req, res){

  var query = req.params.query + encodeURIComponent(' :)');

  client.get('search/tweets', { q: query, lang: 'en' } , function(error, tweets, response){
    if (!error) {
      res.json(tweetParser.parse(tweets.statuses));
    }
  });

});

search.get('/:query/negative', function(req, res){

  var query = req.params.query + encodeURIComponent(' :(');

  client.get('search/tweets', { q: query, lang: 'en' } , function(error, tweets, response){
    if (!error) {
      res.json(tweetParser.parse(tweets.statuses, true));
    }
  });

});

module.exports = search;
