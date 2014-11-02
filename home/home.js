'use strict';

angular.module('myApp.home', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home/home.html',
            controller: 'homeCtrl'
        });
    }])
    .controller('homeCtrl', ['$scope', '$firebase', '$anchorScroll', '$location', function($scope, $firebase, $anchorScroll, $location) {


        $scope.gotoAnchor = function(x) {
            console.log('gotoAnchor called')
            var newHash = 'event-' + x;
            if ($location.hash() !== newHash) {
                // set the $location.hash to `newHash` and
                // $anchorScroll will automatically scroll to it
                $location.hash('event-' + x);
            } else {
                // call $anchorScroll() explicitly,
                // since $location.hash hasn't changed
                $anchorScroll();
            }
        };

        $scope.texts = {
            rsvp_title: "Please RSVP!",
            rsvp_subtitle: "Please fill out the form below so we know whose coming!"
        }

        var ref = new Firebase("https://dail-wedding.firebaseio.com/");
        // create an AngularFire reference to the data
        var sync = $firebase(ref);
        // download the data into a local object
        $scope.data = sync.$asArray();

        $scope.attende = {
            firstname: '',
            lastname: '',
            email: '',
            notes: ''
        }

        $scope.registerAttende = function(attende, data) {
            if (attende.firstname !== '' && attende.lastname !== '' && attende.email !== '') {
                $scope.data.$add(attende)
                $scope.texts.rsvp_title = "Thanks for RSVP'ing " + attende.firstname;
                $scope.texts.rsvp_subtitle = "We will contact you at " + attende.email + " with any pertinent information. If you have any questions, feel free to reach us at rsvp@dailwedding.info";

                $scope.form = $('.form-container')
                $scope.form.hide();
                $scope.section = $('#event-2');
                $scope.section.css({
                    'height': '400px'
                })
                $scope.message = "  ";
            } 

            else {
                $scope.inputSet = $('.form-group input');
                for (var i = 0; i < $scope.inputSet.length; i++) {
                    if ($scope.inputSet[i].value === "") {
                        $scope.parent = $scope.inputSet[i].parentNode;
                        $scope.parent.className += " has-error";
                    } else {
                        $scope.inputSet[i].parentNode.className = 'form-group';
                    }
                }

                $scope.message = "Please fill out all the fields";
                return;
            }



        }




    }]);
