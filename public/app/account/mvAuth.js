//mvAuth
angular.module('app').factory('mvAuth', function($http, mvIdentity, $q, mvUser) {
  return {
      //authenticatedUser
    authenticateUser: function(username, password) {
        //promise
      var dfd = $q.defer();
     $http.post('/login', {
         username:username,
         password:password
     })
         .then(function(response) {
        if(response.data.success) {
          var user = new mvUser();
          angular.extend(user, response.data.user);
          mvIdentity.currentUser = user;
          dfd.resolve(true);
        } else {
          dfd.resolve(false);
        }
      });
      return dfd.promise;
    },
        //createUser
    createUser: function(newUserData) {
      var newUser = new mvUser(newUserData);
      var dfd = $q.defer();

      newUser.$save().then(function() {
        mvIdentity.currentUser = newUser;
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });

      return dfd.promise;
    },
        //updateUser
    updateCurrentUser: function(newUserData) {
      var dfd = $q.defer();

      var clone = angular.copy(mvIdentity.currentUser);
      angular.extend(clone, newUserData);
      clone.$update().then(function() {
        mvIdentity.currentUser = clone;
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },
        //logout user
    logoutUser: function() {
      var dfd = $q.defer();
      $http.post('/logout', {logout:true}).then(function() {
        mvIdentity.currentUser = undefined;
        dfd.resolve();
      });
      return dfd.promise;
    },
      //authorize Current user for route
    authorizeCurrentUserForRoute: function(role) {
        //check role of user
      if(mvIdentity.isAuthorized(role)) {
        return true;
      } else {
        return $q.reject('User is not authorized');
      }

    },
      //authorize authenticate
    authorizeAuthenticatedUserForRoute: function() {
      if(mvIdentity.isAuthenticated()) {
        return true;
      } else {
        return $q.reject('User is not authorized');
      }
    },
      //save course note

      //createCourseNote
    createCourseNote: function(newCourseNoteData) {
      var newCourseNote = new mvCourseNote(newCourseNoteData);
      var dfd = $q.defer();

      newCourseNote.$save().then(function() {
        mvIdentity.currentCourseNote = newCourseNote;
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });

      return dfd.promise;
    },
        //updateCourseNote
    updateCurrentCourseNote: function(newCourseNoteData) {
      var dfd = $q.defer();

      var clone = angular.copy(mvIdentity.currentCourseNote);
      angular.extend(clone, newCourseNoteData);
      clone.$update().then(function() {
        mvIdentity.currentCourseNote = clone;
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },
  }
});
