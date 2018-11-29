(function () {
    var init = function () {
        if ($( window ).width() <= 812) {
            $('.video-background').hide();
            $('.header').addClass('header--mainBackground');
        }
        (setTimeout(function () {

            if ($( window ).width() >= 812) {
                $('.video-background').fadeOut(3000);

            }

            $('.header').addClass('header--mainBackground');
            $('.header')[0].style.zIndex = '10';
            if ($( window ).width() <= 812) {
                $('.main__logo')[0].style.width = '100%';

            } else {
                $('.main__logo')[0].style.width = '45%';
            }
            $('.main__logo')[0].style.position = 'relative';
            $('.text-box')[0].style.marginTop = '-60px';
            $('html')[0].style.overflow = 'auto';
            $('.text-box')[0].style.position = 'absolute';
            $('#intro').hide();
        }, 3000))
    };

    $(document).ready(function () {
        init();
    });


})();