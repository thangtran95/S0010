$(document).on('ready', function() {
    
});
$(function(){
    $(".regular1").slick({
        dots: true,
        infinite: true,
        speed: 900,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll:1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll:1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }

        ]
    });

    $(".regular2").slick({
        dots: false,
        infinite: true,
        speed: 900,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll:1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll:1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }

        ]
    });

})

