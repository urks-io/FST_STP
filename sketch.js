


function setup() {
  createCanvas(400, 600);

}

function draw() {
   background(15, 10, 95);
   noStroke();
  fill(255, 204, 0, 99);
  circle(233, 153, 250);
 
 
  translate(200, 220);
 

  fill(255, 204, 0);
 beginShape();
 vertex(40,20);
  vertex(40,120);
  vertex(60, 100);
  vertex(40, 220);
  vertex(60, 200);
  vertex(40, 340);
  vertex(120, 150);
  vertex(100, 170);
  vertex(120, 70);
  vertex(100, 90);
  vertex(120, 20);
  endShape(CLOSE);


  createColorPicker();

}