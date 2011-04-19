function simpleSlideShow(target_elements,interval,next_element,prev_element){
    $target_parent = $(target_elements).parent();
    ss_width = '100%';
	ss_height = $target_parent.height();
    console.log(ss_height)
	$target_parent.css({'position':'absolute','overflow':'hidden'});
	$(target_elements).css({'position':'absolute','width' : ss_width, 'height' : ss_height+'px', 'left' : ss_width});
	$(target_elements + ':first').css('left','0');
    
    var slideshow_next = function(){
	    $active = $(target_elements +':first');
        $previous = $active;
        $active = $active.next();
        $active.animate({ left: '0%' }, 2000 );
        $previous.animate({ left: '-' + ss_width}, 2000, function(){
            $previous.css('left', ss_width);
            $previous.appendTo($target_parent)
        });
    };
    
    var slideshow_prev = function(){
	    $active = $(target_elements + ':last');
        $next = $(target_elements + ':first');
        $active.insertBefore($next);
        $active.css('left', '-'+ss_width);
        $next.animate({ left: ss_width}, 2000);
        $active.animate({ left: '0%' }, 2000 );
    };
    
    if (next_element != undefined){
        $(next_element).click(slideshow_next);
    };
    
    if (prev_element != undefined){
        $(prev_element).click(slideshow_prev);
    };
    
    if (interval == undefined){
        interval = 5000;
    };
    
    setInterval(slideshow_next, interval);
};

