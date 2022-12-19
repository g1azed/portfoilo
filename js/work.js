
$(document).ready(function () {
    $('.slick_slide').slick({
        rows: 1,             //몇 줄로 나타낼건지
        infinite: false,      //무한반복 (boolean) -default:true
        slidesToShow: 1,     //한번에 보여지는 갯수
        slidesToScroll: 1,   //한번에 넘겨지는 갯수
        slidesPerRow: 1,     //보여질 행의 수 (한 줄, 두 줄 ... )
        vertical: true,      //세로방향 여부 (boolean) -default:false
        verticalSwiping: true,     //세로방향 스와이프 여부 (boolean) -default:false
        dots: true,         //네비게이션버튼 (boolean) -default:false
        // appendDots: $('#dots'), //네비게이션버튼 변경 (선택자 혹은 $(element))
        // dotsClass: 'custom_dots', //네비게이션버튼 클래스 변경
        arrows: false,
        draggable: true,
        responsive: [
            {
                breakpoint: 1024,   //width 1024 이상부터
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,   //width 480 이상부터
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ] //반응형, breakpoint: 반응형 구간, settings: 반응형 구간에 따른 설정 변경


    });

    $(".inner_slider").slick({
        slidesToShow: 1,
        arrows: true,
        vertical: false,
        prevArrow : "<button type='button' class='slick-prev'> < </button>",		// 이전 화살표 모양 설정
        nextArrow : "<button type='button' class='slick-next'> > </button>",		// 다음 화살표 모양 설정
         
    })

    $('.slick_slide').on('wheel', function (e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
    });
// 오른쪽텍스트영역에서만 전체스크롤링가능,,,
    $(".slide_left").on('wheel', function(e) {
        e.stopPropagation();
    })

// 현재 보여지는 슬라이드가 몇번인지
   const slick_num =  $('.slick_slide').slick('slickCurrentSlide'); 
   slick_num[0].on('wheel', function(e) {
    e.stopPropagation();
})
    // 텍스트 접었다 펴기
    // $('.work_sub').each(function () {
    //     var content = $(this).children('.sub_report');
    //     var content_txt = content.text();
    //     var content_txt_short = content_txt.substring(0, 100) + "...";
    //     var btn_more = $('<a href="javascript:void(0)" class="more">⌄</a>');

    //     $(this).append(btn_more);

    //     if (content_txt.length >= 1000) {
    //         content.html(content_txt_short)
    //     } else {
    //         btn_more.hide()
    //     }

    //     btn_more.click(toggle_content);
    //     // 아래 bind가 안 되는 이유는??
    //     // btn_more.bind('click',toggle_content);

    //     function toggle_content() {
    //         if ($(this).hasClass('short')) {
    //             // 접기 상태
    //             $(this).html('⌄');
    //             content.html(content_txt_short)
    //             $(this).removeClass('short');
    //         } else {
    //             // 더보기 상태
    //             $(this).html('⌃');
    //             content.html(content_txt);
    //             $(this).addClass('short');

    //         }
    //     }
    // });

});

