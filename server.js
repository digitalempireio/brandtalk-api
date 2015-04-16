var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/search', require('./routes/search'));

var port = process.env.PORT || 3000;

app.listen(port);
console.log('BrandTalk API listening on port %s', port);
