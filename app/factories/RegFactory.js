"use strict";

app.factory("RegFactory", ($q, $http, FirebaseURL) => {
  let couples = [];

// couple functions
  let getSingleCouple = (couple) => {
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}/couples.json?orderBy="uid"&equalTo="${couple}"`)
      .success((coupleObject) => {
        if (coupleObject !== null) {
        Object.keys(coupleObject).forEach((key) => {
          coupleObject[key].id = key;
          couples.push(coupleObject[key]);
        });
        resolve(couples);
      } else {
        resolve(couples);
      }
      })
      .error((error) => {
        reject(error);
      });
    });
  };

  let getCoupleList = (couple) => {
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}/couples.json`)
      .success((coupleObject) => {
        if (coupleObject !== null) {
        Object.keys(coupleObject).forEach((key) => {
          coupleObject[key].id = key;
          couples.push(coupleObject[key]);
        });
        resolve(couples);
      } else {
        resolve(couples);
      }
      })
      .error((error) => {
        reject(error);
      });
    });
  };


  // let loadUserRegistry = function (giftObj){
  //   return $q(function(resolve, reject){
  //     console.log('user id', giftObj);
  //     $http.get(`${FirebaseURL}/couples.json?orderBy="uid"&equalTo="${giftObj}"`).
  //     success(function(giftRegistry){
  //       if(giftRegistry !== null){
  //         gifts = [];
  //       Object.keys(giftRegistry).forEach(function(key){
  //         giftRegistry[key].giftid=key;
  //         gifts.push(giftRegistry[key]);
  //       });
  //     }
  //       resolve(gifts);
  //     }).error(function(error){
  //       reject(error);
  //     });
  //   });
  // };

  // let postNewGift = function(giftObj){
  //   return $q(function(resolve, reject){
  //     $http.post(`${FirebaseURL}/gifts/${giftObj.uid}.json`,
  //     giftObj).success(function(){
  //       resolve();
  //     }).error(function(error){
  //       reject(error);
  //     });
  //   });
  // };
  // let deleteItem = (giftObj) => {
  //   return $q((resolve, reject) => {
  //     $http.delete(`${FirebaseURL}/gifts/${giftObj.uid}.json`)
  //     .success((objFromFirebase) => {
  //       resolve(objFromFirebase);
  //     });
  //   });
  // };
  let registerNewCouple = (newCouple) => {
    return $q( (resolve, reject) => {
      $http.post(`${FirebaseURL}/couples.json`, JSON.stringify(newCouple))
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
      $http.patch(`${FirebaseURL}/couples/${coupleId}.json`, JSON.stringify(editedCouple))
      .success((objFromFirebase) =>{
        resolve(objFromFirebase);
      })
      .error((error)=>{
        reject(error);
      });
    });
  };



// guest functions
  let getGuestList = (guest) => {
    let guests = [];
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}/guests.json?orderBy="uid"&equalTo="${guest}"`)
      .success((guestObject) => {
        if (guestObject !== null) {
        Object.keys(guestObject).forEach((key) => {
          guestObject[key].id = key;
          guests.push(guestObject[key]);
        });
        resolve(guests);
      } else {
        resolve(guests);
      }
      })
      .error((error) => {
        reject(error);
      });
    });
  };

  let getSingleGuest = (guestId) => {
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}/guests/${guestId}.json`)
      .success((guestObject) =>{
        resolve(guestObject);
      })
      .error((error) => {
        reject(error);
      });
    });
  };

  let registerNewGuest = (newGuest) => {
    return $q( (resolve, reject) => {
      $http.post(`${FirebaseURL}/guests.json`, JSON.stringify(newGuest))
        .success((objFromFirebase) => {
          resolve(objFromFirebase);
        })
      .error((error)=>{
        reject(error);
      });
    });
  };

  let updateGuest = (guestId, editedGuest) => {
    return $q((resolve, reject) => {
      $http.patch(`${FirebaseURL}/guests/${guestId}.json`, JSON.stringify(editedGuest))
      .success((objFromFirebase) =>{
        resolve(objFromFirebase);
      })
      .error((error)=>{
        reject(error);
      });
    });
  };

  let deleteGuest = (guestId) => {
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseURL}/guests/${guestId}.json`)
      .success((objFromFirebase) => {
        resolve(objFromFirebase);
      });
    });
  };
  return{getCoupleList, registerNewCouple, getSingleCouple, updateCouple, getGuestList, registerNewGuest, getSingleGuest, updateGuest, deleteGuest};
});
