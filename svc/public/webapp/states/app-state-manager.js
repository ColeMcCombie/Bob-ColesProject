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




(function () {

    angular.module('app').config(function ($stateProvider) {
        $stateProvider.state("contact", {
                    abstract: true,
                    views: {
                        "content": {
                            templateUrl: "feature/contact/contact-index.html"
                        }
                    }
                })
     });
}());