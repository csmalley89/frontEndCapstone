
"use strict";


var app = angular.module("wedReg", ["ngRoute", "ui.materialize", "countdownTimer", "btford.modal"])
.constant("FirebaseURL", "https://wedreg-96a4d.firebaseio.com");

let isAuth = (AuthFactory) => new Promise((resolve, reject) =>{
  if(AuthFactory.isAuthenticated()) {
    resolve();
  } else {
    reject();
  }
});


app.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl:'partials/launch.html',
      controller: 'LoginCtrl',
    }).
    when('/launch', {
      templateUrl:'partials/launch.html',
      controller: 'LoginCtrl',
    }).
    when('/couple/welcome', {
      templateUrl: 'partials/couple-home.html',
      controller: 'AmazonCtrl',
      resolve: {isAuth}
    }).
    when('/guest/welcome', {
      templateUrl: 'partials/guest-home.html',
      controller: 'GuestViewAllCouplesCtrl',
      resolve: {isAuth}
    }).
    when('/couple/:coupleId/gifts', {
      templateUrl: "partials/couple-home.html",
      controller: "AmazonCtrl"
    }).
    // when('/amazontest', {
    //   templateUrl: "partials/amazontest.html",
    //   controller: "AmazonCtrl"
    // }).


    // when('/items/view/:itemId', {
    //   templateUrl: 'partials/item-details.html',
    //   controller: 'ItemViewCtrl',
    //   resolve: {isAuth}

    // }).
    // when('/items/view/:itemId/edit', {
    //   templateUrl: 'partials/item-form.html',
    //   controller: 'ItemEditCtrl',
    //   resolve: {isAuth}

    // }).
    otherwise('/launch');
});


app.run(($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.AuthDomain
  };
  firebase.initializeApp(authConfig);
});
