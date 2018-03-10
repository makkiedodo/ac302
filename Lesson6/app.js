console.log("test....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var WIDTH = 600;
var HEIGHT = 600;


var x = 300;
var y = 300;
var s = 50;


var mx = 0;
var my = 0;

var itemX;
var itemY;
var itemS = 50;

var collision = false;

var score = 0;

function drawPlayer(){
var player = new Image();
player.src = "1200px-Pac_Man.svg.png";
ctx.drawImage(player,x,y,s,s)	
}

function drawItem(){
var item = new Image();
item.src = "1200px-Pac_Man.svg.png";
ctx.drawImage(item,itemX,itemY,itemS,itemS);	
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}


function init(){
	itemX = Math.floor(Math.random()*(WIDTH - itemS));
	itemY = Math.floor(Math.random()*(HEIGHT- itemS));
window.onkeydown = keydownControl;
return setInterval(draw, 10);

}


function keydownControl(e){
	if(e.keyCode == 37){
		mx= -4;
		my = 0;

	}else if(e.keyCode == 38){
		mx = 0;
		my = -4;
	

	}else if(e.keyCode == 39){
		mx = 4;
		my = 0;

	}else if(e.keyCode == 40){
		mx = 0;
		my = 4;
	}
}


function draw(){
	clear();
	drawPlayer();
	drawItem();

if(x+mx < 0 || x+mx > WIDTH -s){
	mx = -mx;
}

if(y+my < 0 || y+my > HEIGHT -s){
	my = -my;
}

x +=mx;
y +=my;

collisionCheck();
collisionHandle();

}

function collisionCheck(){
	if((x+s >=itemX)&&(x <=itemX + itemS)&&
		(y+s >=itemY)&&(y <= itemY + itemS)){
		collision = true;
	}else {
		collision = false;
	}
}

function collisionHandle(){
	if(collision){
	itemX = Math.floor(Math.random()*(WIDTH - itemS));
	itemY = Math.floor(Math.random()*(HEIGHT- itemS));	
	score += 1;
	document.getElementById("score").innerHTML = "score:" + score;


	}
}



init();


