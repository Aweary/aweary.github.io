$(document).ready(function() {

    toggle_nav_container();
    fixMenuButton();
    gotoByScroll();

});

$('#shape').click(function(){
    $(this).toggleClass('rotate_animation');
});

var toggle_nav_container = function() {



    var $toggleButton = $('#menu_button_container');
    $nav = $('#nav_container');
    $menuButton = $('#menu_button')
    $menuButtonBars = $('.m_nav_ham');
    $wrapper = $('#main_container');


    // toggle the container on click of button (can be remapped to $menuButton)

    $toggleButton.on("click", function() {

        $nav.toggleClass('expanded_nav');

    });



}


// // Function that takes the href value of links in the navbar and then scrolls 
// //the div on the page whose ID matches said value. This only works if you use 
// //a consistent naming scheme for the navbar anchors and div IDs

var gotoByScroll = function() {

    $(".nav_item a").on("click", function(e) {

        e.preventDefault();
        // var $divID =$(this).attr("href");
        // var $scrollToDiv = "$(" + "'" + $divID + "'" +")";

        $('html,body').animate({
            scrollTop: $($(this).attr("href")).offset().top - 50
        }, "slow");

    });




}


var fixMenuButton = function () {
    var $toggleButton = $('#menu_button_container');
    $nav = $('#nav_container');
    $menuButton = $('#menu_button')
    $menuButtonBars = $('.m_nav_ham');
    $wrapper = $('#main_container');

$(window).on('load resize', function() {
var $buffer = $wrapper.offset()
$menuButton.css('right', $buffer.left + 35);
$nav.css('width', $wrapper.width());
$nav.css('left', $buffer.left).css('right', $buffer.right);

});




}

