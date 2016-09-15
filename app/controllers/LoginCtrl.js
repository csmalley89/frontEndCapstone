"use strict";

app.controller("LoginCtrl", function($scope, $window, AuthFactory){
  $scope.account = {
    email: "",
    password: "",
    firstName1: "",
    lastName1: "",
    firstName2: "",
    lastName2: "",
    coupleStreet: "",
    coupleCity: "",
    coupleState: "",
    coupleZip: ""



  };
  $scope.register = () => {
    console.log("you clicked register");
    AuthFactory.createUser({
      email: $scope.account.email,
      password: $scope.account.password,
      firstName1: $scope.account.firstName1,
      lastName1: $scope.account.lastName1,
      firstName2: $scope.account.firstName2,
      lastName2: $scope.account.lastName2,
      coupleStreet: $scope.account.coupleStreet,
      coupleCity: $scope.account.coupleCity,
      coupleState: $scope.account.coupleState,
      coupleZip: $scope.account.coupleZip

    })
    .then((userData) => {
      console.log("newUser", userData);
      $scope.login();
    }, (error) => {
      console.log(`Error creating user: ${error}`);
    });
  };
  $scope.login = () => {
    console.log("you clicked login");
    AuthFactory.loginUser($scope.account)
    .then( (data) => {
      if (data) {
        $window.location.href = "#/launch";
      } else {
        $window.location.href = "#/launch";
      }
      console.log("data from login", data);
    }, (error) => {
      console.log("Error loggin in man", error);
    });
  };
});
