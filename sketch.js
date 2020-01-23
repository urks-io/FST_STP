function setup() {
  createCanvas(450, 580);


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
  circle(233, 153, 970);
  fill(b);
  circle(233, 153, 955);
  fill(c);
  circle(233, 153, 940);
  fill(d);
  circle(233, 153, 925);  
  
  fill(a);
  circle(233, 153, 910);
  fill(b);
  circle(233, 153, 895);
  fill(c);
  circle(233, 153, 880);
  fill(d);
  circle(233, 153, 865);   
  
  fill(a);
  circle(233, 153, 850);
  fill(b);
  circle(233, 153, 835);
  fill(c);
  circle(233, 153, 820);
  fill(d);
  circle(233, 153, 805);  
  
  fill(a);
  circle(233, 153, 790);
  fill(b);
  circle(233, 153, 775);
  fill(c);
  circle(233, 153, 760);
  fill(d);
  circle(233, 153, 745);  
  
   fill(a);
  circle(233, 153, 730);
  fill(b);
  circle(233, 153, 715);
  fill(c);
  circle(233, 153, 700);
  fill(d);
  circle(233, 153, 685);
  
  fill(a);
  circle(233, 153, 670);
  fill(b);
  circle(233, 153, 655);
  fill(c);
  circle(233, 153, 640);
  fill(d);
  circle(233, 153, 625);
    
  fill(a);
  circle(233, 153, 610);
  fill(b);
  circle(233, 153, 595);
  fill(c);
  circle(233, 153, 580);
  fill(d);
  circle(233, 153, 565);
  
  fill(a);
  circle(233, 153, 550);
  fill(b);
  circle(233, 153, 535);
  fill(c);
  circle(233, 153, 520);
  fill(d);
  circle(233, 153, 505);
  
  
  fill(a);
  circle(233, 153, 490);
  fill(b);
  circle(233, 153, 475);
  fill(c);
  circle(233, 153, 460);
  fill(d);
  circle(233, 153, 445);
  
  
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
  line(0, 350, -2, 200);
  line(-2, 200, 22, 210);
  line(22, 210, 18, 100);
  line(18, 100, 50, 110);

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