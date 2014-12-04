"use strict";angular.module("dailweddinginfo2App",["firebase","ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/event.html",controller:"EventCtrl"}).when("/rsvp",{templateUrl:"views/rsvp.html",controller:"RSVPCtrl"}).when("/lodging",{templateUrl:"views/lodging.html",controller:"LodgingCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("dailweddinginfo2App").controller("EventCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("dailweddinginfo2App").controller("RSVPCtrl",["$scope","$firebase",function(a,b){var c=new Firebase("https://dail-wedding.firebaseio.com/"),d=b(c);a.data=d.$asArray(),a.attende={firstname:"",lastname:"",email:"",notes:""},a.messages={rsvpStatus:"Thanks for coming!"},a.rsvpStatus="Thanks for coming!",a.rsvpTitle="RSVP!",a.addRSVP=function(b){if(""!==b.firstname&&""!==b.lastname&&""!==b.email)a.data.$add(b),a.rsvpStatus="Thanks for RSVP'ing!",a.messages.rsvpStatus="Thanks for RSVP'ing!",a.rsvpIcon=document.querySelector(".rsvp-icon"),a.rsvpIcon.innerHTML="<img src=\"./images/rsvp-completed.svg\" alt=\"\" class='icon' style='margin-top: 20%'>";else{a.messages.rsvpStatus="Please enter your full name and email!",a.rsvpStatus="error",a.inputSet=document.querySelectorAll('#rsvpForm input[type="text"], #rsvpForm input[type="email"] ');for(var c=0;c<a.inputSet.length;c++)a.inputSet[c].className=""===a.inputSet[c].value?"has-error":""}}}]);