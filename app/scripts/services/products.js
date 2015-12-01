(function() {
  "use strict";

  angular.module("angularApp").factory("productsSvc", ["$q", "$http", function($q, $http){
    return {
      getProducts: function() {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: 'http://essentialnordicwalking.com.au/php/products.php'
        }).then(function successCallback(response) {
          if (response) {
            deferred.resolve(response.data);
          }
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          deferred.reject("No products found");
        });

        return deferred.promise;
      }
    }
  }]);
})();
