console.log("test....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

console.log("test2");


var pixelgun = new Image();
pixelgun.src = "image.png";

pixelgun.onload = function(){
	ctx.drawImage(pixelgun, 150,150,100,100);
}