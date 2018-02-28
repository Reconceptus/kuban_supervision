$(document).ready(function () {

    // orientation detect

    function orientation() {

        var winWidth = $(window).width(),
            winHeight = $(window).height()

        if(winWidth >= 1.8*winHeight){
            $('html')
                .removeClass('landscape-size portrait-size')
                .addClass('normal-size')
        }
        else if(winWidth > winHeight){
            $('html')
                .removeClass('normal-size portrait-size')
                .addClass('landscape-size')
        }
        else {
            $('html')
                .removeClass('normal-size landscape-size')
                .addClass('portrait-size')
        }
    }

    orientation();
    $(window).resize(function () {
        orientation();
    });


    // gallery


    $('.gallery-wrap').each(function () {
        var $this = $('ul',this);

        setInterval(function() {
            var $first = $('li:first',$this);
            $first.fadeOut(2000)

            setTimeout(function () {
                $first
                .appendTo($this)
                .fadeIn();
            },2000)


        }, 6000);



    });
    




});