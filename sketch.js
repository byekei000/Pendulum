var accerlaration = 0;//m/s^2
var velocity = 0;//m/s
var length = 600;//centimeters
var x = 0;//centimeters
var penHeight = 0;//centimeters
var y = length;//centimeter
var gravity = 9.8;//m/s^2
var mouseIsPressed = false;
var a = 0;
var w;
var period;
var frame = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  x = a;
  penHeight = 0;
  period = 2*PI*sqrt(length/gravity);
  w = (2*PI)/period;
}

function draw() {
  background(51);
  if(mouseIsPressed){
    a = mouseX-width/2;
    x = a;
    penHeight = length-sqrt(pow(x,2)+pow(length,2));
    frame = 0;
  } else update();
  drawPendulum();
  frame++;
}

function update(){
  x = a*cos(w*frame);
  penHeight = length-sqrt(pow(x,2)+pow(length,2));
}

function drawPendulum(){
  translate(width/2,0);
  stroke(255);
  line(0,0,x,y+penHeight);
  ellipse(x,y+penHeight,50,50);
}

function mousePressed(){
  mouseIsPressed = true;
}
