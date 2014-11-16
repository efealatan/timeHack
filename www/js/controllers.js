angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
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
                            });
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
                                });
                        });
    })