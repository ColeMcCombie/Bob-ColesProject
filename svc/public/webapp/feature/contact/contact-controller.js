"use strict"
(function () {
    angular.module("app")
    .controller("contactController",
               ["$log", DashboardCtrl]);
    
    function ContactCtrl ($log) {
        var vm = this;
        $log.debug("Instantiated contactController controller");
    }
})