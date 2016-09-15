"use strict";

app.controller("LoginCtrl", function($scope, $window, CoupleDB, AuthFactory){
  $scope.newCouple = {
    firstName1: "",
    lastName1: "",
    firstName2: "",
    lastName2: "",
    WeddingDate:"",
    location: "",
    coupleStreet: "",
    coupleCity: "",
    coupleState: "",
    coupleZip: ""
  };

  $scope.account = {
    email: "",
    password: ""
  };

  $scope.register = () => {
    console.log("you clicked register");
    AuthFactory.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    })
    .then((userData) => {
      $scope.newCouple.uid = userData.uid;
      CoupleDB.registerNewCouple($scope.newCouple);
      console.log("newUser", userData);
      if (userData) {
        $window.location.href = "#/couple/welcome";
      } else {
        $window.location.href = "#/launch";
      }
    }, (error) => {
      console.log(`Error creating user: ${error}`);
    });
  };
  $scope.login = () => {
    console.log("you clicked login");
    AuthFactory.loginUser($scope.account)
    .then( (data) => {
      if (data) {
        $window.location.href = "#/couple/welcome";
      } else {
        $window.location.href = "#/launch";
      }
      console.log("data from login", data);
    }, (error) => {
      console.log("Error loggin in man", error);
    });
  };
});
