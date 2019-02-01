var accerlaration = 0;//m/s^2
var velocity = 0;//m/s
var length = 4;//meters
var x = 0;//meters
var penHeight = 0;//meters
var y = length;//meters
var gravity = 9.8;//m/s^2
var mouseIsPressed = false;
var a = 0;//amplitude
var w;//angular velocity
var period;//seconds
var time = 0;//seconds
var frame = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  x = a;
  penHeight = 0;
  period = 2*PI*sqrt(length/gravity);
  w = (2*PI)/period;
	console.log("period is: " + round(period*100)/100);
	console.log("angular velocity is: " + round(w*100)/100);
}

function draw() {
  background(51);
	if(keyIsDown(87)){
		 noLoop();
	}
  if(mouseIsPressed){
    a = (mouseX-width/2)/100;
    x = a;
    penHeight = length-sqrt(pow(length,2)-pow(x,2));
    time = 0;
  } else update();
  drawPendulum();
  time+=1/60;
	frame++;
	if(frame % 10 == 0){
		console.log("velocity is:" + round(sqrt(gravity*penHeight*0.5)*100)/100);
	}
}

function update(){
  x = a*cos(w*time);
  penHeight = length-sqrt(pow(length,2)-pow(x,2));
}

function drawPendulum(){
  translate(width/2,0);
  stroke(255);
  line(0,0,x*100,y*100-penHeight*100);
  ellipse(30,y*100-penHeight*100,50,50);
}

function mousePressed(){
  mouseIsPressed = true;
}

function keyReleased(){
	if(keyCode == 87){
		loop();
	}
}

