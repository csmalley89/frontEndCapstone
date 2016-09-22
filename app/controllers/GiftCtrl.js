"use strict";
app.factory("GiftModal", function(btfModal, AuthFactory, $q){

  // let getUser = function() {
  //   return $q(function(resolve, reject){
  //     firebase.auth().onAuthStateChanged(function(user) {
  //       if (user) {
  //         resolve(user.uid);
  //       }
  //     });
  //   });
  // };
  //   console.log();

  return btfModal({
    controller: "GiftModalCtrl",
    controllerAs: "modal",
    templateUrl: "partials/giftModal.html",
    // getUser
  });
});

// Working Version
app.controller("GiftModalCtrl", function($scope, GiftModal, ItemToRegister, $routeParams, $location, ItemFactory, AuthFactory){


  $scope.closeModal = GiftModal.deactivate;

  $scope.itemToRegister = ItemToRegister.getItem();

  $scope.giftToSite = function(){
    ItemFactory.postNewItem($scope.itemToRegister).then(function(user) {
      $scope.closeModal();
      // .then(function() {
      //   let path = `{$routeParams.userId}/couple/welcome`;
      //   $location.url(path);
      // });
    });

  };


});

// Test Version
// app.controller("GiftModalCtrl", function($scope, GiftModal, ItemToRegister, $routeParams, $location, ItemFactory, AuthFactory){


//   $scope.closeModal = GiftModal.deactivate;

//   $scope.itemToRegister = ItemToRegister.getItem();

//   $scope.giftToSite = function(){
//     let newGift = {};
//     newGift.image = $scope.image;
//     newGift.comments = $scope.comments;
//     newGift.link = $scope.link;
//     newGift.price = $scope.price;
//     newGift.title = $scope.title;
//     newGift.coupleId = $routeParams.coupleId;




//     ItemFactory.postNewItem(newGift).then(function() {
//       $scope.closeModal();
//       // .then(function() {
//       //   let path = `{$routeParams.userId}/couple/welcome`;
//       //   $location.url(path);
//       // });
//     });

//   };


// });
