"use strict";

(function () {
    angular.module("app")
        .controller("homeController",
        ["$state", "$log", HomeCtrl]);

    function HomeCtrl($state, $log) {
        var vm = this;
        $log.debug("Instantiated homeController controller");

        vm.isAtHomepage = function () {
            return $state.is("home.homepage");
        };

        vm.navigateToHomepage = function () {
            $state.go("home.homepage");
        };
    }
}());