var mongoose = require('mongoose'),
    userModel = require('../models/User'),
    courseModel = require('../models/Course');

module.exports = function(config) {
    //connect mongoose
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection failed!!'));
  db.once('open', function callback() {
    console.log('MongoDB connecion opened!');
  });

  userModel.createDefaultUsers();
  courseModel.createDefaultCourses();

};

