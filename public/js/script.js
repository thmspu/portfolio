$(document).ready(function () {
    $(window).scroll(function(){
        $(window).bind('mousewheel', function(event) {
            if (event.originalEvent.wheelDelta >= 0) {
                //console.log('Scroll up');
            } else {
                //console.log('Scroll down');
            }
        });
    });
});