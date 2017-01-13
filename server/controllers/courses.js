var Course = require('mongoose').model('Course');
//getCourse from database
exports.getCourses = function(req, res) {
  Course.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};
//getCourseById from database
exports.getCourseById = function(req, res) {
  Course.findOne({_id:req.params.id}).exec(function(err, course) {
    res.send(course);
  })
}
