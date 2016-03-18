"use strict";

 (function () {

     angular.module("app").controller("loginController", ["$state", "$log", LoginCtrl]);

     function LoginCtrl($state, $log) {
      $log.debug("In loginController");
         var vm = this;

         vm.login = function () {
            $state.go("navigation.home");
         };
     };
}());