'use strict';

/**
 * @ngdoc function
 * @name dailweddinginfo2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dailweddinginfo2App
 */
angular.module('dailweddinginfo2App')
  .controller('lodgingCtrl', function ($scope) {
    
// #########
//  Leaflet
// *********

// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map', {
	scrollWheelZoom: false
}).setView([37.747420, -119.596287], 11);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);






  });
