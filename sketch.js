// Simple Circle Drawing code using Arrays & Functions
// Written by Jusub Kim, 2017 / jusub@sogang.ac.kr
var cx = [];
var cy = [];
var N, i;
function setup() {
	frameRate(10)
	createCanvas(windowWidth,  windowHeight);
	initCircles();
}
function draw() {
	background(255);
  
	var c = color(255,0,0);
	drawCircles(c);
  
	c = color(0,0,255);
	drawCircles(c);
}
// initialize circle positions

function initCircles() {
	N = 10;
	for (i=0; i<N; i++) {
		cx[i] = random(0, width);
		cy[i] = random(0, height);
	}
}
// draw circles with a given color
function drawCircles( c ) {
	background(200);
	Fill(255);
	stroke(c, 250);
	strokeWeight(3);
	for (i=0; i<N; i++) {
		cx[i] = cx[i] + random(-10, 10);
		cy[i] = cy[i] + random(0, 10);
    ellipse(cx[i], cy[i], 80, 80);
	}
}