// const html = document.documentElement;

// // window.addEventListener("load", function(){
// //   html.style.setProperty('--x', 0);
// //   html.style.setProperty('--y', 0);
// // });

// html.addEventListener("mousemove", function(e) {
//   html.style.setProperty('--x', e.clientX + 'px');
//   html.style.setProperty('--y', e.clientY + 'px');
// })

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
var elem = document.getElementById("blotter");
var scope = blotter.forText(text);

scope.appendTo(elem);