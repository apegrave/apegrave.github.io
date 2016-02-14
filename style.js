'use strict';

$(function() {
    
    //configuretion
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;
    
    //cache DOM
    var $sliderr = $('#sliderr');
    var $slideeContainer = $sliderr.find('.slidess');
    var $slidess = $sliderrContainer.find('.slidee');
    
    
    setInterval(function() {
        $slideeContainer.animate({'margin-left': '-='+width}, animationSpeed
function() { currentSlide++; if (currentSlide === $slidee.length) { currentSlide = 1; $SlideeContainer.css('margin-left', 0); });
    }, pause);
    
})