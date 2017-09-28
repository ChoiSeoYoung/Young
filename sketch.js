var cx = [];
var cy = [];
var N, i;
function setup() {
  createCanvas(windowWidth,  windowHeight);
  initCircles(); }
function draw() {
  background(255);
  
  var c = color(255,0,0);
drawCircles(c);
  
  c = color(0,0,255);
drawCircles(c);
}
function initCircles() {
  N = 10;
  for (i=0; i<N; i++) {
    cx[i] = random(0, width);
    cy[i] = random(0, height);
  } }
function drawCircles( c ) {
  noFill();
  stroke(c, 50);
  strokeWeight(3);
  for (i=0; i<N; i++) {
    cx[i] = cx[i] + random(-10, 10);
    cy[i] = cy[i] + random(-10, 10);
    ellipse(cx[i], cy[i], 80, 80);
  }
}