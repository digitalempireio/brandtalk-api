var server = require('http').createServer(),
    io = require('socket.io')(server);

var Twitter = require('twitter'),
    client = new Twitter(require('./env/credentials.js').twitter),
    tweetParser = require('./util/tweetParser.js');

io.on('connection', function(socket){

  socket.on('search', function(query){

    client.stream('statuses/filter', { track: query }, function(stream) {
      stream.on('data', function(tweet) {
        socket.emit('tweet', tweet);
      });

      stream.on('error', function(error) {
        throw error;
      });
    });
  });

});

var port = process.env.PORT || 3000;

server.listen(port);
console.log('BrandTalk API listening on port %s', port);
