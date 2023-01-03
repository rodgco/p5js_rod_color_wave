rez1 = 0.01;
rez2 = 0.008;
rez3 = 0.006;
let tam = 30;
let gap = -8;

let lets = ['r','o','d','r','i','g','o'];

n2off = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB,360,120,100,255);
  
  textSize(tam);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,0,25);
  for (x = 0; x<width+tam;x+=tam+gap){
    for (y=0;y<height+tam;y+=tam+gap){
      n2 = noise(x*rez2+10000+n2off,y*rez2+10000+n2off);
      n3 = noise(x*rez1,y*rez1, n2off);
      fill(n2*360,100,90);
      push();
      translate(x,y);
      rotate((n2-0.5)*2*PI);
      text(lets[(x+y)%7],0,0);
      pop();
    }
  }
  n2off += rez2;
}
