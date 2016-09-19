"use strict";

app.factory("ItemToPin", function(){

  let itemToPin = null;

  let setItem = function(item) {
    itemToPin = item;
  }

  let getItem = function() {
    return itemToPin;
  }

  return {setItem, getItem};

});
