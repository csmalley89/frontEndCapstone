"use strict";

app.factory("CoupleDB", ($q, $http, FirebaseURL) => {

  let getCoupleList = (user) => {
    let users = [];
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}/users.json?orderBy="uid"&equalTo="${user}"`)
      .success((coupleObject) => {
        if (coupleObject !== null) {
        Object.keys(coupleObject).forEach((key) => {
          coupleObject[key].id = key;
          users.push(coupleObject[key]);
        });
        resolve(users);
      } else {
        resolve(users);
      }
      })
      .error((error) => {
        reject(error);
      });
    });
  };

  let getSingleCouple = (coupleId) => {
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}/users/${coupleId}.json`)
      .success((coupleObject) =>{
        resolve(coupleObject);
      })
      .error((error) => {
        reject(error);
      });
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

  let updateCouple = (coupleId, editedCouple) => {
    return $q((resolve, reject) => {
      $http.patch(`${FirebaseURL}/users/${coupleId}.json`, JSON.stringify(editedCouple))
      .success((objFromFirebase) =>{
        resolve(objFromFirebase);
      })
      .error((error)=>{
        reject(error);
      });
    });
  };

  let deleteCouple = (coupleId) => {
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseURL}/users/${coupleId}.json`)
      .success((objFromFirebase) => {
        resolve(objFromFirebase);
      });
    });
  };


  return{getCoupleList, registerNewCouple, deleteCouple, getSingleCouple, updateCouple};
});
