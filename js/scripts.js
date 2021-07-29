$(function() {
    var menuLink = $('.menu-link');
    var menu = $('.header-menu');
    var close = $('.close-btn');
    var navLink = $('a');


    menuLink.click(function() {
        menu.toggleClass('active-menu');
    });
    close.click(function() {
        menu.toggleClass('active-menu');
    });


});




