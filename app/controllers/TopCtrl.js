"use strict";

app.controller("TopCtrl", function($scope, $location, $window, AuthFactory){
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
    console.log("getUser", currentUser);
    return currentUser;
  };

  $scope.logout = function() {
    AuthFactory.logoutUser()
    .then(function(data){
      console.log("logged out", data);
    });
  };

});
