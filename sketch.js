


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
  translate(100, 260);


  fill(255, 204, 100);
  beginShape();
  vertex(0, 350);
  vertex(-2, 200);
  vertex(22, 210);
  vertex(18, 100);
  vertex(50, 110);
  vertex(48, -20);
  vertex(110, 0);
  vertex(0,350);
  endShape();
  stroke(15, 10, 95);
  line(50, 110, 48, -30)
pop();


}