//mvCourseNote
angular.module('app').factory('mvCourseNote', function($resource) {
  var CourseNoteResource = $resource('/api/courses/:id', {_id: "@id"}, {
    update: {method:'PUT',isArray:false}
  });


  return CourseNoteResource;
});
