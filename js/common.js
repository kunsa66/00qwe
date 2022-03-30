$(window).load(function(){

    clickEvent();
    subMenu();
    search();
    scrollHeader();
    mobile();
    maxboneAnimation();
    newItem()
    footerAnimation()
    footerInfo()
    topBtn()
    scrollLoadAnimation()

})


function clickEvent(){

    var $img = $('<div id="click-img"> </div>');

    $('body').on('click', function(e){

        var $pX = e.pageX;
        var $pY = e.pageY;
        var $randomNum = Math.floor(Math.random()*8)+1

        $img.remove();
        $img.removeClass();
        $img.appendTo('body')

        $img.addClass('bg0'+$randomNum);
        $img.css({
            'top':$pY,
            'left':$pX
        })


    })

}

function subMenu(){
    $('.submenu-list').hide()
    var $ball = $('div.menu-active-ball');
    $('.mainmenu-list > li').on('mouseenter', function(){
        $ball.addClass('on');
        $ball.stop().animate({'left':($(this).position().left + $(this).innerWidth()/2) -$ball.innerWidth()/2},300)
        $('.submenu-list').hide()
        $(this).children('.submenu-list').stop().fadeIn(0);
    })
    $('.mainmenu-list').on('mouseleave', function(){
        $ball.removeClass('on');
        $('.submenu-list').hide()
    });
}

function search(){
    $('.search-wrapper').hide(0)
    $('.search-btn').on('click', function(){
        $('.search-wrapper').show(0,function(){
            $(this).addClass('on');
            $(this).on('scroll touchmove mousewheel DOMMouseScroll', function(e){
                e.preventDefault(); //기본으로 적용되는 이벤트를 막는 구문
                e.stopPropagtion(); //부모요소로 이벤트가 올라가는 걸 방지
                return false
            })
        }) 
        $('.gnb-wrapper').hide(0)
        return false
        //mousewheel 이벤트 시에 주의할 점
        //파이어폭스랑 크롬은 마우스휠 이벤트가 다르므로 같이 넣어주는 것이 좋다.
        //mousewheel = 크롬 , DOMMouseScroll = 파이어폭스
            
    })
    $('.close-btn').on('click', function(){
        $('.search-wrapper').fadeOut(300);
        $('.search-wrapper').removeClass('on');
        $('.gnb-wrapper').show(0)
        $('.search-wrapper').off('scroll touchmove mousewheel DOMMouseScroll')
    })

}

function scrollHeader(){

    $(window).on('scroll mousewheel DOMMouseScroll', function(e){
        var $scrollH = $(window).scrollTop()
        //console.log(e.originalEvent.wheelDelta)

        if($scrollH >= 100){
            $('.header-wrapper').addClass('on')
        }else{
            $('.header-wrapper').removeClass('on')
        }

        if($scrollH >= 500 && e.originalEvent.wheelDelta > 0){
            $('.header-wrapper').css({'top':'0'})
        }else if($scrollH > 500 && e.originalEvent.wheelDelta < 0){
            $('.header-wrapper').css({'top':'-100%'})
        }


    })
}

function mobile(){
    $('nav.mobile-gnb').hide(0);

    $('.mobile-menu-btn').on('click', function(){
        $('nav.mobile-gnb').fadeIn(200);
        $('nav.mobile-gnb').addClass('on')
    })

    $('.mobile-close-btn').on('click', function(){
        $('nav.mobile-gnb').hide(0,function(){
            $('nav.mobile-gnb').removeClass('on')
        })
    })


}

function maxboneAnimation(){

    setInterval(function(){
        $('div.maxbone-ani span').addClass('on')
        setTimeout(function(){
            $('div.maxbone-ani span').removeClass('on')
        },1500)
    },2000)
}

// function newItem(){

//     $('.new-item-slider ul').slick({
//         slidesToShow : 3,
//         slidesToScroll : 1,
//         infinite : false,
//         prevArrow : $('.new-prev-arrow'),
//         nextArrow : $('.new-next-arrow'),

//     })
//     // var $itemW = $('.slick-slide').outerWidth(true)
//     // $('.slick-track').css({'marginLeft':-$itemW})
//     // console.log($itemW)

//     pageNavigation()
//     function pageNavigation(){
//         var $totalPage = $('.new-item-slider ul li').size()-2
//         var $currentPage = parseInt($('.slick-current').data('slick-index')+1)

