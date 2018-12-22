// slick slider init
$(document).ready(function(){
    $('.slick-slider').slick();
});

// slick slider arrows attach
$(document).ready(function(){
    $('i.fas.fa-chevron-left').on('click', function (e) {
        e.preventDefault();
        $('.slick-prev').click();
    });
    $('i.fas.fa-chevron-right').on('click', function (e) {
        e.preventDefault();
        $('.slick-next').click();
    });
});

// email input validation
$(document).ready(function(){
    $('.footer-block.subscribe button').on('click', function (e) {
        e.preventDefault();
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var address = $('.footer-block.subscribe input').val();
        console.log(address);
        if (reg.test(address) == false) {
            alert('Invalid e-mail');
            return false;
        }
    });
});