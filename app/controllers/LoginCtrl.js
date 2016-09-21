"use strict";

app.controller("LoginCtrl", function($scope, $window, RegFactory, AuthFactory){
  $scope.couple = {
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
  $scope.guest = {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: ""
  };
  $scope.account = {
    email: "",
    password: ""
  };

  $scope.coupleRegister = () => {
    console.log("you clicked register");
    AuthFactory.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    })
    .then((coupleData) => {
      $scope.couple.uid = coupleData.uid;
      RegFactory.registerNewCouple($scope.couple);
      console.log("newCouple", coupleData);
      if (coupleData) {
        $window.location.href = "#/couple/welcome";
      } else {
        $window.location.href = "#/launch";
      }
    }, (error) => {
      console.log(`Error creating user: ${error}`);
    });
  };
  $scope.guestRegister = () => {
    console.log("you clicked register");
    AuthFactory.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    })
    .then((guestData) => {
      $scope.guest.uid = guestData.uid;
      RegFactory.registerNewGuest($scope.guest);
      console.log("newGuest", guestData);
      if (guestData) {
        $window.location.href = "#/guest/welcome";
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



