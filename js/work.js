
$(document).ready(function(){
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

    $('.slick_slide').on('wheel', function(e) {
        e.preventDefault();
      
        if (e.originalEvent.deltaY < 0) {
          $(this).slick('slickPrev');
        } else {
          $(this).slick('slickNext');
        }
      });
      
  });