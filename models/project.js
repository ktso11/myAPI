var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String,
  gitLink: String,
  techStack: String,
  description: String
});

var Project = mongoose.model('Project', ProjectSchema)
module.exports = Project;
