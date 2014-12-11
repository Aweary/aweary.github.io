'use strict';

var menuToggle = document.querySelectorAll('.nav-menu-toggle')[0];
var menuContainer = document.querySelectorAll('.navbar')[0];
//var contentWrapper = document.querySelectorAll('.content-wrapper')[0];
var contentSection = document.querySelectorAll('.content-section');
var menuList = document.querySelectorAll('.nav-list')[0];
var menuItem = document.querySelectorAll('.nav-item');


function changeToggleMenu(){
    console.log('toggle menu change');
    var toggleMenuBars = document.getElementsByClassName('nav-menu-toggle-bar');
    toggleMenuBars[0].classList.toggle('menu-toggle-bar-rotated-1');
    toggleMenuBars[1].classList.toggle('menu-toggle-bar-rotated-2');
    toggleMenuBars[2].classList.toggle('hidden');

}


menuToggle.addEventListener('click', function() {

    changeToggleMenu();
    menuContainer.classList.toggle('nav-expanded');
    for(var i = 0; i < contentSection.length; i++)
{
    contentSection[i].classList.toggle('content-section-expanded');
}    menuList.classList.toggle('nav-list-expanded');
    console.log('clicked');
}, false);


var collapseMenu = function() {
    if (menuContainer.classList.contains('nav-expanded')) {
        changeToggleMenu();
        menuContainer.classList.remove('nav-expanded');
        for(var i = 0; i < contentSection.length; i++)
{
    contentSection[i].classList.toggle('content-section-expanded');
}
        menuList.classList.remove('nav-list-expanded');
    }
};

window.onresize = collapseMenu;



for(var j = 0; j < menuItem.length; j++){
    menuItem[j].addEventListener('click', collapseMenu);
}





// #########
//  Leaflet
// *********

// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([51.505, -0.09], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
    .openPopup();