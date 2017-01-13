//mvNavBarLoginCtrl
angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location) {
  $scope.identity = mvIdentity;
    //sign in
  $scope.signin = function(username, password) {
      //authenticate
    mvAuth.authenticateUser(username, password)
    .then(function(success) {
      if(success) {
        mvNotifier.notify('You have successfully signed in!');
      } else {
        mvNotifier.notify('User is incorrect');
      }
    });
  }
    //sign out
  $scope.signout = function() {
      //1.log out user
    mvAuth.logoutUser()
    .then(function() {
        //reset input
      $scope.username = "";
      $scope.password = "";
      mvNotifier.notify('You have successfully signed out!');
        //navigate to the main route
      $location.path('/');
    })
  }
});
