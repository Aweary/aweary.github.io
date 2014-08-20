$(document).ready(function() {

    toggle_nav_container();
    fixMenuButton();
    gotoByScroll();


});


var toggle_nav_container = function() {



    var $toggleButton = $('#menu_button_container');
    $nav = $('#nav_container');
    $menuButton = $('#menu_button')
    $menuButtonBars = $('.m_nav_ham');
    $wrapper = $('#main_container');

     $('#nav_list').fadeOut( "slow", "linear" )

    // toggle the container on click of button (can be remapped to $menuButton)

    $toggleButton.on("click", function() {

        $nav.toggleClass('expanded_nav');
        $('#circle').toggleClass('rotate');
        $('#nav_list').delay(200).fadeToggle( "slow", "linear" )
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
        $nav.toggleClass('expanded_nav');
        $('#nav_list').fadeToggle('slow');
        $("#m_ham_1").toggleClass("m_nav_ham_1_open");
        $("#m_ham_2").toggleClass("m_nav_ham_2_open");
        $("#m_ham_3").toggleClass("m_nav_ham_3_open");
        $menuButtonBars.toggleClass("button_open");
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
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

