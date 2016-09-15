"use strict";

app.controller("CoupleRegCtrl", function($scope, CoupleDB, $location){
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

  $scope.addNewCouple = function(){
    CoupleDB.postNewCouple($scope.newCouple)
    .then(function(){
      $location.url('/couple/welcome');
    });
  };

});
