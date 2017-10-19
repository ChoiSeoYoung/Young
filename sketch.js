var max_raindrops = 100; 
var raindrops = []; //array
function raindrop(x, y, vy, sz, c) {  // Make a new object by new function, raindrop
  this.x = x;     
  this.y = y;  
  this.vy = vy;  //velocity y  
  this.sz = sz; //size    
  this.c = c; //color  
  this.move = function() {
    this.y += this.vy;        
    if (this.y<0 || this.y>windowHeight) this.y = 0; //to change the direction of raindrop when it goes out of frame  
  }  
  this.render = function() {    
    noStroke();    
    fill(this.c);    
    ellipse(this.x, this.y, 2, this.sz);     
  }
}
function setup() {     
  createCanvas(windowWidth, windowHeight);  
  var i;  
  for (i=0; i<max_raindrops; i++) {         
    raindrops[i] = new raindrop (
      random(0, windowWidth), random(0,windowHeight),      
      random(10,50), random(30,100), color(255));       
  }
}
function draw() {     
  background(200,200,200);  
  var i;  
  for (i=0; i<max_raindrops; i++) {         
    raindrops[i].move(); //call raindrops[0],raindrops[1], ... and make them move    
    raindrops[i].render();  
  {
  noStroke();
  fill(0);
  ellipse(mouseX, mouseY, 10,20);
}
//if raindrop meet ellipse, then it goes up
