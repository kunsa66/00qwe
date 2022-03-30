$(window).load(function(){

    $('.bottom-menu-gnb').slideUp(0);
    $('.bottom-menu-gnb02').slideUp(0);
    $('<div class="sub-bg"></div>').slideUp(0);
    $('.search-form').slideUp(0);

    
    mainGnb()
    infoSlider()
    todaySellerSlider()
    promoSlider()
    magazinSlider()


    $(window).on('scroll' , function(){
        var $headertopH = $('.header-top-wrapper').innerHeight();
        var $scrollTop = $(window).scrollTop();
        console.log($scrollTop)

        if($scrollTop >= $headertopH){
            $('.header-bottom-wrapper').css({
                position : "fixed" , 
                top : "0px",
                backgroundColor : "#ffffff"
            })
            $('.bottom-menu-gnb').css({position : "fixed" , top : "0px"})
            $('.bottom-menu-gnb02').css({position : "fixed" , top : "0px"})
            $('.sub-bg').css({position : "fixed" , top : "0px"})
            $('.search-form').css({position : "fixed" , top : "0px"})
        }else if($scrollTop < $headertopH){
            $('.header-bottom-wrapper').css({
                position : "absolute" , 
                top : "34px",
                backgroundColor : "rgba(255, 255, 255, 0.5)"
            })
            $('.bottom-menu-gnb').css({position : "absolute" , top : "34px"})
            $('.bottom-menu-gnb02').css({position : "absolute" , top : "34px"})
            $('.sub-bg').css({position : "absolute" , top : "34px"})
            $('.search-form').css({position : "absolute" , top : "34px"})
        }
    })
})

function mainGnb(){
    var $mainMenuOne = $('.bottom-menu01 ul').children().eq(0)
     var $mainMenuTwo = $('.bottom-menu01 ul').children().eq(1)
     var $subMenuOne = $('.bottom-menu-gnb')
     var $subMenuTwo = $('.bottom-menu-gnb02')
     //
    var $search = $('.search');
    var $searchForm = $('.search-form')
    var $close = $('button.button')
    var $open = false;
    //

     var $subBg = $('<div class="sub-bg"></div>')
     $subBg.appendTo('.sub-bg-menu');

     $subMenuOne.slideUp(0);
     $subMenuTwo.slideUp(0);
     $subBg.slideUp(0);
     //
     $searchForm.slideUp(0);
     //

    $mainMenuOne.on('mouseenter focus', onMenuOver01);
    $mainMenuTwo.on('mouseenter focus', onMenuOver02);
    $('.sub-bg-menu').on('mouseleave', outMenuOver);
    //
    $search.on('click' , searchBarOpen)
    $close.on('click', searchBarClose)
    //

    function onMenuOver01(){
        outMenuOver()
        $subMenuOne.stop().fadeIn(1000);
        $subBg.stop().slideDown(400);
    }

    function onMenuOver02(){
        outMenuOver()
        $subMenuTwo.stop().fadeIn(1000);
        $subBg.stop().slideDown(400);
    }

    function outMenuOver(){
        $subMenuOne.stop().fadeOut(300);
        $subMenuTwo.stop().fadeOut(300);
        $subBg.stop().slideUp(600);
    }

    //
    function searchBarOpen(){

        if($open == false){
            $subMenuOne.slideUp(200);
            $subMenuTwo.slideUp(200);
            $subBg.slideUp(200);
            $searchForm.slideDown(600);
            $open = true;
            return false;
        }
    }

    function searchBarClose(){
        if($open == true){
            $searchForm.slideUp(400);
            $open = false;
        }
    }
    //
}

function infoSlider(){
    $('.visual-img-list').slick({
        slidesToShow : 3,
        slidesToScroll : 3,
        autoplay : true,
        autoplaySpeed : 5000,
        dots : true,
        arrows : false,
        pauseOnDotsHover : true,
        pauseOnFocus : false,
        pauseOnHover : true,
    })
}

function todaySellerSlider(){
    $('.seller-content-slide').slick({
        slidesToShow : 2,
        slidesToScroll : 1,
        autoplay : true,
        autoplaySpeed : 5000,
        dots : true,
        arrows : false,
        pauseOnDotsHover : true,
        pauseOnFocus : false,
        pauseOnHover : true,
    })

    
}

function promoSlider(){
    $('.promo-slider').slick({
        slidesToShow : 3,
        slidesToScroll : 3,
        // autoplay : true,
        autoplaySpeed : 5000,
        dots : true,
        arrows : true,
        pauseOnDotsHover : true,
        pauseOnFocus : false,
        pauseOnHover : true,
    })
}

function magazinSlider(){
    $('.magazin-list').slick({
        slidesToShow : 3,
        slidesToScroll : 3,
        // autoplay : true,
        autoplaySpeed : 5000,
        dots : true,
        arrows : true,
        pauseOnDotsHover : true,
        pauseOnFocus : false,
        pauseOnHover : true,
    })
}

