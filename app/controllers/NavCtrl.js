// "use strict";

// app.controller("NavCtrl", function($scope, SearchTermData) {
//   $scope.searchText = SearchTermData;


//   $scope.logoutUser = () => {
//     $scope.$parent.logout();
//   };

// });


"use strict";

app.controller("NavCtrl", function($scope, SearchTermData, $location){
  $scope.searchText = SearchTermData;
  $scope.navItems = [
      {url: "#/logout", name: "Logout", showState: "$parent.isLoggedIn"},
      {url: "#/login", name: "Login", showState: "!$parent.isLoggedIn"},
      {url: "#/couple/welcome", name: "Add to Registry", showState: "$parent.isLoggedIn"},
      {url: "#/couple/registry/all", name: "View Registry", showState: "$parent.isLoggedIn"}
  ];
  $scope.isActive = (viewLocation) => viewLocation === $location.path();
});
