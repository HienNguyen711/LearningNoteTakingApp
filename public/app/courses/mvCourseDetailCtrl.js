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
    $scope.editNote = function(){
        var newCourseNote = {
      note: $scope.note
        }



    mvAuth.updateCurrentCourseNote(newCourseNoteData).then(function() {
      mvNotifier.notify('Your course note has been saved!');
    }, function(reason) {
      mvNotifier.error(reason);
    })
    };



    //ace editor
  /*  $scope.aceOption = {

        onLoad: function (editor) {
          // defaults
          editor.setTheme("ace/theme/monokai");
           // options
           editor.setOptions({
            showGutter: true,
            showPrintMargin: false,
           });


        }
      };

      //Runs every time the value of the editor is changed
        $scope.aceChanged = function(_editor){
          console.log('Ace editor changed');
          // Get Current Value
          var currentValue = _editor.getSession().getValue();
          // Set value
          _editor.getSession().setValue('This text is now in the editor');
        };
});
