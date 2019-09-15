var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', function (req, res) {
    console.log(req.query.test + ' Submitted Successfully!');
    res.send(req.query.test + ' Submitted Successfully!');
});

var server = app.listen(8080, function () {
    console.log('Node server is running..');
});