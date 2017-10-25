var max_planets  = 100;
var planets = [];
function planet(x,y,vx,vy,sz,c) {  
  this.x = x;  
  this.y = y;  
  this.vx = vx;  
  this.vy = vy; 
  this.sz = sz;  
  this,c = c;  
  this.move = function() {    
    this.x += this.vx;    
    this.y += this.vy;    
    if (this.x<0 || this.x>windowWidth) this.vx = -this.vx;    
    if (this.y<0 || this.y>windowHeight) this.vy = -this.vy;  
  }  
  this.render = function() {    
    noStroke();    
    fill(this.c);   
    ellipse(this.x, this.y, this.sz, this.sz)  
  }
}
function setup () {  
  createCanvas(windowWidth, windowHeight);  
  var i;  
  for (i=0; i<max_planets; i++) {    
    planets[i] = new planet (      
      random(0,windowWidth), random(0,windowHeight),      
      random(-2,2), random(-2,2), random(10,100), color((0,255),0,0)    
    )        
  }
}
function draw () {  
  background(255);  
  var i;  
  for (i=0; i<max_planets; i++) {    
    planets[i].move();   
    planets[i].render();
  }
}
