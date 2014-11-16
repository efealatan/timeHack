angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $cordovaLocalNotification) {
        ////////////SETTINGS MODAL///////////////////////////
        // Create the settings modal that we will use later
        $ionicModal.fromTemplateUrl('templates/settings.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        //open the settings modal
        $scope.openSettings = function() {
            $scope.modal.show();
        };

        // Triggered in the settings modal to close it
        $scope.closeSettings = function() {
            $scope.modal.hide();
        };

        $scope.$on('onReminderAdded', function(event, id, state, json) {
            console.log('notification ADDED, id: ' + id  + ' state:' + state + ' json:' + json );
        });
})

    .controller('BusinessCtrl', function($scope, $stateParams, $http) {

        var id;

        $http.get("http://magazinr.herokuapp.com/articles/section/business").
            success(function(data) {
                id = data.articles[0].id;
                $http.get("http://magazinr.herokuapp.com/articles/" + id).
                    success(function(data) {
                        $scope.article = data.article.content;
                        $scope.title = data.article.short_title;
                    });
            });

        $scope.addNotification = function(tit, msg) {
            window.plugin.notification.local.add({
                id: 'MYLN',
                title:   tit,
                message: msg,
                icon:      'ic_notification',
                smallIcon: 'ic_notification_small',
            });

    })

    .controller('TechCtrl', function($scope, $stateParams, $http) {
        var id;

        $http.get("http://magazinr.herokuapp.com/articles/section/tech").
            success(function(data) {
                id = data.articles[0].id;
                $http.get("http://magazinr.herokuapp.com/articles/" + id).
                    success(function(data) {
                        $scope.article = data.article.content;
                        $scope.title = data.article.short_title;
                    });
            });
    })

    .controller('EntertainmentCtrl', function($scope, $stateParams, $http) {
        var id;

        $http.get("http://magazinr.herokuapp.com/articles/section/entertainment").
            success(function(data) {
                id = data.articles[0].id;
                $http.get("http://magazinr.herokuapp.com/articles/" + id).
                    success(function(data) {
                        $scope.article = data.article.content;
                        $scope.title = data.article.short_title;
                    });
            });
    })

    .controller('PoliticsCtrl', function($scope, $stateParams, $http) {
        var id;

        $http.get("http://magazinr.herokuapp.com/articles/section/politics").
            success(function(data) {
                id = data.articles[0].id;
                $http.get("http://magazinr.herokuapp.com/articles/" + id).
                    success(function(data) {
                        $scope.article = data.article.content;
                        $scope.title = data.article.short_title;
                    });
            });
    })

    .controller('SportsCtrl', function($scope, $stateParams, $http) {
        var id;

        $http.get("http://magazinr.herokuapp.com/articles/section/sports").
            success(function(data) {
                id = data.articles[0].id;
                $http.get("http://magazinr.herokuapp.com/articles/" + id).
                    success(function(data) {
                        $scope.article = data.article.content;
                        $scope.title = data.article.short_title;
                    });
            });
    })

    .controller('WorldCtrl', function($scope, $stateParams, $http) {
        var id;

        $http.get("http://magazinr.herokuapp.com/articles/section/world").
            success(function(data) {
                id = data.articles[0].id;
                $http.get("http://magazinr.herokuapp.com/articles/" + id).
                    success(function(data) {
                        $scope.article = data.article.content;
                        $scope.title = data.article.short_title;
                    });
            });
    })

    .controller('ScienceCtrl', function($scope, $stateParams, $http) {
        var id;

        $http.get("http://magazinr.herokuapp.com/articles/section/science").
            success(function(data) {
                id = data.articles[0].id;
                $http.get("http://magazinr.herokuapp.com/articles/" + id).
                    success(function(data) {
                        $scope.article = data.article.content;
                        $scope.title = data.article.short_title;
                    });
            });
    })

