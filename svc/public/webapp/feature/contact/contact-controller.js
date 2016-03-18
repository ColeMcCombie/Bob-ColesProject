"use strict";

(function () {
    angular.module("app")
    .controller("contactController",
               ["$log", ContactCtrl]);
    
    function ContactCtrl ($log) {
        var vm = this;
        $log.debug("Instantiated contactController controller");
    }
});