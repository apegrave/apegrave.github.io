'use strict';

$(function() {
    
    //configuretion
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    
    //cache DOM
    var $sliderr = $('#sliderr');
    var slideeContainer = $sliderr.find('slidess');
    var $slidess = $sliderrContainer.find('.slidee');
    
    
    setInterval(function() {
        $slideeContainer.animate({'margin-left': '-='+width}, animationSpeed);
    }, pause);
    
})