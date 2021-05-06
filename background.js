
let bubbles = [];
var canvas;

function setup() {
 canvas= createCanvas(windowWidth,windowHeight);
       canvas.style('z-index','-1');
    canvas.position(0,0);
    
  for (let i = 0; i <13; i++) {
    bubbles[i] = new Bubble(windowWidth*0.7, 500, 10); 
  }
}


function draw() {
  background(240);
    
 
    
  for (let i = 0; i < bubbles.length-1; i++) {
     bubbles[i].move();
    
   for (let j = i+1; j < bubbles.length-1; j++) {
    
    bubbles[i].moveto(bubbles[j]);
    bubbles[i].show();
    line(bubbles[i].x,bubbles[i].y,bubbles[j].x,bubbles[j].y);
     }
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  moveto(n)
{if ((abs(this.x-n.x)*abs(this.x-n.x)+abs(this.y-n.y)*abs(this.y-n.y))<90000){
  let v1=n.x-this.x;
  this.x = this.x - v1/100;
 let v2=n.y-this.y;
    this.y = this.y - v2/100;}
 
 if ((abs(this.x-n.x)*abs(this.x-n.x)+abs(this.y-n.y)*abs(this.y-n.y))>90000){
  let v1=n.x-this.x;
  this.x = this.x + v1/100;
 let v2=n.y-this.y;
    this.y = this.y + v2/100;}
}
  
  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.x, this.y, this.r * 2);
  }
}
