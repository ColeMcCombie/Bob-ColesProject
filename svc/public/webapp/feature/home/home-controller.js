"use strict";

(function () {
    angular.module("app")
    .controller("homeController",
               ["$log", HomeCtrl]);
    
    function HomeCtrl ($log) {
        var vm = this;
        $log.debug("Instantiated homeController controller");
    }
});