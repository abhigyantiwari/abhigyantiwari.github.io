$('document').ready(
        function () {

            $('.myName').hide().delay(500).fadeIn(700);
            $('.btn').on('mouseover', function(){
            	$(this).addClass('animated pulse infinite');
            })
            $('.btn').on('mouseout', function(){
            	$(this).removeClass('animated pulse infinite');
            })
        }
);

