"use strict";

(function () {
    angular.module("app")
        .controller("navigationController",
        ["$state", "$log", NavigationCtrl]);

    function NavigationCtrl($state, $log) {
        var vm = this;
        $log.debug("Instantiated navigationController controller");

        vm.isAtHome = function () {
            return $state.is("navigation.home");
        };
        
        vm.isAtContact = function () {
            return $state.is("navigation.contact");
        };
        
        vm.navigateToHome = function () {
            $state.go("navigation.home");
        };
        
        vm.navigateToContact = function () {
            $state.go("navigation.contact");
        };
    }
}());