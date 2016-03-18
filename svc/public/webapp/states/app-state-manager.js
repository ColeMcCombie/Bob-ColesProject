"use strict";

(function () {

    angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("login");

        $stateProvider.state("login", {
            url: "/login",
            views: {
                "content": {
                    templateUrl: "feature/login/login-index.html"
                }
            }
        })
    });
}());




(function () {

    angular.module('app').config(function ($stateProvider) {
        $stateProvider.state("navigation", {
            abstract: true,
            views: {
                "content": {
                    templateUrl: "feature/navigation/navigation-index.html"
                }
            }
        }).state("navigation.home", {
                        url: "/home",
                        views: {
                            "home-content": {
                                templateUrl: "feature/home/home-index.html"
                            }
                        }
        }).state("navigation.contact", {
                        url: "/contact",
                        views: {
                            "home-content": {
                                templateUrl: "feature/contact/contact-index.html"
                            }
                        }
                })   
        });
}());