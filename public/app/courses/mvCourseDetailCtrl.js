angular.module('app').controller('mvCourseDetailCtrl', function($scope, mvCachedCourses, $routeParams,mvNotifier,mvIdentity,mvCourseNote) {

  mvCachedCourses.query().$promise.then(function(collection) {
    collection.forEach(function(course) {
      if(course._id === $routeParams.id) {
        $scope.course = course;

      }
    })
  });

 $scope.note = mvIdentity.currentCourseNote.note;

//save edit note



    mvAuth.updateCurrentCourseNote(newCourseNoteData).then(function() {
      mvNotifier.notify('Your course note has been saved!');
    }, function(reason) {
      mvNotifier.error(reason);
    });
});

