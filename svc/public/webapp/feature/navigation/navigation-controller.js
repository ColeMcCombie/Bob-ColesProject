"use strict";

(function () {
    angular.module("app")
        .controller("navigationController",
        ["$state", "$log", NavigationCtrl]);

    function HomeCtrl($state, $log) {
        var vm = this;
        $log.debug("Instantiated navigationController controller");

        vm.isAtHomepage = function () {
            return $state.is("home.homepage");
        };
        
        vm.isAtContact = function () {
            return $state.is("home.contact");
        };
        
        vm.navigateToHomepage = function () {
            $state.go("home.homepage");
        };
        
        vm.navigateToContact = function () {
            $state.go("home.contact");
        };
    }
}());