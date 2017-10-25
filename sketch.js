function setup() {  
  createCanvas(windowWidth, windowHeight);  
}

function draw() {  
  background(250, 250, 250);  
  randomSeed(0);  
  var x, y, r; 
  var delta = 50;
  var bsprob = map(mouseX, 0, windowWidth, 0,1);  
  var thickness = map(mouseY,0,windowHeight,6,30);  
  for (var x=0; x<windowWidth; x+=delta) {   
    for (var y=0; y<windowHeight; y+=delta){      
      r = random(0,1);                   
      if (r<bsprob){        
        stroke(120,40,200);        
        strokeWeight(thickness);       
        line(x, y, x+delta, y+delta);      
      } 
      else {        
        strokeWeight(2);        
        stroke(0);        
        line(x+delta, y, x, y+delta);              
      }    
    }    
  }
}

