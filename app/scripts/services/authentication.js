(function() {
  "use strict";

  angular.module("angularApp")
    .factory("authenticationSvc", ["$http", "$q", "$window", function($http, $q, $window) {
      var userInfo;

      function getUserInfo() {
        return userInfo;
      }

      function isAuth() {
        if ($window.sessionStorage["userInfo"] !== undefined) {
          if (JSON.parse($window.sessionStorage["userInfo"]) && (JSON.parse($window.sessionStorage["userInfo"]).accessToken === getUserInfo().accessToken)) {
            return true;
          }
        }
        return false;
      }

      function init() {
        if ($window.sessionStorage["userInfo"]) {
          userInfo = JSON.parse($window.sessionStorage["userInfo"]);
        }
      }

      // Called only once
      init();

      function login(username, password) {
        var deferred = $q.defer();
        $http.post("http://essentialnordicwalking.com.au/php/login.php", {
          username: username,
          password: password
        }).then(function(result) {
          console.log(result);
          if (result.data.success) {
            if (result.data.auth) {
              userInfo = {
                accessToken: result.data.auth.access_token,
                username: result.data.auth.username
              };
              $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
              deferred.resolve(userInfo);
            } else {
              console.log("Invalid username or password");
            }
          } else {
            deferred.reject("authentication failed");
          }
        }, function(error) {
          deferred.reject(error);
        });

        return deferred.promise;
      }

      function logout() {
        $window.sessionStorage["userInfo"] = null;
        userInfo = null;

        return true;
      }

      return {
        login: login,
        getUserInfo: getUserInfo,
        isAuth: isAuth,
        logout: logout
      };
    }]);

})();
