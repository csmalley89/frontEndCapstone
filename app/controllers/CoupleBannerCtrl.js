"use strict";

app.controller("CoupleBannerCtrl", function($scope, $routeParams, RegFactory, SearchService) {
    $scope.$watch(function () { return SearchService.getSearchText(); }, function (newValue, oldValue) {
     if (newValue !== null) {
         $scope.searchText= SearchService.getSearchText();
     }
  }, true);
  // Assures user only see their registered info
  // $scope.$parent.getUser()
  // .then ( (user) => {
  //   $scope.userId = user;
    RegFactory.getSingleCouple($routeParams.registryId)
    // .then((couplesCollectionArr) => {
  //     $scope.couples = couplesCollectionArr[0];
  //   });
  // })
  // .catch(() => console.error);


});
