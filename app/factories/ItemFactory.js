"use strict";

app.factory("ItemFactory", ($q, $http, FirebaseURL) => {
  let items = [];

  let getItemList = (user) => {
    console.log(user);
    console.log(items);
    console.log(`${FirebaseURL}/items.json?orderBy="uid"&equalTo="${user}"`);
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}/items.json?orderBy="uid"&equalTo="${user}"`)
      .success((itemObject) => {
        if (itemObject !== null) {
        Object.keys(itemObject).forEach((key) => {
          itemObject[key].id = key;
          items.push(itemObject[key]);
        });
        resolve(items);
      } else {
        resolve(items);
      }
      })
      .error((error) => {
        reject(error);
      });
    });
  };


  let getSingleItem = (itemId) => {
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}/items/${itemId}.json`)
      .success((itemObject) =>{
        resolve(itemObject);
      })
      .error((error) => {
        reject(error);
      });
    });
  };


  let postNewItem = function(newItem){
    return $q(function(resolve, reject){
      $http.post(`${FirebaseURL}/items.json`,
      newItem).success(function(objFromFirebase){
        console.log("new item", newItem);
        resolve(objFromFirebase);
      }).error(function(error){
        reject(error);
      });
    });
  };

  let updateItem = (itemId, editedItem) => {
    return $q((resolve, reject) => {
      $http.patch(`${FirebaseURL}/items/${itemId}.json`, JSON.stringify(editedItem))
      .success((objFromFirebase) =>{
        resolve(objFromFirebase);
      })
      .error((error)=>{
        reject(error);
      });
    });
  };

  let deleteItem = (itemId) => {
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseURL}/items/${itemId}.json`)
      .success((objFromFirebase) => {
        resolve(objFromFirebase);
      });
    });
  };


  return{getItemList, postNewItem, deleteItem, getSingleItem, updateItem};
});
