//mvUserListctrl for admin
angular.module('app').controller('mvUserListCtrl', function($scope, mvUser) {
    //list ...
  $scope.users = mvUser.query();
});
