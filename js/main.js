$('document').ready(
        function () {
            $('.myName').hide().delay(500).fadeIn(700);
            $('.label').bind('mouseover',animateLabel);
            function animateLabel(){
                $('.label').addClass('animated flash');
            }
        }
);

