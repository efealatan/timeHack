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

.controller('BusinessCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('TechCtrl', function($scope, $stateParams) {
})

    .controller('EntertainmentCtrl', function($scope, $stateParams) {
    })

    .controller('PoliticsCtrl', function($scope, $stateParams) {
    })

    .controller('SportsCtrl', function($scope, $stateParams) {
    })

    .controller('WorldCtrl', function($scope, $stateParams) {
    })

    .controller('ScienceCtrl', function($scope, $stateParams) {
    })


////////////////////////////////////////////////////////////////////////////////////////////////////////
//LOCAL NOTIFICATION

.controller('NotificationCtrl', function($scope, $cordovaLocalNotification) {

    $scope.addNotification = function () {
        $cordovaLocalNotification.add({
            id: 'some_notification_id'
            // parameter documentation:
            // https://github.com/katzer/cordova-plugin-local-notifications#further-informations-1
        }).then(function () {
            console.log('callback for adding background notification');
        });
    };

    $scope.cancelNotification = function () {
        $cordovaLocalNotification.cancel('some_notification_id').then(function () {
            console.log('callback for cancellation background notification');
        });
    };

    $scope.cancelAllNotification = function () {
        $cordovaLocalNotification.cancelAll().then(function () {
            console.log('callback for canceling all background notifications');
        });
    };

    $scope.checkIfIsScheduled = function () {
        $cordovaLocalNotification.isScheduled('some_notification_id').then(function (isScheduled) {
            console.log(isScheduled);
        });
    };

    $scope.getNotificationIds = function () {
        $cordovaLocalNotification.getScheduledIds().then(function (scheduledIds) {
            console.log(scheduledIds);
        });
    };

    $scope.checkIfIsTriggered = function () {
        $cordovaLocalNotification.isTriggered('some_notification_id').then(function (isTriggered) {
            console.log(isTriggered);
        });
    };

    $scope.getTriggeredIds = function () {
        $cordovaLocalNotification.getTriggeredIds().then(function (triggeredIds) {
            console.log(triggeredIds);
        });
    };

    $scope.notificationDefaults = $cordovaLocalNotification.getDefaults();

    $scope.setDefaultOptions = function () {
        $cordovaLocalNotification.setDefaults({ autoCancel: true });
    };

    // event callbacks events `onadd`, `ontrigger`, `onclick` and `oncancel`
    // can be assigned like this:
    $cordovaLocalNotification.onadd = function (id, state, json) {};

});

