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

/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
!function(factory){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],factory):factory("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function($){"use strict";function init(options){return!options||void 0!==options.allowPageScroll||void 0===options.swipe&&void 0===options.swipeStatus||(options.allowPageScroll=NONE),void 0!==options.click&&void 0===options.tap&&(options.tap=options.click),options||(options={}),options=$.extend({},$.fn.swipe.defaults,options),this.each(function(){var $this=$(this),plugin=$this.data(PLUGIN_NS);plugin||(plugin=new TouchSwipe(this,options),$this.data(PLUGIN_NS,plugin))})}function TouchSwipe(element,options){function touchStart(jqEvent){if(!(getTouchInProgress()||$(jqEvent.target).closest(options.excludedElements,$element).length>0)){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(!event.pointerType||"mouse"!=event.pointerType||0!=options.fallbackToMouseEvents){var ret,touches=event.touches,evt=touches?touches[0]:event;return phase=PHASE_START,touches?fingerCount=touches.length:options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),distance=0,direction=null,currentDirection=null,pinchDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,maximumsMap=createMaximumsData(),cancelMultiFingerRelease(),createFingerData(0,evt),!touches||fingerCount===options.fingers||options.fingers===ALL_FINGERS||hasPinches()?(startTime=getTimeStamp(),2==fingerCount&&(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)),(options.swipeStatus||options.pinchStatus)&&(ret=triggerHandler(event,phase))):ret=!1,ret===!1?(phase=PHASE_CANCEL,triggerHandler(event,phase),ret):(options.hold&&(holdTimeout=setTimeout($.proxy(function(){$element.trigger("hold",[event.target]),options.hold&&(ret=options.hold.call($element,event,event.target))},this),options.longTapThreshold)),setTouchInProgress(!0),null)}}}function touchMove(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(phase!==PHASE_END&&phase!==PHASE_CANCEL&&!inMultiFingerRelease()){var ret,touches=event.touches,evt=touches?touches[0]:event,currentFinger=updateFingerData(evt);if(endTime=getTimeStamp(),touches&&(fingerCount=touches.length),options.hold&&clearTimeout(holdTimeout),phase=PHASE_MOVE,2==fingerCount&&(0==startTouchesDistance?(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)):(updateFingerData(touches[1]),endTouchesDistance=calculateTouchesDistance(fingerData[0].end,fingerData[1].end),pinchDirection=calculatePinchDirection(fingerData[0].end,fingerData[1].end)),pinchZoom=calculatePinchZoom(startTouchesDistance,endTouchesDistance),pinchDistance=Math.abs(startTouchesDistance-endTouchesDistance)),fingerCount===options.fingers||options.fingers===ALL_FINGERS||!touches||hasPinches()){if(direction=calculateDirection(currentFinger.start,currentFinger.end),currentDirection=calculateDirection(currentFinger.last,currentFinger.end),validateDefaultEvent(jqEvent,currentDirection),distance=calculateDistance(currentFinger.start,currentFinger.end),duration=calculateDuration(),setMaxDistance(direction,distance),ret=triggerHandler(event,phase),!options.triggerOnTouchEnd||options.triggerOnTouchLeave){var inBounds=!0;if(options.triggerOnTouchLeave){var bounds=getbounds(this);inBounds=isInBounds(currentFinger.end,bounds)}!options.triggerOnTouchEnd&&inBounds?phase=getNextPhase(PHASE_MOVE):options.triggerOnTouchLeave&&!inBounds&&(phase=getNextPhase(PHASE_END)),phase!=PHASE_CANCEL&&phase!=PHASE_END||triggerHandler(event,phase)}}else phase=PHASE_CANCEL,triggerHandler(event,phase);ret===!1&&(phase=PHASE_CANCEL,triggerHandler(event,phase))}}function touchEnd(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent,touches=event.touches;if(touches){if(touches.length&&!inMultiFingerRelease())return startMultiFingerRelease(event),!0;if(touches.length&&inMultiFingerRelease())return!0}return inMultiFingerRelease()&&(fingerCount=fingerCountAtRelease),endTime=getTimeStamp(),duration=calculateDuration(),didSwipeBackToCancel()||!validateSwipeDistance()?(phase=PHASE_CANCEL,triggerHandler(event,phase)):options.triggerOnTouchEnd||options.triggerOnTouchEnd===!1&&phase===PHASE_MOVE?(options.preventDefaultEvents!==!1&&jqEvent.cancelable!==!1&&jqEvent.preventDefault(),phase=PHASE_END,triggerHandler(event,phase)):!options.triggerOnTouchEnd&&hasTap()?(phase=PHASE_END,triggerHandlerForGesture(event,phase,TAP)):phase===PHASE_MOVE&&(phase=PHASE_CANCEL,triggerHandler(event,phase)),setTouchInProgress(!1),null}function touchCancel(){fingerCount=0,endTime=0,startTime=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,cancelMultiFingerRelease(),setTouchInProgress(!1)}function touchLeave(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;options.triggerOnTouchLeave&&(phase=getNextPhase(PHASE_END),triggerHandler(event,phase))}function removeListeners(){$element.unbind(START_EV,touchStart),$element.unbind(CANCEL_EV,touchCancel),$element.unbind(MOVE_EV,touchMove),$element.unbind(END_EV,touchEnd),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave),setTouchInProgress(!1)}function getNextPhase(currentPhase){var nextPhase=currentPhase,validTime=validateSwipeTime(),validDistance=validateSwipeDistance(),didCancel=didSwipeBackToCancel();return!validTime||didCancel?nextPhase=PHASE_CANCEL:!validDistance||currentPhase!=PHASE_MOVE||options.triggerOnTouchEnd&&!options.triggerOnTouchLeave?!validDistance&&currentPhase==PHASE_END&&options.triggerOnTouchLeave&&(nextPhase=PHASE_CANCEL):nextPhase=PHASE_END,nextPhase}function triggerHandler(event,phase){var ret,touches=event.touches;return(didSwipe()||hasSwipes())&&(ret=triggerHandlerForGesture(event,phase,SWIPE)),(didPinch()||hasPinches())&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,PINCH)),didDoubleTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,DOUBLE_TAP):didLongTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,LONG_TAP):didTap()&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,TAP)),phase===PHASE_CANCEL&&touchCancel(event),phase===PHASE_END&&(touches?touches.length||touchCancel(event):touchCancel(event)),ret}function triggerHandlerForGesture(event,phase,gesture){var ret;if(gesture==SWIPE){if($element.trigger("swipeStatus",[phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection]),options.swipeStatus&&(ret=options.swipeStatus.call($element,event,phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection),ret===!1))return!1;if(phase==PHASE_END&&validateSwipe()){if(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),$element.trigger("swipe",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipe&&(ret=options.swipe.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection),ret===!1))return!1;switch(direction){case LEFT:$element.trigger("swipeLeft",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeLeft&&(ret=options.swipeLeft.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case RIGHT:$element.trigger("swipeRight",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeRight&&(ret=options.swipeRight.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case UP:$element.trigger("swipeUp",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeUp&&(ret=options.swipeUp.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case DOWN:$element.trigger("swipeDown",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeDown&&(ret=options.swipeDown.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection))}}}if(gesture==PINCH){if($element.trigger("pinchStatus",[phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchStatus&&(ret=options.pinchStatus.call($element,event,phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData),ret===!1))return!1;if(phase==PHASE_END&&validatePinch())switch(pinchDirection){case IN:$element.trigger("pinchIn",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchIn&&(ret=options.pinchIn.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData));break;case OUT:$element.trigger("pinchOut",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchOut&&(ret=options.pinchOut.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData))}}return gesture==TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),hasDoubleTap()&&!inDoubleTap()?(doubleTapStartTime=getTimeStamp(),singleTapTimeout=setTimeout($.proxy(function(){doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target))},this),options.doubleTapThreshold)):(doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target)))):gesture==DOUBLE_TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),doubleTapStartTime=null,$element.trigger("doubletap",[event.target]),options.doubleTap&&(ret=options.doubleTap.call($element,event,event.target))):gesture==LONG_TAP&&(phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),doubleTapStartTime=null,$element.trigger("longtap",[event.target]),options.longTap&&(ret=options.longTap.call($element,event,event.target)))),ret}function validateSwipeDistance(){var valid=!0;return null!==options.threshold&&(valid=distance>=options.threshold),valid}function didSwipeBackToCancel(){var cancelled=!1;return null!==options.cancelThreshold&&null!==direction&&(cancelled=getMaxDistance(direction)-distance>=options.cancelThreshold),cancelled}function validatePinchDistance(){return null===options.pinchThreshold||pinchDistance>=options.pinchThreshold}function validateSwipeTime(){var result;return result=!options.maxTimeThreshold||!(duration>=options.maxTimeThreshold)}function validateDefaultEvent(jqEvent,direction){if(options.preventDefaultEvents!==!1)if(options.allowPageScroll===NONE)jqEvent.preventDefault();else{var auto=options.allowPageScroll===AUTO;switch(direction){case LEFT:(options.swipeLeft&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case RIGHT:(options.swipeRight&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case UP:(options.swipeUp&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case DOWN:(options.swipeDown&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case NONE:}}}function validatePinch(){var hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),hasCorrectDistance=validatePinchDistance();return hasCorrectFingerCount&&hasEndPoint&&hasCorrectDistance}function hasPinches(){return!!(options.pinchStatus||options.pinchIn||options.pinchOut)}function didPinch(){return!(!validatePinch()||!hasPinches())}function validateSwipe(){var hasValidTime=validateSwipeTime(),hasValidDistance=validateSwipeDistance(),hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),didCancel=didSwipeBackToCancel(),valid=!didCancel&&hasEndPoint&&hasCorrectFingerCount&&hasValidDistance&&hasValidTime;return valid}function hasSwipes(){return!!(options.swipe||options.swipeStatus||options.swipeLeft||options.swipeRight||options.swipeUp||options.swipeDown)}function didSwipe(){return!(!validateSwipe()||!hasSwipes())}function validateFingers(){return fingerCount===options.fingers||options.fingers===ALL_FINGERS||!SUPPORTS_TOUCH}function validateEndPoint(){return 0!==fingerData[0].end.x}function hasTap(){return!!options.tap}function hasDoubleTap(){return!!options.doubleTap}function hasLongTap(){return!!options.longTap}function validateDoubleTap(){if(null==doubleTapStartTime)return!1;var now=getTimeStamp();return hasDoubleTap()&&now-doubleTapStartTime<=options.doubleTapThreshold}function inDoubleTap(){return validateDoubleTap()}function validateTap(){return(1===fingerCount||!SUPPORTS_TOUCH)&&(isNaN(distance)||distance<options.threshold)}function validateLongTap(){return duration>options.longTapThreshold&&distance<DOUBLE_TAP_THRESHOLD}function didTap(){return!(!validateTap()||!hasTap())}function didDoubleTap(){return!(!validateDoubleTap()||!hasDoubleTap())}function didLongTap(){return!(!validateLongTap()||!hasLongTap())}function startMultiFingerRelease(event){previousTouchEndTime=getTimeStamp(),fingerCountAtRelease=event.touches.length+1}function cancelMultiFingerRelease(){previousTouchEndTime=0,fingerCountAtRelease=0}function inMultiFingerRelease(){var withinThreshold=!1;if(previousTouchEndTime){var diff=getTimeStamp()-previousTouchEndTime;diff<=options.fingerReleaseThreshold&&(withinThreshold=!0)}return withinThreshold}function getTouchInProgress(){return!($element.data(PLUGIN_NS+"_intouch")!==!0)}function setTouchInProgress(val){$element&&(val===!0?($element.bind(MOVE_EV,touchMove),$element.bind(END_EV,touchEnd),LEAVE_EV&&$element.bind(LEAVE_EV,touchLeave)):($element.unbind(MOVE_EV,touchMove,!1),$element.unbind(END_EV,touchEnd,!1),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave,!1)),$element.data(PLUGIN_NS+"_intouch",val===!0))}function createFingerData(id,evt){var f={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return f.start.x=f.last.x=f.end.x=evt.pageX||evt.clientX,f.start.y=f.last.y=f.end.y=evt.pageY||evt.clientY,fingerData[id]=f,f}function updateFingerData(evt){var id=void 0!==evt.identifier?evt.identifier:0,f=getFingerData(id);return null===f&&(f=createFingerData(id,evt)),f.last.x=f.end.x,f.last.y=f.end.y,f.end.x=evt.pageX||evt.clientX,f.end.y=evt.pageY||evt.clientY,f}function getFingerData(id){return fingerData[id]||null}function setMaxDistance(direction,distance){direction!=NONE&&(distance=Math.max(distance,getMaxDistance(direction)),maximumsMap[direction].distance=distance)}function getMaxDistance(direction){if(maximumsMap[direction])return maximumsMap[direction].distance}function createMaximumsData(){var maxData={};return maxData[LEFT]=createMaximumVO(LEFT),maxData[RIGHT]=createMaximumVO(RIGHT),maxData[UP]=createMaximumVO(UP),maxData[DOWN]=createMaximumVO(DOWN),maxData}function createMaximumVO(dir){return{direction:dir,distance:0}}function calculateDuration(){return endTime-startTime}function calculateTouchesDistance(startPoint,endPoint){var diffX=Math.abs(startPoint.x-endPoint.x),diffY=Math.abs(startPoint.y-endPoint.y);return Math.round(Math.sqrt(diffX*diffX+diffY*diffY))}function calculatePinchZoom(startDistance,endDistance){var percent=endDistance/startDistance*1;return percent.toFixed(2)}function calculatePinchDirection(){return pinchZoom<1?OUT:IN}function calculateDistance(startPoint,endPoint){return Math.round(Math.sqrt(Math.pow(endPoint.x-startPoint.x,2)+Math.pow(endPoint.y-startPoint.y,2)))}function calculateAngle(startPoint,endPoint){var x=startPoint.x-endPoint.x,y=endPoint.y-startPoint.y,r=Math.atan2(y,x),angle=Math.round(180*r/Math.PI);return angle<0&&(angle=360-Math.abs(angle)),angle}function calculateDirection(startPoint,endPoint){if(comparePoints(startPoint,endPoint))return NONE;var angle=calculateAngle(startPoint,endPoint);return angle<=45&&angle>=0?LEFT:angle<=360&&angle>=315?LEFT:angle>=135&&angle<=225?RIGHT:angle>45&&angle<135?DOWN:UP}function getTimeStamp(){var now=new Date;return now.getTime()}function getbounds(el){el=$(el);var offset=el.offset(),bounds={left:offset.left,right:offset.left+el.outerWidth(),top:offset.top,bottom:offset.top+el.outerHeight()};return bounds}function isInBounds(point,bounds){return point.x>bounds.left&&point.x<bounds.right&&point.y>bounds.top&&point.y<bounds.bottom}function comparePoints(pointA,pointB){return pointA.x==pointB.x&&pointA.y==pointB.y}var options=$.extend({},options),useTouchEvents=SUPPORTS_TOUCH||SUPPORTS_POINTER||!options.fallbackToMouseEvents,START_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerDown":"pointerdown":"touchstart":"mousedown",MOVE_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerMove":"pointermove":"touchmove":"mousemove",END_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerUp":"pointerup":"touchend":"mouseup",LEAVE_EV=useTouchEvents?SUPPORTS_POINTER?"mouseleave":null:"mouseleave",CANCEL_EV=SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerCancel":"pointercancel":"touchcancel",distance=0,direction=null,currentDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,pinchDirection=0,maximumsMap=null,$element=$(element),phase="start",fingerCount=0,fingerData={},startTime=0,endTime=0,previousTouchEndTime=0,fingerCountAtRelease=0,doubleTapStartTime=0,singleTapTimeout=null,holdTimeout=null;try{$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel)}catch(e){$.error("events not supported "+START_EV+","+CANCEL_EV+" on jQuery.swipe")}this.enable=function(){return this.disable(),$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel),$element},this.disable=function(){return removeListeners(),$element},this.destroy=function(){removeListeners(),$element.data(PLUGIN_NS,null),$element=null},this.option=function(property,value){if("object"==typeof property)options=$.extend(options,property);else if(void 0!==options[property]){if(void 0===value)return options[property];options[property]=value}else{if(!property)return options;$.error("Option "+property+" does not exist on jQuery.swipe.options")}return null}}var VERSION="1.6.18",LEFT="left",RIGHT="right",UP="up",DOWN="down",IN="in",OUT="out",NONE="none",AUTO="auto",SWIPE="swipe",PINCH="pinch",TAP="tap",DOUBLE_TAP="doubletap",LONG_TAP="longtap",HORIZONTAL="horizontal",VERTICAL="vertical",ALL_FINGERS="all",DOUBLE_TAP_THRESHOLD=10,PHASE_START="start",PHASE_MOVE="move",PHASE_END="end",PHASE_CANCEL="cancel",SUPPORTS_TOUCH="ontouchstart"in window,SUPPORTS_POINTER_IE10=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!SUPPORTS_TOUCH,SUPPORTS_POINTER=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!SUPPORTS_TOUCH,PLUGIN_NS="TouchSwipe",defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};$.fn.swipe=function(method){var $this=$(this),plugin=$this.data(PLUGIN_NS);if(plugin&&"string"==typeof method){if(plugin[method])return plugin[method].apply(plugin,Array.prototype.slice.call(arguments,1));$.error("Method "+method+" does not exist on jQuery.swipe")}else if(plugin&&"object"==typeof method)plugin.option.apply(plugin,arguments);else if(!(plugin||"object"!=typeof method&&method))return init.apply(this,arguments);return $this},$.fn.swipe.version=VERSION,$.fn.swipe.defaults=defaults,$.fn.swipe.phases={PHASE_START:PHASE_START,PHASE_MOVE:PHASE_MOVE,PHASE_END:PHASE_END,PHASE_CANCEL:PHASE_CANCEL},$.fn.swipe.directions={LEFT:LEFT,RIGHT:RIGHT,UP:UP,DOWN:DOWN,IN:IN,OUT:OUT},$.fn.swipe.pageScroll={NONE:NONE,HORIZONTAL:HORIZONTAL,VERTICAL:VERTICAL,AUTO:AUTO},$.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:ALL_FINGERS}});


$(document).ready(function () {

    if($('html').hasClass('desktop')){
        desktopSlide();
    }
    else if($('html').hasClass('tablet')){
        tabletSlide();
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

            // $('.current').addClass('scale');


            if(delta > 0) {

                $current = $current-1;
                $('[data-slide="'+$current+'"]').addClass('prev');
                setTimeout(function () {
                    $('[data-slide="'+$current+'"]').addClass('to_current');
                    $nothing = false;
                    $('.current').addClass('scale');
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
                    $('.current').addClass('scale');
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


    function tabletSlide() {

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

        function scrollUpDown(direction) {

            $('.current').addClass('scale');

            if(direction == 'down') {

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
            else if(direction == 'up'){

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

        function scrollLeftRight(direction) {



            var currentSlidesLength = $('[data-slide="'+$current+'"] .slide').length;

            if(direction == 'right' && $item_current == 1){
                $scroll = true;

            }
            else if(direction == 'left' && $item_current == currentSlidesLength){
                $scroll = true;
            }
            else {
                $('[data-slide="'+$current+'"]')
                    .find('.slide_current').removeClass('slide_current');
                if(direction == 'right') {

                    $item_current = $item_current-1;
                    setTimeout(function () {
                        $('[data-slide="'+$current+'"]')
                            .find('[data-item="'+$item_current+'"]')
                            .addClass('slide_current');
                    },50);

                }
                else if(direction == 'left'){

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

        }


        $('#main').swipe({

            swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

                if($current == 1 && direction == 'down'){
                    $nothing = true;
                }
                else if($current == $slide_length && direction == 'up'){
                    $nothing = true;
                }
                else if($scroll == true){

                    if($('[data-slide="'+$current+'"]').hasClass('items')){




                        var $thisSection = $('[data-slide="'+$current+'"]'),
                            $countItems = $thisSection.find('.slide').length;

                        if($item_current == 1 && direction == 'down'){
                            $scroll = false;
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
                        else if($item_current == $countItems && direction == 'up'){
                            $scroll = false;
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
                        else if(direction == 'left' || direction == 'right') {
                            $scroll = false;
                            $('[data-slide="'+$current+'"]').find('.slide').removeClass('no-anim');
                            scrollLeftRight(direction)

                        }


                    }
                    else if(direction == 'up' || direction == 'down') {
                        $scroll = false;
                        scrollUpDown(direction);

                    }




                }


                // events for nav

                if ($current == 2 && direction == 'down'){
                    $('#header').addClass('fixed')
                }
                else if ($current > 1) {
                    $('#header').addClass('fixed')
                }
                else {
                    $('#header').removeClass('fixed')
                    $('#header a').removeClass('active')
                }


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