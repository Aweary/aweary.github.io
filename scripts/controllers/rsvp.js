'use strict';

/**
 * @ngdoc function
 * @name dailweddinginfo2App.controller:AboutCtrl
 * @description
 * # RSVPCtrl
 * Controller of the dailweddinginfo2App
 */
angular.module('dailweddinginfo2App')
  .controller('RSVPCtrl', ['$scope', '$firebase',
    function($scope, $firebase) {


        var ref = new Firebase('https://dail-wedding.firebaseio.com/');
        var sync = $firebase(ref);
        // download the data into a local object
        $scope.data = sync.$asArray();

        //create an empty object bound to the RSVP form
        $scope.attende = {
            firstname: '',
            lastname: '',
            email: '',
            notes: ''
        };

        $scope.messages = {
            rsvpStatus: 'Thanks for coming!'
        };
        $scope.rsvpStatus = 'Thanks for coming!';

        $scope.rsvpTitle = 'RSVP!';
        $scope.addRSVP = function(attende) {
            if (attende.firstname !== '' && attende.lastname !== '' && attende.email !== '') {
                $scope.data.$add(attende);
                $scope.rsvpStatus = 'Thanks for RSVP\'ing!';
                $scope.messages.rsvpStatus = 'Thanks for RSVP\'ing!';

                $scope.rsvpIcon = document.querySelector('.rsvp-icon');
                $scope.rsvpIcon.innerHTML = '<img src="./images/rsvp-completed.svg" alt="" class=\'icon\' style=\'margin-top: 20%\'>';



            } else {
                $scope.messages.rsvpStatus = 'Please enter your full name and email!';
                $scope.rsvpStatus = 'error';
                $scope.inputSet = document.querySelectorAll('#rsvpForm input[type="text"], #rsvpForm input[type="email"] ');
                for (var i = 0; i < $scope.inputSet.length; i++) {
                    if ($scope.inputSet[i].value === '') {
                        $scope.inputSet[i].className = 'has-error';

                    } else {
                        $scope.inputSet[i].className = '';
                    }
                }
                return;
            }



        };

    }
]);
