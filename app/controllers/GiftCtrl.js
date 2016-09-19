"use strict";
app.factory("PinModal", function(btfModal){
  return btfModal({
    controller: "PinModalCtrl",
    controllerAs: "modal",
    templateUrl: "partials/pinModal.html"
  });
});

app.controller("PinModalCtrl", function($scope, PinModal, ItemToPin, $routeParams, $location, RegFactory){

  $scope.closeModal = PinModal.deactivate;

  $scope.itemToPin = ItemToPin.getItem();

  $scope.itemToPin.boardid = $routeParams.boardID;

  console.log($scope.itemToPin);

  $scope.pinToBoard = function(){
    RegFactory.postNewPin($scope.itemToPin).then(function(user) {
      $scope.closeModal().then(function() {
        let path = `${$routeParams.boardID}/pins`;
        $location.url(path);
      });
    });

  };


});
