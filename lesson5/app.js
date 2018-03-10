
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var WIDTH = 600;
var HEIGHT=400;

var x, y;
var mx, my;


function init(){
	x= 300;
	y=200;
	mx = 3;
	my = 4;
	setInterval(update, 10);
}

function drawCircle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28)
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "red";
	ctx.fill();
}

function update(){
	clear();
	drawCircle(x,y,30);
	if(x + mx > WIDTH || x + mx < 0){
		mx = -mx;
	}
	if(y + my > HEIGHT || y + my < 0){
		my = -my;
	}
	x += mx;
	y += my;

}


function clear(){
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

init();