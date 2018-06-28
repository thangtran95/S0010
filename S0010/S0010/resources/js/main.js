function Helper(){
    var methods = this;

    methods.initToTop = function(){
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 50) {    // If page is scrolled more than 50px
                $('#top').fadeIn("fast");       // Fade in the arrow
            } else {
                $('#top').fadeOut("fast");      // Else fade out the arrow
            }
        });
        $('#top').click(function() {            // When arrow is clicked
            $('body,html').animate({
                scrollTop : 0                   // Scroll to top of body
            }, 500);
        });
    }

    methods.initFixTop = function(){
        jQuery(function($) {
            function fixDiv() {
                if($(window).width() > 1023){
                    var $cache = $('#getFixed');
                    var $addget = $('#fixedmobile');
                    if ($(window).scrollTop() > 40)
                    {
                        // $('#fixed-mobile').removeClass('fix-mobile-ipad');

                        $cache.addClass('getFixed-1');

                    }
                    else{
                        // $('#fixedmobile').addClass('fix-mobile-ipad');
                        
                        $cache.removeClass('getFixed-1');
                    }
                }
            }

            $(window).scroll(fixDiv);
            fixDiv();
            $(window).resize( function(){
                fixDiv();
            });
        });
    }

    methods.initMenu = function(){
        var open = false;
        $('#btn-toggle').on('click' , function(){
            if( open){
                $('#menu').removeClass('open');
                $('#btn-toggle').removeClass('active');
                $('body').removeClass('menu-open');
            }else{
                $('#menu').addClass('open');
                $('#btn-toggle').addClass('active');
                $('body').addClass('menu-open');
            }
            open = !open;
        });
        $('body, html').on('click', function(event){
            var target = $(event.target);
            if( !target.is('#menu , #menu * ,#btn-toggle ,#btn-toggle *, .header-mid, .header-mid *')){
                $('#menu').removeClass('open');
                $('#btn-toggle').removeClass('active');
                $('body').removeClass('menu-open');
                open = false;
            }
        });
        $('#menu .has-submenu .icon-first-submenu').on('click' , function(event){
            event.preventDefault();
            var parent = $(this).parents('.has-submenu');
            $('#menu .has-submenu').not(parent).removeClass('open').find('.submenu-1').slideUp()
            $('#menu .has-submenu').not(parent).find('.has-second-submenu').removeClass('open');
            $('#menu .has-submenu').not(parent).find('.second-submenu').slideUp();
            parent.toggleClass('open').find('.submenu-1').slideToggle();
        });
        $('#menu .has-second-submenu .icon-second-submenu').on('click' , function(event){
            event.preventDefault();
            var parent = $(this).parents('.has-second-submenu');
            $('#menu .has-second-submenu').not(parent).removeClass('open').find('.submenu-2').slideUp();
            parent.toggleClass('open').find('.submenu-2').slideToggle();
        });

    }

    methods.initSearch = function(){
        $('#btn-search-page').on('click', function(){
            event.preventDefault();
            $('.form-search').addClass('active');
        });
        $('#close-search').on('click', function(){
            event.preventDefault();
            $('.form-search').removeClass('active');
        });

        $('.form-search').on('click', function(event){
            var target = $(event.target);
            if( !target.is('.form-search form , .form-search form *')){
                $('.form-search').removeClass('active');
                open = false;
            }
        });
    }

    methods.initPopupCart = function(){
        $('#popup-cart').on('click', function(){
            $('.dropdown-cart').toggleClass('dropdown-cart-show');
        });
        $('body, html').on('click', function(event){
            var target = $(event.target);
            if( !target.is('#popup-cart, #popup-cart *, .dropdown-cart , .dropdown-cart *')){
                $('.dropdown-cart').removeClass('dropdown-cart-show');
                open = false;
            }
        });
    }

    methods.initProfile = function(){
        $('#click-profile').on('click', function(){
            $('.ed-drop-menu').toggleClass('open');
        });

        $('body, html').on('click', function(event){
            var target = $(event.target);
            if( !target.is('#click-profile, #click-profile *')){
                $('.ed-drop-menu').removeClass('open');
                open = false;
            }
        });
    }

    methods.initCategory = function(){
        $('.title-1').on('click', function(){
            $(this).siblings('ul').slideToggle(300);
            $(this).find('.fa-plus').toggleClass('fa-minus');
        });
    }

    methods.initRange = function(){
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 10000000,
            values: [ 500000, 5000000 ],
            slide: function( event, ui ) {
                $( "#amount" ).val('Giá: ' + ui.values[ 0 ] + "đ - "  + ui.values[ 1 ] + "đ" );
            }
        });
        $( "#amount" ).val('Giá: ' + $( "#slider-range" ).slider( "values", 0 ) + "đ - " +
        $( "#slider-range" ).slider( "values", 1 ) + "đ");
    }

    methods.initPickColor = function(){
        $('.change-color li').on('click', function(){
            $('.change-color li').removeClass('active');
            $(this).addClass('active');
            
        })
        $('.size-zzz li').on('click', function(){
            $('.size-zzz li').removeClass('active');
            $(this).addClass('active');
        })
        $('.thuonghieu li').on('click', function(){
            $('.thuonghieu li').removeClass('active');
            $(this).addClass('active');
            
        })
    }



    methods.init = function(){
        methods.initToTop();
        methods.initSearch();
        methods.initFixTop();
        methods.initMenu();
        methods.initPopupCart();
        methods.initProfile();
        methods.initCategory();
        methods.initRange();
        methods.initPickColor();
    }

    return methods;
}

$(function(){
    var helper = new Helper();
    helper.init();
})