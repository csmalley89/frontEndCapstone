"use strict";

app.controller("CoupleRegCtrl", function($scope, CoupleDB, $window, CoupleRegFactory){
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
    coupleZip: "",
    uid: $scope.$parent.getUser()
  };

  $scope.account = {
    email: "",
    password: ""
  };

  $scope.register = () => {
    console.log("you clicked register");
    CoupleRegFactory.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    })
    .then((userData) => {
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
});
