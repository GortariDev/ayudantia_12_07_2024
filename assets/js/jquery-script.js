$(document).ready(function() {
    $('#jqButton').click(function() {
        $('#text').text('Texto cambiado con jQuery');
    });

    $('#box').hover(
        function() {
            $(this).css('background-color', 'lightgreen');
        }, 
        function() {
            $(this).css('background-color', 'lightblue');
        }
    );

    $('#fadeButton').click(function() {
        $('#box').fadeToggle();
    });

    $('#slideButton').click(function() {
        $('#box').slideToggle();
    });

    $('#animateButton').click(function() {
        $('#box').animate({
            width: '200px',
            height: '200px'
        }, 1000, function() {
            // Animation complete.
            $(this).animate({
                width: '100px',
                height: '100px'
            }, 1000);
        });
    });
});
