var server = require('http').createServer(),
    io = require('socket.io')(server);

var Twitter = require('twitter'),
    client = new Twitter(require('./env/credentials.js').twitter),
    tweetParser = require('./util/tweetParser.js');

io.on('connection', function(socket){

  var currentStream;

  socket.on('search', function(query){

    if(currentStream){
      currentStream.destroy();
    }

    client.stream('statuses/filter', { track: query }, function(stream) {

      currentStream = stream;

      stream.on('data', function(tweet) {
        tweet.isSad = tweetParser.isSad(tweet);
        socket.emit('tweet', tweet);
      });

      stream.on('error', function(error) {
        console.log(error);
      });

    });

  });

});

var port = process.env.PORT || 3000;

server.listen(port);
console.log('BrandTalk API listening on port %s', port);
