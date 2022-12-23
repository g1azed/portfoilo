
$(document).ready(function () {
  var clipboard = new ClipboardJS('.copy');
  clipboard.on('success', function () {
    alert('복사되셨습니다!');
  });
  clipboard.on('error', function () {
    alert('복사 실패');
  });



})


// 패럴랙스
$(".back").css("height", $(window).height());
$(window).scroll(function (e) {
  parallax();
});
function parallax() {
  var scrolled = $(window).scrollTop();
  $(".back").css("background-position-y", (scrolled * 0.8) + "px");
  // $(".back2").css("background-position-y", (scrolled * 0.8) + "px");
}


