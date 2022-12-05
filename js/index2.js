$(document).ready(function () {
	// var target = $('.target');
	// var zoom = target.data('zoom');

  // 마우스 커서 이벤트
  const circle = document.querySelector(".circle");
  document.addEventListener("mousemove", (e) => {
    // mousemove이벤트를 이용해 움
    // 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.
    // pageX, pageY와는 다름.

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    circle.style.left = mouseX + "px";
    circle.style.top = mouseY + "px";
  });
  
  const main_lg = $("#main_lg");
  main_lg[0].addEventListener("mouseenter", (e) => {
    console.log("mouseenter");
    $(".circle").css('width','100px').css('height','100px');
  })
  main_lg[0].addEventListener("mouseleave", (e) => {
    console.log("mouseleave");
    $(".circle").css('width','10px').css('height','10px');
  })



});

var text = new Blotter.Text("洪秀知", {
  family: "'Noto Serif HK', serif",
  size: 330,
  fill: "#fff",
  paddingLeft: 40,
  paddingRight: 40,
});

var material = new Blotter.LiquidDistortMaterial();
// material.uniforms.uSpeed.value = 0.25;

// Try uncommenting the following line to play with
// the "volatility" of the effect. Higher values here will
// produce more dramatic changes in the appearance of your
// text as it animates, but you will likely want to keep
// the value below 1.0.
// material.uniforms.uVolatility.value = 0.20;

var blotter = new Blotter(material, {
  texts: text,
});

var elem = document.getElementById("main_lg");
var scope = blotter.forText(text);

scope.appendTo(elem);
// Mouse Effect

// document.onmousemove = moveIt;
// function moveIt(event) {
//   material.uniforms.uVolatility.value = (event.clientX * .2);
//   material.uniforms.uVolatility.value = (event.clientY * 0.00025);
// }