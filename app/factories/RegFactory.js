"use strict";

app.factory("RegFactory", ($q, $http, FirebaseURL) => {
// couple functions
  let getSingleCouple = (couple) => {
    let couples = [];
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
    let couples = [];
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

  // let getSingleCouple = (coupleId) => {
  //   return $q((resolve, reject) => {
  //     $http.get(`${FirebaseURL}/couples/${coupleId}.json`)
  //     .success((coupleObject) =>{
  //       resolve(coupleObject);
  //     })
  //     .error((error) => {
  //       reject(error);
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

  let deleteCouple = (coupleId) => {
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseURL}/couples/${coupleId}.json`)
      .success((objFromFirebase) => {
        resolve(objFromFirebase);
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
  return{getCoupleList, registerNewCouple, getSingleCouple, updateCouple, deleteCouple, getGuestList, registerNewGuest, getSingleGuest, updateGuest, deleteGuest};
});
