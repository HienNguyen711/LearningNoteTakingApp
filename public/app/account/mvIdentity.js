//mvIdentity.js
angular.module('app').factory('mvIdentity', function($window, mvUser,mvCourseNote) {
  var currentUser;
  if(!!$window.bootstrappedUserObject) {
    currentUser = new mvUser();
    angular.extend(currentUser, $window.bootstrappedUserObject);
  }

    var currentCourseNote;

    currentCourseNote = new mvCourseNote();
    angular.extend(currentCourseNote);


  return {
      //current user
    currentUser: currentUser,
    currentCourseNote: currentCourseNote,
      //authenticated
    isAuthenticated: function() {
      return !!this.currentUser;
    },
      //authorized
    isAuthorized: function(role) {
      return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
    }
  }
});
