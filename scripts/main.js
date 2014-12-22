'use strict';

/*
This3
 */
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





