var db = require('./models');

var projectList = [
  {
    name: "About Me",
    gitLink: "http://google.com",
    techStack: "html, javascript",
    description: "about me site"
  },{
    name: "FinDining",
    gitLink: "http://google.com",
    techStack: "html, javascript",
    description: "group project"
  }
];

db.Project.remove({}, function(err, projects){
  console.log('remove all projects');
  db.Project.create(projectList, function(err, projects){
    if(err) {
      console.log(err);
      return;
    }
    console.log("created", projects.length);
  })
})
