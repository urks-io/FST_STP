


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
 vertex(0, 100);
 vertex(0, 66);
 vertex(15, 60);
 vertex(15, 33);
 vertex(30, 27);
 vertex(30, 0);
 vertex(60, 12);
 vertex(0, 100);
  endShape(CLOSE);
pop();



}