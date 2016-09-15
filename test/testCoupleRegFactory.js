"use strict";

app.factory("CoupleDB", ($q, $http, FirebaseURL) => {

  let createUser = function(userObj) {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
      .catch(function(error){
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };

  let registerNewCouple = (newCouple) => {
    return $q( (resolve, reject) => {
      $http.post(`${FirebaseURL}/users.json`, JSON.stringify(newCouple))
        .success((objFromFirebase) => {
          resolve(objFromFirebase);
        })
      .error((error)=>{
        reject(error);
      });
    });
  };
  let logoutUser = function(){
    return firebase.auth().signOut();
  };
  let isAuthenticated = function(){
    return (firebase.auth().currentUser) ? true : false;
  };



  return{createUser, registerNewCouple, logoutUser, isAuthenticated};
});
