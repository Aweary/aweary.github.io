var menuToggle = document.querySelectorAll('.nav-menu-toggle')[0];
var menuContainer = document.querySelectorAll('.navbar')[0];
var contentWrapper = document.querySelectorAll('.content-wrapper')[0];
var contentSection = document.querySelectorAll('.content-section')
var menuList = document.querySelectorAll('.nav-list')[0];
var menuItem = document.querySelectorAll('.nav-item');

console.log(menuContainer)

menuToggle.addEventListener('click', function() {

    changeToggleMenu();
    menuContainer.classList.toggle('nav-expanded');
    for(var i = 0; i < contentSection.length; i++)
{
    contentSection[i].classList.toggle('content-section-expanded');
}    menuList.classList.toggle('nav-list-expanded');
    console.log('clicked')
}, false);


var collapseMenu = function() {
    if (menuContainer.classList.contains('nav-expanded')) {
        changeToggleMenu()
        menuContainer.classList.remove('nav-expanded');
        for(var i = 0; i < contentSection.length; i++)
{
    contentSection[i].classList.toggle('content-section-expanded');
}
        menuList.classList.remove('nav-list-expanded');
    }
}

window.onresize = collapseMenu;


function changeToggleMenu(){
    console.log('toggle menu change')
    var toggleMenuBars = document.getElementsByClassName('nav-menu-toggle-bar');
    toggleMenuBars[0].classList.toggle('menu-toggle-bar-rotated-1');
    toggleMenuBars[1].classList.toggle('menu-toggle-bar-rotated-2');
    toggleMenuBars[2].classList.toggle('hidden');

}








for(var j = 0; j < menuItem.length; j++){
    menuItem[j].addEventListener('click', collapseMenu);
}




function initialize() {
    var mapCanvas = document.getElementById('map_canvas');
    var mapOptions = {
        center: new google.maps.LatLng(37.744527, -119.597998),

        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(37.744527, -119.597998),
        map: map,
        title: 'Hello World!'
    });
}

google.maps.event.addDomListener(window, 'load', initialize);


//small AngularJS app to manage RSVP form

var rsvpApp = angular.module("rsvpApp", ["firebase"]);

rsvpApp.controller("rsvpController", ["$scope", "$firebase",
    function($scope, $firebase) {

        var ref = new Firebase("https://dail-wedding.firebaseio.com/");
        var sync = $firebase(ref);
        // download the data into a local object
        $scope.data = sync.$asArray();

        //create an empty object bound to the RSVP form
        $scope.attende = {
            firstname: '',
            lastname: '',
            email: '',
            notes: ''
        }

        $scope.messages = {
            rsvpStatus: ""
        }
        $scope.rsvpStatus = "";

        $scope.rsvpTitle = "RSVP!";
        $scope.addRSVP = function(attende) {
            if (attende.firstname !== '' && attende.lastname !== '' && attende.email !== '') {
                $scope.data.$add(attende)
                $scope.rsvpStatus = "success";
                $scope.messages.rsvpStatus = "Thanks for RSVP'ing!";

                $scope.rsvpForm = document.querySelector('.rsvp-form');
                $scope.rsvpForm.parentNode.removeChild($scope.rsvpForm);

                $scope.rsvpDetails = document.querySelector('.rsvp-details');
                $scope.rsvpDetails.style.float = "none";
                $scope.rsvpDetails.style.display = "inline-block";
                $scope.rsvpDetails.style.marginTop = "150px";



            } else {
                $scope.messages.rsvpStatus = "Please enter your full name and email!";
                $scope.rsvpStatus = "error";
                $scope.inputSet = document.querySelectorAll('#rsvpForm input[type="text"], #rsvpForm input[type="email"] ');
                for (var i = 0; i < $scope.inputSet.length; i++) {
                    if ($scope.inputSet[i].value === "") {
                        $scope.inputSet[i].className = "has-error";

                    } else {
                        $scope.inputSet[i].className = "";
                    }
                }
                return;
            }



        }

    }
]);
