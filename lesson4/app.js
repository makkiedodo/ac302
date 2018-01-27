console.log("test....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var pixelgun = new Image();
pixelgun.src = "image.png";

pixelgun.onload = function(){
	ctx.drawImage(pixelgun, 150,150,100,100);
}

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

ctx2.fillStyle = "cyan";
ctx2.fillRect(0,0,800,350);

ctx2.fillStyle = "green";
ctx2.fillRect(0,350,800,150);


var pixelgun = new Image();
pixelgun.src = "image.png";

pixelgun.onload = function(){
	ctx2.drawImage(pixelgun, 150,150,100,100);
}

