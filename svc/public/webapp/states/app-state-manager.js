"use strict";

(function () {

    angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("homepage");

        $stateProvider.state("homepage", {
            url: "/homepage",
            views: {
                "content": {
                    templateUrl: "feature/home/home-index.html"
                }
            }
        })
    });
}());


/*

(function () {

    angular.module('app').config(function ($stateProvider) {
        $stateProvider.state("home", {
                    abstract: true,
                    views: {
                        "content": {
                            templateUrl: "feature/home/home-index.html"
                        }
                    }
                })
     });
}());
*/

