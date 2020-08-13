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

    // var wow = new WOW({
    //     animateClass: 'animated',
    //     offset: 100
    // });
    // wow.init();


    //Auto complete
    var options = {
        data: [{name: "Алгебра 8 сынып"},
            {name: "Геометрия 8 сынып"},
            {name: "Химия 8 сынып"}],


        getValue: "name",

        template: {
            type: "custom",
            method: function (value, item) {
                return `
                    <a href="">
                        <div class="search-item">
                            <div class="search-item-img">
                                <img src="img/main/math.png" alt="">
                            </div>
                            <div class="search-item-caption">
                                <h4>${value}</h4>
                                <div class="rate-list">
                                    <img src="img/icon/star-orange.svg" alt="">
                                    <img src="img/icon/star-orange.svg" alt="">
                                    <img src="img/icon/star-orange.svg" alt="">
                                    <img src="img/icon/star-orange.svg" alt="">
                                    <img src="img/icon/star-grey-br.svg" alt="">
                                </div>
                            </div>
                            <span>таңдау</span>
                        </div>
                    </a>
                 `;
            }
        }
    };
    //Auto complete

    $(".search-complete").easyAutocomplete(options);

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







