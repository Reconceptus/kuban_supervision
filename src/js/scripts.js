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

        /*function item_moving() {
            var list_item = $this.find('li:last');
            list_item.css('display','none');
            $this.find('ul').prepend(list_item)
        }
        item_moving();

        setInterval(function () {
            $this.find('li:first').fadeIn(3000);
            item_moving();
        },10000)*/

        // $('li:gt(0)',$this).hide();

        setInterval(function() {
            var $first = $('li:first',$this);
            $first.fadeOut(3500)

            setTimeout(function () {
                $first
                .appendTo($this)
                .fadeIn();
            },3500)


        }, 10000);



    });
    




});