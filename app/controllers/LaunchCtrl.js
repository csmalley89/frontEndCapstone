"use strict";

app.directive('plax', function() {
  return {
    restrict: 'A',
    // responsible for registering DOM listeners as well as updating the DOM
    link: function() {
      $('.parallax').parallax();
    }
   };
});
