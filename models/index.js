var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/myAPI-app" );
mongoose.Promise = global.Promise;

module.exports.Project = require("./project.js")
