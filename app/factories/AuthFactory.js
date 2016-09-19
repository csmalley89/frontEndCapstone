"use strict";

app.factory("AuthFactory", function(){

  let createUser = function(userObj) {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
      .catch(function(error){
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };
  let loginUser = function(userObj) {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
    .catch(function(error){
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log("error", errorCode, errorMessage);
    });
  };
  let logoutUser = function(){
    return firebase.auth().signOut();
  };
  let isAuthenticated = function(){
    return (firebase.auth().currentUser) ? true : false;
  };
  return {createUser, loginUser, logoutUser, isAuthenticated};
});






    // var auth = firebase.auth();
    // var storageRef = firebase.storage().ref();

    // function handleFileSelect(evt) {
    //   evt.stopPropagation();
    //   evt.preventDefault();
    //   var file = evt.target.files[0];

    //   var metadata = {
    //     'contentType': file.type
    //   };

    //   // Push to child path.
    //   // [START oncomplete]
    //   storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
    //     console.log('Uploaded', snapshot.totalBytes, 'bytes.');
    //     console.log(snapshot.metadata);
    //     var url = snapshot.metadata.downloadURLs[0];
    //     console.log('File available at', url);
    //     // [START_EXCLUDE]
    //     document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';
    //     // [END_EXCLUDE]
    //   }).catch(function(error) {
    //     // [START onfailure]
    //     console.error('Upload failed:', error);
    //     // [END onfailure]
    //   });
    //   // [END oncomplete]
    // }

    // window.onload = function() {
    //   document.getElementById('file').addEventListener('change', handleFileSelect, false);
    //   document.getElementById('file').disabled = true;

    //   auth.onAuthStateChanged(function(user) {
    //     if (user) {
    //       console.log('Anonymous user signed-in.', user);
    //       document.getElementById('file').disabled = false;
    //     } else {
    //       console.log('There was no anonymous session. Creating a new anonymous user.');
    //       // Sign the user in anonymously since accessing Storage requires the user to be authorized.
    //       auth.signInAnonymously();
    //     }
    //   });
    // }
