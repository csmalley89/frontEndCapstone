"use strict";
app.controller('AmazonPinsCtrl', function($scope, AmazonFactory, ItemToPin, PinModal) {

  // Bound to input to assist amazon search
  $scope.amazonSearchTerm = "";
  $scope.itemCollection = [];

  // Searches amazon and returns results in array
  $scope.searchAmazon = function() {
    AmazonFactory.getItemInfo($scope.amazonSearchTerm).then(function(itemData) {
      itemData = $.parseXML(itemData);
      let items = itemData.getElementsByTagName("Item");
      for (let item in items) {
        let currentItem = items[item];
        let formattedItem = {};
        if (typeof currentItem === "object") {
          formattedItem.image = currentItem.getElementsByTagName("LargeImage")[0].getElementsByTagName("URL")[0].innerHTML;
          formattedItem.title = currentItem.getElementsByTagName("ItemAttributes")[0].getElementsByTagName('Title')[0].innerHTML;
          formattedItem.price = currentItem.getElementsByTagName("OfferSummary")[0].getElementsByTagName('LowestNewPrice')[0].getElementsByTagName('FormattedPrice')[0].innerHTML;
          console.log("item attributes", itemData)
          $scope.itemCollection.push(formattedItem);
        }
      }
    });
  }
  // var defaultExtractions = [
  // { name: 'id', query: '$..ASIN[0]' },
  // { name: 'listPrice',
  //   query: '$..ListPrice..Price[0]',
  //   transform: transforms.formatPrice
  // },
  // { name: 'name', query: '$..Title[0]' },
  // { name: 'offerPrice',
  //   query: '$..Offer..Price[0]',
  //   transform: transforms.formatPrice
  // },
  // { name: 'lowestPrice',
  //   query: '$..LowestNewPrice[0]',
  //   transform: transforms.formatPrice
  // },
  // { name: 'url', query: '$..DetailPageURL[0]' },
  // { name: 'remaining', query: '$..TotalNew[0]' },
  // { name: 'image', query: '$..LargeImage..URL[0]' }


  // Sets item to pin
  $scope.itemSelected = function(item) {
    ItemToPin.setItem(item);
    PinModal.activate;
    console.log("Item selected to pin:", item);
  }

  // Opens modal
  $scope.openPinModal = PinModal.activate;

});
