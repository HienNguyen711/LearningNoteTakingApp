var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String],
  note: [String]
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
  Course.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Course.create({title: 'Introduction to programming with Java', featured: true, published: new Date('10/5/2016'), tags: ['Java'], note:'Java'});
      Course.create({title: 'Orientation to software engineering', featured: true, published: new Date('10/12/2016'), tags: ['Javascript'],note:'Java'});
      Course.create({title: 'Head First Java', featured: false, published: new Date('10/1/2016'), tags: ['Java'], note:'Java'});
      Course.create({title: 'Digital services design', featured: false, published: new Date('7/12/2016'), tags: ['HTML'], note:'Java'});
      Course.create({title: 'Python for beginners', featured: true, published: new Date('1/1/2016'), tags: ['Python'], note:'Java'});
      Course.create({title: 'JavaScript for People over 20', featured: true, published: new Date('10/13/2016'), tags: ['Javascript'], note:'Java'});
      Course.create({title: 'Maintainable Code for Cowards', featured: true, published: new Date('3/1/2016'), tags: ['Coding'], note:'Java'});
      Course.create({title: 'A Survival Guide to Code Reviews', featured: true, published: new Date('2/1/2016'), tags: ['Coding'], note:'Java'});
      Course.create({title: 'Database and data development', featured: true, published: new Date('10/7/2016'), tags: ['Data'], note:'Java'});
      Course.create({title: 'Control version management', featured: false, published: new Date('8/1/2016'), tags: ['git'], note:'Java'});
      Course.create({title: 'CSS tricks', featured: false, published: new Date('11/1/2016'), tags: ['CSS'], note:'Java'});
      Course.create({title: "Angular2 for beginners", featured: true, published: new Date('10/13/2016'), tags: ['Angular2'], note:'Java'});
      Course.create({title: 'Redux and ReactJS', featured: false, published: new Date('10/1/2016'), tags: ['React'], note:'Java'});
      Course.create({title: 'Mean.js intro', featured: true, published: new Date('2/15/2016'), tags: ['MEAN'], note:'Java'});
      Course.create({title: 'Coding for geeks', featured: true, published: new Date('7/1/2016'), tags: ['Coding', 'JS'], note:'Java'});
    }
  })
}

exports.createDefaultCourses = createDefaultCourses;
