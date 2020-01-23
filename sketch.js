function setup() {
  createCanvas(400, 600);


}

function draw() {
   background(15, 10, 95);
   stroke(4);
  let a = color('rgb(255, 204, 0)');
let b = color('rgb(0,111,255)');
  let c = color('rgb(0, 0, 0)');
  let d = color('rgb(255, 255, 255)');
  
  
  var i;
  var number = 1
for (i = 1; i < 100; i++) {
  //stroke();

    if(i%2){
      stroke(d);
    }else if (i%3){
      stroke(b);
    }else if (i%4){
      stroke(c);
    }else{
      stroke(b);
    }
    number++
  noFill;
  stroke(15);
  var x = number * i;
  circle(233, 153, 2*i);
      
}
  
  fill(a);
  circle(233, 153, 430);
  fill(b);
  circle(233, 153, 415);
  fill(c);
  circle(233, 153, 400);
  fill(d);
  circle(233, 153, 385);
  fill(a);
  circle(233, 153, 370);
  fill(b);
  circle(233, 153, 355);
  fill(c);
  circle(233, 153, 340);
  
fill(d);
  circle(233, 153, 325);
   fill(a);
   circle(233, 153, 310);
  
   fill(b);
   circle(233, 153, 295);
  
   fill(c);
   circle(233, 153, 280);
   fill(d);
   circle(233, 153, 265);
  
  
   fill(255, 204, 0);
   circle(233, 153, 250);
 
 
  push();
   translate(100, 220);

noStroke();
   fill(255, 204, 00);
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
  line(50, 110, 48, -30);
  line(0, 350, 104, 20);
 pop();
 // push();
 // translate(70,180);
 // rotate(PI/10);
// beginShape();
//   vertex(0, 350);
//   vertex(-2, 200);
//   vertex(22, 210);
//   vertex(18, 100);
//   vertex(50, 110);
//   vertex(48, -20);
//   vertex(110, 0);
//   vertex(0,350);
//   endShape();
//   pop();


}