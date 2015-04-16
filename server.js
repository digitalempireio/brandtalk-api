var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use('/search', require('./routes/search'));

var port = process.env.PORT || 3000;

app.listen(port);
console.log('BrandTalk API listening on port %s', port);
