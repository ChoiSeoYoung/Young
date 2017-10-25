function setup() {  
  createCanvas(windowWidth, windowHeight);  
  background(250, 0, 0);
}

function draw() {  
  background(250, 250, 250);  
  randomSeed(0);  
  var x, y; 
  var delta = map(mouseX, 0, windowWidth, 10, 100);  
  var thickness = map(mouseY,0,windowHeight,6,30);  
  for (var x=0; x<windowWidth; x+=delta) {   
    for (var y=0; y<windowHeight; y+=delta){      
      var r1 = random(0,1);       
      var r2 = random(0,1);            
      if (r1<0.5){        
        stroke(120,40,200);        
        strokeWeight(thickness);       
        line(x, y, x+delta, y+delta);      
      }      
      if (r2<0.5){        
        strokeWeight(2);        
        stroke(0);        
        line(x+delta, y, x, y+delta);              
      }    
    }    
  }
}

