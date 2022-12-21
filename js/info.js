
$(document).ready(function () {
  var clipboard = new ClipboardJS('.copy');
  clipboard.on('success', function () {
    alert('복사되셨습니다!');
  });
  clipboard.on('error', function () {
    alert('복사 실패');
  });



})


$(window).scroll(function () {
	var scrollValue = $(document).scrollTop();
	// console.log(scrollValue);

  if(scrollValue >= 280){
    changeIMG();
  }else{
    changeIMG_2();
  }
});


// 이미지체인지 ex
function changeIMG() {
  //img 태그의 아이디로 변경 할 때
  // $("#imgID").attr("src", "/data/img2.png");

  //img 태그의 클래스 명으로 변경 할 때
  // $(".imgClass").attr("src", "/data/img2.png");
  // $(".back").css("background-image", "../img/info/conceptshot/concept_3.png");
  
  $(".back").css({
    "background":"url('../img/info/conceptshot/concept_3.png')",
    "background-size" : "contain",
    "background-repeat": "no-repeat"
  }); 	

}
function changeIMG_2() {
  $(".back").css({
    "background":"url('../img/info/conceptshot/concept_2.png')",
    "background-size" : "contain",
    "background-repeat": "no-repeat"
  }); 	
}


// 패럴랙스
$(".back").css("height", $(window).height());
$(window).scroll(function (e) {
  parallax();
});
function parallax() {
  var scrolled = $(window).scrollTop();
  $(".back").css("background-position-y", (scrolled * 0.8) + "px");
}

// 스크롤 시 백그라운드 이미지 경로 바꾸기
// function bgIMG_change(){
//   $(".sec1").scroll(function(){
//     const scrollT = $(this).scrollTop();
//     const scrollsecH = $(this).height();
//     const documentH = $(document).height();
//     if(scrollT + scrollsecH +1 >= documentH){
//       $()
//     }
//   })
// }
