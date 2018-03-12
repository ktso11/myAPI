var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require("./models")

// Configure app
app.set('views', __dirname + 'views');      // Views directory
app.use(express.static('public'));          // Static directory
app.use(bodyParser.urlencoded({ extended: true })); // req.body

// Set CORS Headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html')
});

app.listen(4000, function(){
  console.log("Server running on port 4000")
})