$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});

(function () {

    //catche DOM
    var $menu;
    var $nav;
    var $bars;
    var $navLeft;
    var $logo;

    //bind events

    var init = function () {
        $menu = $('.menu');
        if ($menu.length > 0) {
            $nav = $menu.find('.menu__nav');
            $bars = $menu.find('.menu__bars');
            $navLeft = $menu.find('.menu__navLeft');
            $logo = $menu.find('.menu__logo');

            bindEvents();
        }
    };

    $(document).ready(function () {
        init();

    });


    var bindEvents = function () {
        $('#intro').hide();
        menuDisplay();
        menuClick();
        scroll();
        menuResize();
        slideFacebook();

    };

    var menuDisplay = function () {
        $( window ).resize(function () {
            menuResize();
        });
    };

    var scroll = function () {
        // $menu.sticky({topSpacing:0, zIndex:10}).css("height", "auto");
        $(document).on('scroll', function () {
            if($(document).scrollTop()>100){
                $navLeft.css("padding", "20px 0");
                $logo.css("width", "170px")
            } else {
                $navLeft.css("padding", "30px 0");
                $logo.css("width", "230px")
            }
        })
    };

    var menuResize = function () {
        if ($( window ).width() >= 812) {
            $nav.show();
            $bars.hide();
        }
        if( $(window).width() <= 812){
            $nav.hide();
            $bars.show();
            scroll();
        }
    };

    var menuClick = function () {

        $bars.click(function () {
            var clicked = $(this).data('clicked');

            if(clicked) {
                menuToggle();
                $menu.css("opacity", "0.8");
                $('body').css("overflow", "auto");
            } else {
                menuToggle();
                $menu.css("opacity", "0.9");
                $('body').css("overflow", "hidden");
            }

            $(this).data('clicked', !clicked);
        });

    };
    var slideFacebook = function () {
        $('.fb-toggle').on('click', function () {
            $('.fb-position').toggle(300);
        })
    }

    var menuToggle = function () {
        $nav.slideToggle(500).stop().finish();
    };


})();
