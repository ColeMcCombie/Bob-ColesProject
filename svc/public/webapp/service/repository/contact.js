"use strict";

(function () {
    angular.module("app").service("contactRepository", ["$q", "contactDal", ContactRepo]);
    
    function ContactRepo($q, contactDal) {
        var ContactCache = [];
        this.getContact = function(id) {
            var deferred = $q.defer();
            contactDal.getContact(id).then(function(results) {
                contactCache = results;
                deferred.resolve(results);
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };
    }
}());