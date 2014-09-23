'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('eventController', ['$scope',
    function($scope) {


        // Smooth scrolling to the main div section when the 'learn more' button is clicked

        var gotoByScroll = function() {
            console.log("gotoByScroll")

            $("#learn-more-event").on("click", function(evt) {

                evt.preventDefault();
                $('html, body').animate({
                    scrollTop: $($('#event-1')).offset().top
                }, "slow");

            });

        }

        gotoByScroll();






        // get and set realtime countdown for wedding


        var updateClock = function() {

            // Get the wedding date, set current time
            $scope.wedding_date = new Date(2015, 3, 11);
            $scope.current_date = new Date();
            //get the difference between the two, in MS
            $scope.seconds_date = Number(Math.round(($scope.wedding_date - $scope.current_date) / 1000)).toLocaleString('en');
            $scope.minutes_date = Number(Math.round(($scope.wedding_date - $scope.current_date) / 60000)).toLocaleString('en');
            $scope.hours_date = Number(Math.round(($scope.wedding_date - $scope.current_date) / 3600000)).toLocaleString('en');
            $scope.days_date = Number(Math.round(($scope.wedding_date - $scope.current_date) / 86400000)).toLocaleString('en');
        };

        setInterval(function() {
            $scope.$apply(updateClock);
        }, 1000);

        updateClock();

        // cache fader container div and loop through each item

        $scope.fader = $('.fader-container');
        $scope.fade_items = $scope.fader.children();
        $scope.fade_items.hide();
        
        
        var loop = function() {

            $.each($scope.fade_items, function(i){
            var el = $(this);
            setTimeout(function(){
                el.delay(500).slideDown('slow').delay(500);
                el.siblings().slideUp('fast');
            }, i * 6000);
        });

            setTimeout(function(){
            loop();
        }, 24000);

        };

        loop();


    

        
    }
])
    .controller('contactController', ["$scope",
        function($scope) {

            $scope.email = {
                name: "",
                address: "",
                message: ""
            }
            $scope.emailSet = [];
            $scope.sendEmail = function() {
                $scope.emailSet.push($scope.email);
            }

        }
    ]).
controller('locationController', [

    function() {

    }
]).
controller('landingController', [

    function() {

    }
]);
