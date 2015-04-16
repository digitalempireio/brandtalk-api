var express = require('express'),
    https = require('https'),
    search = express.Router(),
    Twitter = require('twitter'),
    client = new Twitter(require('../env/credentials.js').twitter);

search.get('/:query', function(req, res){

  client.get('search/tweets', { q: req.params.query } , function(error, tweets, response){
    if (!error) {
      res.json(tweets);
    }
  });

});

module.exports = search;
