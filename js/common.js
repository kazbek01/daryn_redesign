$(document).ready(function () {

    $('.call-menu').click(function(){
        $(this).toggleClass('open');
        $('body').toggleClass('scroll-locked');
        $('.nav-box').toggleClass('nav-box-showed');
        $('.overlay').toggleClass('overlay-showed');
    });

    $('.overlay').click(function () {
        $('body').removeClass('scroll-locked');
        $('.nav-box').removeClass('nav-box-showed');
        $('.call-menu').removeClass('open');
        $('.modal-box').removeClass('showed');
        $(this).removeClass('overlay-showed');
        $(".searchCover").removeClass('search-active');
        $('.modalBox').removeClass('showed');
    })
    $('.close-modal').click(function () {
        $('.overlay').removeClass('overlay-showed');
        $('.modal-box').removeClass('showed');
        $('.modalBox').removeClass('showed');
    })


    $('.clear-search').click(function () {
        var $input = $(".search-complete").val();
        console.log($input.length);
        if($input.length > 1){
            $(".search-complete").val('');
        }else{
            $(".searchCover").removeClass('search-active');
            $(".overlay").removeClass('overlay-showed');
        }

    })

    $('.btn-search').click(function (e) {
        e.preventDefault();
        $(".searchCover").addClass('search-active');
        if(screen.width < 767){
            $(".overlay").toggleClass('overlay-showed');
        }
    })
    if(screen.width < 767){
        $('.overlay').click(function () {
            $(".searchCover").removeClass('search-active');
            $(".overlay").removeClass('overlay-showed');
        })
    }

});







