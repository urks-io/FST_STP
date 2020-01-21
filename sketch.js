


function setup() {
  createCanvas(400, 600);
  let from = color(255, 204, 0);
  let to = color(15, 10, 95);

}

function draw() {
   background(15, 10, 95);
   noStroke();
  fill(255, 204, 0);
  circle(233, 153, 250);
 
 
 push();
  translate(100, 320);


  fill(255, 204, 100);
 beginShape();
 vertex(0, 200);
 vertex(0, 120);
 vertex(30, 110);
 vertex(30, 66);
 vertex(60, 54);
 vertex(60, 0);
 vertex(120, 24);
 vertex(0, 200);
  endShape(CLOSE);
pop();



}