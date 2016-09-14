"use strict";

app.controller("CoupleRegCtrl", function($scope, $window){
  $scope.signUp = () => {
    $window.location.url = "#/couple-registration";

    // $('.datepicker').pickadate({
    //   selectMonths: true, // Creates a dropdown to control month
    //   selectYears: 15 // Creates a dropdown of 15 years to control year
    // });
  };


});
