"use strict";

app.factory("ItemFactory", ($q, $http, FirebaseURL) => {
  let items = []

  let getItemList = (user) => {
    console.log(user);
    console.log(items);
    console.log(`${FirebaseURL}/items.json?orderBy="uid"&equalTo="${user}"`)
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

  // let getItemList = (user) => {
  //   let items = [];
  //   return $q((resolve, reject) => {
  //     $http.get(`${FirebaseURL}/items.json?orderBy="uid"&equalTo="${user}"`)
  //     .success((itemObject) => {
  //       console.log("getItemList")
  //       if (itemObject !== null) {
  //       Object.keys(itemObject).forEach((key) => {
  //         itemObject[key].id = key;
  //         items.push(itemObject[key]);
  //       });
  //       resolve(items);
  //     } else {
  //       resolve(items);
  //     }
  //     })
  //     .error((error) => {
  //       reject(error);
  //     });
  //   });
  // };
  // let getItemList = function (itemObj){
  //   return $q(function(resolve, reject){
  //     console.log('user id', itemObj);
  //     $http.get(`${FirebaseURL}/items.json?orderBy="uid"&equalTo="${itemObj}"`).
  //     success(function(itemRegistry){
  //       if(itemRegistry !== null){
  //         items = [];
  //       Object.keys(itemRegistry).forEach(function(key){
  //         itemRegistry[key].itemid=key;
  //         items.push(itemRegistry[key]);
  //       });
  //     }
  //       resolve(items);
  //     }).error(function(error){
  //       reject(error);
  //     });
  //   });
  // };
  // let getItemList = function(user) {
  //   let items = [];
  //   return $q(function(resolve, reject) {
  //     console.log('baord id', user[0]);
  //     $http.get(`${FirebaseURL}/items.json?orderBy="uid"&equalTo="${user}"`)
  //     .success(function(snapShot) {
  //       if(snapShot !== null) {
  //         Object.keys(snapShot).forEach(function(key) {
  //           snapShot[key].item = key;
  //           items.push(snapShot[key]);
  //         });
  //       }
  //       resolve(items);
  //     })
  //     .error(function(error) {
  //       reject(error);
  //     });
  //   });
  // };
    // Used to update pin indices when using drag and drop

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

  let updateAllItems = (items) => {
    if (!items) { return; }
    // Update the index of all items on the board
    return $q.all(
      items.map((item) => {
        return updateItem(item, item.id);
      })
    );
  };
  let deleteItem = (itemId) => {
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseURL}/items/${itemId}.json`)
      .success((objFromFirebase) => {
        resolve(objFromFirebase);
      });
    });
  };


  return{getItemList, postNewItem, deleteItem, updateItem, updateAllItems, getSingleItem};
});
