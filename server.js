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

app.get('/profile', function showMyProfile(req, res){
  var proj = db.Project.find({}, function(err, allProjects){
    if (err) {
      console.log(err);
    } else {
    res.json({
        name: "Katie",
        gitUserName: "ktso11",
        githubProfileImage: "http://notmypicture",
        personalSiteLink: "http://ktso11.github.io",
        currentCity: "San Francisco Bay Area",
        pets: [{name: "Kasey", type: "dog", breed: "sheltie"}, {name: "Bunni", type: "dog", breed: "yorkie X"}, {name: "Georgio", type: "cat", breed: "unknown, possibly part tiger"}],
        projects: allProjects
      })
    }
  })
})

app.get('/api', function taco(req, res){
  res.json({
    documentation_url: "https://github.com/ktso11/myAPI",
    heroku_url: "https://tranquil-crag-97211.herokuapp.com/",
    endpoints: [
      {
        method: "GET",
        path: "/api",
        description: "describes all endpoints"
      },
      {
        method: "GET",
        path: "/api/profile",
        description: "some info about me"
      },
      {
        method: "GET",
        path: "/api/projects",
        description: "index of all projects"
      },
      {
        method: "POST",
        path: "/api/projects",
        description: "create a new project"
      },
      {
        method: "PUT",
        path: "/api/projects/:id",
        description: "edit existing project"
      },
      {
        method: "DELETE",
        path: "/api/projects/:id",
        description: "destroy a project"
      },
    ]
  })
});





app.listen((process.env.PORT || 4000), function(){
  console.log("Server running on port 4000")
})
