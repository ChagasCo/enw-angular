(function() {
  "use strict";

  angular.module("angularApp")
    .factory("emailSvc", ["$http", "$q", function($http, $q) {

      function sendEmail(message, fromAddress) {
        var deferred = $q.defer();
        $http.post("http://essentialnordicwalking.com.au/php/email.php", {
          message: message,
          fromAddress: fromAddress
        }).then(function(result) {
          console.log(result);
          if (result.data.success) {
              deferred.resolve({
                message: result.data.message
              });
          } else {
            deferred.reject("Email failed.");
          }
        }, function(error) {
          deferred.reject(error);
        });

        return deferred.promise;
      }

      return {
        sendEmail: sendEmail
      };
    }]);
})();
