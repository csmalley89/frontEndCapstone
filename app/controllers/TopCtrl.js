"use strict";

app.controller("TopCtrl", function($scope, $q, $location, $window, AuthFactory){
  $scope.isLoggedIn = false;
  let currentUser = null;


firebase.auth().onAuthStateChanged(function(user){
    if (user) {
      currentUser = user.uid;
      $scope.isLoggedIn = true;
      console.log("Current User loggin in?", user.uid);
      $scope.$apply();
    } else {
      currentUser = null;
      $scope.isLoggedIn = false;
      $window.location.href = "#/launch";
    }
    $scope.$apply();
  });

  $scope.getUser = function() {
    return $q(function(resolve, reject){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
         let userId = user.uid;
        console.log("user in get user", user.uid);
        console.log("userId", userId);
          resolve(userId);
        }
      });
    });
  };
  $scope.getUser2 = function() {
    return currentUser;
  };

  $scope.logout = function() {
    AuthFactory.logoutUser()
    .then(function(data){
      console.log("logged out", data);
    });
  };

});
