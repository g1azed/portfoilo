$(document).ready(function () {

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
  
  // const main_lg = $("#main_lg");
  // main_lg[0].addEventListener("mouseenter", (e) => {
  //   // console.log("mouseenter");
  //   $(".circle").css('width','100px').css('height','100px');
  // })
  // main_lg[0].addEventListener("mouseleave", (e) => {
  //   // console.log("mouseleave");
  //   $(".circle").css('width','10px').css('height','10px');
  // })

});

var textvh = $(window).innerWidth() * 0.5; // 5.33 vh
var text = new Blotter.Text("洪秀知", {
  family: "'Noto Serif HK', serif",
  size: 330,
  fill: "#fff",
});

var material = new Blotter.ChannelSplitMaterial();
// material.uniforms.uSpeed.value = 0.25;

material.uniforms.uOffset.value = 0.95;
material.uniforms.uRotation.value = 30;
material.uniforms.uApplyBlur.value = 1; // 0 false, 1 true
material.uniforms.uAnimateNoise.value = .2;
var blotter = new Blotter(material, {
  texts: text,
});

var elem = document.getElementById("main_lg");
var scope = blotter.forText(text);

scope.appendTo(elem);


// Mouse Effect
document.onmousemove = moveIt;
function moveIt(event) {
  material.uniforms.uRotation.value = (event.clientX * .1);
  material.uniforms.uOffset.value = (event.clientX * .0001);
}
