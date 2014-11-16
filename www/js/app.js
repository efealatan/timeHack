// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.business', {
      url: "/business",
      views: {
        'menuContent' :{
          templateUrl: "templates/business.html",
          controller: 'BusinessCtrl'
        }
      }
    })

    .state('app.tech', {
      url: "/tech",
      views: {
        'menuContent' :{
          templateUrl: "templates/tech.html",
          controller: 'TechCtrl'

        }
      }
    })

    .state('app.entertainment', {
      url: "/entertainment",
      views: {
        'menuContent' :{
          templateUrl: "templates/entertainment.html",
          controller: 'EntertainmentCtrl'
        }
      }
    })

      .state('app.politics', {
        url: "/politics",
        views: {
          'menuContent' :{
            templateUrl: "templates/politics.html",
            controller: 'PoliticsCtrl'
          }
        }
      })

      .state('app.sports', {
        url: "/sports",
        views: {
          'menuContent' :{
            templateUrl: "templates/sports.html",
            controller: 'SportsCtrl'
          }
        }
      })

      .state('app.world', {
        url: "/world",
        views: {
          'menuContent' :{
            templateUrl: "templates/world.html",
            controller: 'WorldCtrl'
          }
        }
      })

      .state('app.science', {
        url: "/science",
        views: {
          'menuContent' :{
            templateUrl: "templates/science.html",
            controller: 'ScienceCtrl'
          }
        }
      })



    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/business');
});

