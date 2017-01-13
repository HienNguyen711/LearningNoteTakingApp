//sign up ctrl
angular.module('app').controller('mvSignupCtrl', function($scope, mvUser, mvNotifier, $location, mvAuth) {
        //sign up
  $scope.signup = function() {
    var newUserData = {
      username: $scope.email,
      password: $scope.password,
      firstName: $scope.fname,
      lastName: $scope.lname
    };
        //createUser
    mvAuth.createUser(newUserData)
        .then(function() {
      mvNotifier.notify('User account has been created!');
        //navigate to the main route
      $location.path('/');

    }, function(reason) {
      mvNotifier.error(reason);
    })
  }
})
