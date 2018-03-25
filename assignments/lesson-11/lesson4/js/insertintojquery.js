$(function () {

    var box1 = $('.box1');
    var box2 = $('.box2');
    
    function leftToRight() {
        if(box2.html() == ''){
            // Get content from box 1 and put it into box 2
            // Empty out box 1
            box2.html( box1.html());
            box1.html('');            
        }        
    }

    $('#LeftToRight').click(leftToRight);
    
    function rightToLeft() {
        if(box1.html() == ''){
            // Get contento from box 2 and put it into box 1
            // Empty out box 2
            box1.html( box2.html());
            box2.html('');
        }
    }
    
    $('#RightToLeft').click(rightToLeft);
    
    
})
