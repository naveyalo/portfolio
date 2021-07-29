

$(document).ready(function () {

    $('.sliders').owlCarousel({
        loop:true,

        nav:true,
        dots: false,
        navText: [],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            680:{
                items:2
            },
            768:{
                items:3
            },
            1024:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    new WOW().init();

});

