/*! device.js 0.2.7 */
(function(){var a,b,c,d,e,f,g,h,i,j;b=window.device,a={},window.device=a,d=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),a.ios=function(){return a.iphone()||a.ipod()||a.ipad()},a.iphone=function(){return!a.windows()&&e("iphone")},a.ipod=function(){return e("ipod")},a.ipad=function(){return e("ipad")},a.android=function(){return!a.windows()&&e("android")},a.androidPhone=function(){return a.android()&&e("mobile")},a.androidTablet=function(){return a.android()&&!e("mobile")},a.blackberry=function(){return e("blackberry")||e("bb10")||e("rim")},a.blackberryPhone=function(){return a.blackberry()&&!e("tablet")},a.blackberryTablet=function(){return a.blackberry()&&e("tablet")},a.windows=function(){return e("windows")},a.windowsPhone=function(){return a.windows()&&e("phone")},a.windowsTablet=function(){return a.windows()&&e("touch")&&!a.windowsPhone()},a.fxos=function(){return(e("(mobile;")||e("(tablet;"))&&e("; rv:")},a.fxosPhone=function(){return a.fxos()&&e("mobile")},a.fxosTablet=function(){return a.fxos()&&e("tablet")},a.meego=function(){return e("meego")},a.cordova=function(){return window.cordova&&"file:"===location.protocol},a.nodeWebkit=function(){return"object"==typeof window.process},a.mobile=function(){return a.androidPhone()||a.iphone()||a.ipod()||a.windowsPhone()||a.blackberryPhone()||a.fxosPhone()||a.meego()},a.tablet=function(){return a.ipad()||a.androidTablet()||a.blackberryTablet()||a.windowsTablet()||a.fxosTablet()},a.desktop=function(){return!a.tablet()&&!a.mobile()},a.television=function(){var a;for(television=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"],a=0;a<television.length;){if(e(television[a]))return!0;a++}return!1},a.portrait=function(){return window.innerHeight/window.innerWidth>1},a.landscape=function(){return window.innerHeight/window.innerWidth<1},a.noConflict=function(){return window.device=b,this},e=function(a){return-1!==j.indexOf(a)},g=function(a){var b;return b=new RegExp(a,"i"),d.className.match(b)},c=function(a){var b=null;g(a)||(b=d.className.replace(/^\s+|\s+$/g,""),d.className=b+" "+a)},i=function(a){g(a)&&(d.className=d.className.replace(" "+a,""))},a.ios()?a.ipad()?c("ios ipad tablet"):a.iphone()?c("ios iphone mobile"):a.ipod()&&c("ios ipod mobile"):a.android()?c(a.androidTablet()?"android tablet":"android mobile"):a.blackberry()?c(a.blackberryTablet()?"blackberry tablet":"blackberry mobile"):a.windows()?c(a.windowsTablet()?"windows tablet":a.windowsPhone()?"windows mobile":"desktop"):a.fxos()?c(a.fxosTablet()?"fxos tablet":"fxos mobile"):a.meego()?c("meego mobile"):a.nodeWebkit()?c("node-webkit"):a.television()?c("television"):a.desktop()&&c("desktop"),a.cordova()&&c("cordova"),f=function(){a.landscape()?(i("portrait"),c("landscape")):(i("landscape"),c("portrait"))},h=Object.prototype.hasOwnProperty.call(window,"onorientationchange")?"orientationchange":"resize",window.addEventListener?window.addEventListener(h,f,!1):window.attachEvent?window.attachEvent(h,f):window[h]=f,f(),"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:window.device=a}).call(this);

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

$(document).ready(function () {

    if($('html').hasClass('desktop')){
        desktopSlide();
    }
    else if($('html').hasClass('tablet')){
        // tabletSlide();
    }


    var $scroll = true,
        $nothing,
        $current = 1,
        $item_current = 1,
        $slide_length = $('.section').length,
        $nav_massive = [];

    // create massive with slides for current menu

    for(var i = 0; i < $('#nav li').length; i++){
        var $global_section = $('#nav li').eq(i).find('a').attr('data-nav');
        $global_section = parseInt($global_section);
        $nav_massive[i] = $global_section;
    }

    function desktopSlide() {

        // add current to 1st section

        setTimeout(function () {
            $('.section01').addClass('current')
        },150)

        function addActiveMenu() {
            var $currentNav;
            if($current >= $nav_massive[3]){
                $currentNav = $nav_massive[3];
            }
            else if ($current >= $nav_massive[2]){
                $currentNav = $nav_massive[2];
            }
            else if ($current >= $nav_massive[1]){
                $currentNav = $nav_massive[1];
            }
            else if ($current >= $nav_massive[0]){
                $currentNav = $nav_massive[0];
            }
            else {
                $currentNav = $nav_massive[0];
            }

            $('#header a').removeClass('active');
            $('#header a[data-nav="'+$currentNav+'"]').addClass('active');
        }

        // scroll functions

        function scrollUp() {

            $('.current').addClass('scale');

            $current = $current-1;
            $('[data-slide="'+$current+'"]').addClass('prev');
            setTimeout(function () {
                $('[data-slide="'+$current+'"]').addClass('to_current');
                $nothing = false;
            },50);
            addActiveMenu()
            setTimeout(function () {
                $('.current').removeClass('current');
                $('.to_current').addClass('current');
                $('.section').removeClass('next prev scale to_current');
                $scroll = true;

            },700)

        };

        function scrollDown() {

            $('.current').addClass('scale');

            $current = $current+1;
            $('[data-slide="'+$current+'"]').addClass('next');
            setTimeout(function () {
                $('[data-slide="'+$current+'"]').addClass('to_current');
                $nothing = false;
            },50);
            addActiveMenu()
            setTimeout(function () {
                $('.current').removeClass('current');
                $('.to_current').addClass('current');
                $('.section').removeClass('next prev scale to_current');
                $scroll = true;

            },700)

        };

        function scrollUpDown(delta) {

            $('.current').addClass('scale');

            if(delta > 0) {

                $current = $current-1;
                $('[data-slide="'+$current+'"]').addClass('prev');
                setTimeout(function () {
                    $('[data-slide="'+$current+'"]').addClass('to_current');
                    $nothing = false;
                },50);

                var items_length = $('[data-slide="'+$current+'"]').find('.slide').length;
                $item_current = items_length;

                $('[data-slide="'+$current+'"]').find('[data-bull]').removeClass('active');
                $('[data-slide="'+$current+'"]').find('[data-bull="'+$item_current+'"]').addClass('active');

                $('[data-slide="'+$current+'"]').find('.slide').addClass('no-anim');

                $('[data-slide="'+$current+'"]')
                    .find('.slide_current').removeClass('slide_current');
                setTimeout(function () {
                    $('[data-slide="'+$current+'"]')
                        .find('[data-item="'+$item_current+'"]')
                        .addClass('slide_current');

                },50);

            }
            else if(delta < 0){

                $current = $current+1;
                $('[data-slide="'+$current+'"]').addClass('next');
                setTimeout(function () {
                    $('[data-slide="'+$current+'"]').addClass('to_current');
                    $nothing = false;
                },50);

                $item_current = 1;

                $('[data-slide="'+$current+'"]').find('[data-bull]').removeClass('active');
                $('[data-slide="'+$current+'"]').find('[data-bull="'+$item_current+'"]').addClass('active');

                $('[data-slide="'+$current+'"]').find('.slide').addClass('no-anim');

                $('[data-slide="'+$current+'"]')
                    .find('.slide_current').removeClass('slide_current');
                setTimeout(function () {
                    $('[data-slide="'+$current+'"]')
                        .find('[data-item="'+$item_current+'"]')
                        .addClass('slide_current');


                },50);

            }
            addActiveMenu();
            setTimeout(function () {
                $('.current').removeClass('current');
                $('.to_current').addClass('current');
                $('.section').removeClass('next prev scale to_current');
                $scroll = true;

            },700)

        }

        function scrollLeftRight(delta) {

            $('[data-slide="'+$current+'"]')
                .find('.slide_current').removeClass('slide_current');
            if(delta > 0) {

                $item_current = $item_current-1;
                setTimeout(function () {
                    $('[data-slide="'+$current+'"]')
                        .find('[data-item="'+$item_current+'"]')
                        .addClass('slide_current');
                },50);

            }
            else if(delta < 0){

                $item_current = $item_current+1;
                setTimeout(function () {
                    $('[data-slide="'+$current+'"]')
                        .find('[data-item="'+$item_current+'"]')
                        .addClass('slide_current');

                },50);

            }
            $('[data-slide="'+$current+'"]').find('[data-bull]').removeClass('active');
            $('[data-slide="'+$current+'"]').find('[data-bull="'+$item_current+'"]').addClass('active');
            setTimeout(function () {
                $scroll = true;

            },700)

        }


        $('#main').mousewheel(function(event) {

            $event_delta = event.deltaY;


            if($current == 1 && $event_delta > 0){
                $nothing = true;

            }
            else if($current == $slide_length && $event_delta < 0){
                $nothing = true;

            }
            else if($scroll == true){

                if($('[data-slide="'+$current+'"]').hasClass('items')){



                    $scroll = false;
                    var $thisSection = $('[data-slide="'+$current+'"]'),
                        $countItems = $thisSection.find('.slide').length;

                    if($item_current == 1 && $event_delta > 0){

                        scrollUp();
                        $('[data-slide="'+$current+'"]').find('.slide').addClass('no-anim');
                        var items_length = $('[data-slide="'+$current+'"]').find('.slide').length;
                        $item_current = items_length;

                        $('[data-slide="'+$current+'"]').find('[data-bull]').removeClass('active');
                        $('[data-slide="'+$current+'"]').find('[data-bull="'+$item_current+'"]').addClass('active');

                        $('[data-slide="'+$current+'"]')
                            .find('.slide_current').removeClass('slide_current');
                        setTimeout(function () {
                            $('[data-slide="'+$current+'"]')
                                .find('[data-item="'+$item_current+'"]')
                                .addClass('slide_current');
                        },50);
                    }
                    else if($item_current == $countItems && $event_delta < 0){

                        scrollDown();
                        $('[data-slide="'+$current+'"]').find('.slide').addClass('no-anim');
                        $item_current = 1;

                        $('[data-slide="'+$current+'"]').find('[data-bull]').removeClass('active');
                        $('[data-slide="'+$current+'"]').find('[data-bull="'+$item_current+'"]').addClass('active');

                        $('[data-slide="'+$current+'"]')
                            .find('.slide_current').removeClass('slide_current');
                        setTimeout(function () {
                            $('[data-slide="'+$current+'"]')
                                .find('[data-item="'+$item_current+'"]')
                                .addClass('slide_current');
                        },50);
                    }
                    else {
                        $('[data-slide="'+$current+'"]').find('.slide').removeClass('no-anim');
                        scrollLeftRight($event_delta)

                    }


                }
                else {
                    $scroll = false;
                    scrollUpDown($event_delta);

                }




            }


            // events for nav

            if ($current == 1 && $event_delta < 0){
                $('#header').addClass('fixed')
            }
            else if ($current > 1) {
                $('#header').addClass('fixed')
            }
            else {
                $('#header').removeClass('fixed')
                $('#header a').removeClass('active')
            }


        });

        // move by click

        function clickMoving(direction,num) {

            if(direction == 'up'){

                $current = num;
                $('[data-slide="'+$current+'"]').addClass('prev');
                setTimeout(function () {
                    $('[data-slide="'+$current+'"]').addClass('to_current');
                    $nothing = false;
                },50);

                if ($current == 1){
                    $('#header').removeClass('fixed')
                }

            }
            else if(direction == 'down'){

                $current = num;
                $('[data-slide="'+$current+'"]').addClass('next');
                setTimeout(function () {
                    $('[data-slide="'+$current+'"]').addClass('to_current');
                    $nothing = false;
                },50);
            }

            // $item_current = 1;
            // $('[data-slide="'+$current+'"]')
            //     .find('.slide_current').removeClass('slide_current');
            // setTimeout(function () {
            //     $('[data-slide="'+$current+'"]')
            //         .find('[data-item="'+$item_current+'"]')
            //         .addClass('slide_current');
            // },50);

            setTimeout(function () {
                $('.current').removeClass('current');
                $('.to_current').addClass('current');
                $('.section').removeClass('next prev scale to_current');

            },760)
            setTimeout(function () {
                $scroll = true;

            },780)


        }


        // navigation moving

        $('#header a').click(function (e) {
            e.preventDefault();

            if($scroll == true){

                var $thisLink = $(this),
                    $nextSection = $thisLink.attr('data-nav');
                $nextSection = parseInt($nextSection);

                $('#header a').removeClass('active');
                $(this).addClass('active');


                if($current > $nextSection){
                    $('.current').addClass('scale');
                    $scroll = false;
                    clickMoving('up',$nextSection)
                }
                else if($current < $nextSection){
                    $('.current').addClass('scale');
                    $scroll = false;
                    clickMoving('down',$nextSection)
                }

            }



        })

    }






});