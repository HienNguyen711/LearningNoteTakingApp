angular.module('app').controller('mvMainCtrl', function($scope, mvCachedCourses) {
  $scope.courses = mvCachedCourses.query();

    $scope.appName = "Learnin'NoteTakin'App";
});
