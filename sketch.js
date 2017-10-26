float[] cx;
float[] cy;
int N; 

void setup() {  
  frameRate(10);  
  size(width, height);  
  background(200, 200, 200);  
  position();
}
void position() {  
  N = 100;  
  cx = new float[N];  
  cy = new float[N];  
  for (int i=0; i<N; i++) {    
    cx[i] = random(0, width);    
    cy[i] = random(0, height);  
  }
}  
//for each frame
void draw() {  
  background(200);  
  fill(255);  
  stroke(250);  
  float size = random(5, 15);  
  for (int i=0; i<N; i++) {    
    cx[i] = cx[i] + random(-10, 10);    
    cy[i] = cy[i] + random(0, 10);    
    if (cy[i]>height) cy[i]=0;    
    ellipse(cx[i], cy[i], size, size);  
  }
} 


