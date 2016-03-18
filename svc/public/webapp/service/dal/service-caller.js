"use strict";

(function () {
    angular.module("app").service("serviceCaller", ["$http", "$q", "$log", ServiceCaller]);
    
    function ServiceCaller ($http, $q, $log) {
        this.http = (function serviceCaller() {
            return {
                
                GET: function (apiPath) {
                    var deferred = $q.defer();
                    $http.get(apiPath).then(function (result) {
                        deferred.resolve(result.data); 
                    }, function (e) {
                        deferred.reject(e);
                    });
                    return deferred.promise;
                }
            }
        })();
    }
}());