$(document).ready(function() {

    toggle_nav_container();
    fixMenuButton();
    gotoByScroll();

$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 520) {
        $("#subOverlay").fadeIn();
    } else {
        $("#subOverlay").stop().fadeOut();
    }
});

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
        $('#circle').toggleClass('rotate');
        $('#circle_front').delay(500).fadeToggle('slow');
        $("#m_ham_1").toggleClass("m_nav_ham_1_open");
        $("#m_ham_2").toggleClass("m_nav_ham_2_open");
        $("#m_ham_3").toggleClass("m_nav_ham_3_open");
        $menuButtonBars.toggleClass("button_open");


    });



}


// // Function that takes the href value of links in the navbar and then scrolls 
// //the div on the page whose ID matches said value. This only works if you use 
// //a consistent naming scheme for the navbar anchors and div IDs

var gotoByScroll = function() {

    $(".nav_item_link").on("click", function(evt) {

        evt.preventDefault();
        console.log($($(this).attr("href")).offset().top);
        // var $divID =$(this).attr("href");
        // var $scrollToDiv = "$(" + "'" + $divID + "'" +")";

        $('html, body').animate({
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
$menuButton.css('right', $buffer.left + 15);
$nav.css('width', $wrapper.width());
$nav.css('left', $buffer.left).css('right', $buffer.right);

});




}