//         $('.slick-arrow').on('click', function(){
//             $currentPage = parseInt($('.slick-current').data('slick-index')+1)
//             $('.current-page').html('0'+$currentPage);
            
//             console.log($totalPage)

//             if($currentPage >= $totalPage){
//                 $('.new-next-arrow').addClass('slick-disabled')
//             }
            
//         })
//         $('.current-page').html('0'+$currentPage);
//         $('.total-page').html('0'+ $totalPage)
        
//     }

    
//     // 영역값을 가져오는 메서드
//     // width(), innerWidth(), outerWidth(), outerWidth(true)
//     // width : 순수한 영역값 (여백을 제외한 순수한 width값)
//     // innerWidth : width + padding값
//     // outerwidth : width + padding + border
//     // outerWidth(true) : width + padding + border+ margin
    
    


// }

function newItem(){

    var $newSlider = $('.new-item-slider ul');
    var $newSliderOp = {
            slidesToShow : 3,
            slidesToScroll : 1,
            infinite : false,
            prevArrow : $('.new-prev-arrow'),
            nextArrow : $('.new-next-arrow'),
    }//$newSliderOp

    newSlideAction()
    $(window).on('load resize', newSlideAction)

    function newSlideAction(){
        if($(window).innerWidth() < 540){
            $newSlider.slick('unslick') //slick을 해제하는 명령어 unslick
        }else{
            $newSlider.not('.slick-initialized').slick($newSliderOp)
            pageNavigation()
            //not = 특정 선택자 제외
        }
    }
    function pageNavigation(){
        var $totalPage = $('.new-item-slider ul li').size()-2
         var $currentPage = parseInt($('.slick-current').data('slick-index')+1)

         $('.slick-arrow').on('click', function(){
             $currentPage = parseInt($('.slick-current').data('slick-index')+1)
             $('.current-page').html('0'+$currentPage);
            
             console.log($totalPage)

            if($currentPage >= $totalPage){
                $('.new-next-arrow').addClass('slick-disabled')
             }
            
         })
        $('.current-page').html('0'+$currentPage);
        $('.total-page').html('0'+ $totalPage)
     }
    }

function footerAnimation(){
    var $footerItem = $('.footer-layer');

    setInterval(function(){
        $footerItem.addClass('on');
        setTimeout(function(){
            $footerItem.removeClass('on')
        },900)
    },1200)
}

function footerInfo(){
    $('.footer-text').slideUp(0)

    $('.footer-info-btn').on('click', function(){
        $('.footer-text').stop().slideToggle();
        $(this).children().toggleClass('on');
    })
}
function topBtn(){
    $('.top-btn').on('mouseenter', function(){
        var topItem = Math.round(Math.random()*3)+1
        
        $('.top-btn-layer').children().removeClass()
        $('.top-btn-layer').children().addClass('top-icon0'+topItem)
    })
    $('.top-btn').on('mouseleave',function(){
        $('.top-btn-layer').children().removeClass()
    })
    $('.top-btn').on('click', function(){
        $('body,html').animate({scrollTop:0},500)
        $('.header-wrapper').css({'top':'0'})
        return false
    })

    $(window).on('scroll', function(){
        var $scrollT = $(window).scrollTop();
        var $domH = $(document).innerHeight() - ($(window).innerHeight() + $('.footer-wrapper').innerHeight())
        console.log($domH)
        console.log($scrollT)
        //전체 body의 높이값을 알아내는 공식
        //document의 높이값 - window의 높이값

        if($scrollT < $domH){
            $('.top-btn').addClass('on')
        }else{
            $('.top-btn').removeClass('on')
        }


    })

}

function scrollLoadAnimation(){
    
    $(window).on('scroll', function(){

        $('.load-ani').each(function(index,item){
            var $items = $(item).offset().top - $(window).innerHeight()
            var $scrollT = $(window).scrollTop();

            if($scrollT > $items){
                $(item).addClass('on');
            }
        })

        $('.cotie-gallery li').each(function(index, item){
            var $items = $(item).offset().top - $(window).innerHeight()
            var $scrollT = $(window).scrollTop();

            if($scrollT > $items){
                $(item).addClass('on')
            }
        })


    })

    
}