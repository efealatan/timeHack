angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
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
})

    .controller('BusinessCtrl', function($scope, $stateParams, $http) {

        var id;

        $http.get("http://magazinr.herokuapp.com/articles/section/business").
            success(function(data) {
                id = data.articles[0].id;
                $http.get("http://magazinr.herokuapp.com/articles/" + id).
                    success(function(data) {
                        $scope.article = data.article.content;
                        $scope.id = data.article.id;
                        $scope.similarId = data.article.article1;
                        $scope.lessSimilarId = data.article.article2;
                        $scope.wildCardId = data.article.article3;
                        $scope.title = data.article.short_title;

                    });
            });
                $scope.getArticle = function(id){
                    $http.get("http://magazinr.herokuapp.com/articles/" + id).
                success(function(data){
                        $scope.article = data.article.content;
                        $scope.id = data.article.id;
                        $scope.similarId = data.article.article1;
                        $scope.lessSimilarId = data.article.article2;
                        $scope.wildCardId = data.article.article3;
                        });
                };

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