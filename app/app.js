
"use strict";


var app = angular.module("wedReg", ["ngRoute", "ui.materialize"])
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
      controller: 'LoginCtrl'
      // resolve: {isAuth}
    }).
    when('/launch', {
      templateUrl:'partials/launch.html',
      controller: 'LoginCtrl'
      // resolve: {isAuth}
    }).
    when('/couple-registration', {
      templateUrl: 'partials/couple-reg.html',
      controller: 'CoupleRegCtrl',
    }).
    // when('/login', {
    //   templateUrl: 'partials/login.html',
    //   controller: 'LoginCtrl',
    //   // resolve: {isAuth}
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
