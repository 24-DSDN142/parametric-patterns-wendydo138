//your parameter variables go here!
// let bgColor = color('#ffff81cb');
// let outerEyesColor = color('white');
// let innerEyesColor = color('white');
// let furColor = color('black');
// let innerFurColor = color('white');
let bgColor = "skyblue";
let outerEyesColor = "#fcf803";
let innerEyesColor = "white";
let furColor = "black";
let innerFurColor = "white";
let isHoldingLightstick = true;
let lightStickDistanceX = 0;
let lightStickDistanceY = 0;
let lightStickRotateAngle = 20;
let eyesPosXOffset = 0;
let eyesPosYOffset = 0;
let headPopOut = true;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 270;
  pWallpaper.grid_settings.cell_height = 220;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  //let bgColor = color('skyblue');
  background(bgColor);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  scale(0.8);
  angleMode(DEGREES);

  // let outerEyesColor = color('#fcf803');
  //let innerEyesColor = color('white');
  //let furColor = color('black');
  //let innerFurColor = color('white');

  drawOuterEars(furColor);
  drawInnerEar(innerFurColor);
  drawHead(furColor);
  drawEyes(outerEyesColor, innerEyesColor, eyesPosXOffset, eyesPosYOffset, headPopOut);
  drawMoustache(furColor);
  drawOuterBody(furColor);
  drawInnerBody(innerFurColor);
  drawLegs(furColor, innerFurColor);
  drawTail(furColor);
  if (isHoldingLightstick) {
    drawLightstick(lightStickDistanceX, lightStickDistanceY, lightStickRotateAngle);
  }
}

function drawHead(furColor) {
  stroke(furColor);
  fill(furColor);

  beginShape(); // inner head
  vertex(159, 164);
  vertex(99, 85);
  vertex(212, 67);
  vertex(194, 153);
  endShape(CLOSE);

  beginShape(); // left side of the head
  curveVertex(320, 70);
  curveVertex(160, 163);
  curveVertex(100, 86);
  curveVertex(300, -250);
  endShape();

  beginShape(); // top side of the head
  curveVertex(50, 350);
  curveVertex(100, 86);
  curveVertex(212.5, 67);
  curveVertex(300, 260);
  endShape();

  beginShape(); // right side of the head
  curveVertex(30, 0);
  curveVertex(211, 66);
  curveVertex(193, 153);
  curveVertex(-50, 200);
  endShape();
}

function drawOuterEars(outerEarColor) {

  strokeWeight(1);
  stroke(outerEarColor);
  fill(outerEarColor);

  beginShape(); // left outer ear
  curveVertex(300, 470);
  curveVertex(100, 86);
  curveVertex(134, 59);
  curveVertex(134, 100);
  endShape();
  
  beginShape(); // right outer ear
  curveVertex(0, 460);
  curveVertex(157, 52);
  curveVertex(200, 58);
  curveVertex(190, 150);
  endShape();
}

function drawInnerEar(innerEarColor) {

  strokeWeight(1);
  stroke(innerEarColor);
  fill(innerEarColor);

  beginShape(); // left inner ear
  curveVertex(250, 350);
  curveVertex(107, 80);
  curveVertex(125, 65);
  curveVertex(110, 65);
  endShape();

  beginShape(); // right inner ear
  curveVertex(80, 360);
  curveVertex(167, 53);
  curveVertex(190, 56);
  curveVertex(170, 56);
  endShape();
}

function drawEyes(outerEyesColor, innerEyesColor, eyesPosXOffset, eyesPosYOffset, headPopOut) {
  rotate(70);

  strokeWeight(1);
  stroke(outerEyesColor);
  fill(outerEyesColor);

  ellipse(150, -85, 45, 37); // left eye
  ellipse(150, -143, 45, 37); // right eye

  translate(eyesPosXOffset, eyesPosYOffset);

  stroke("black");
  fill("black");
  ellipse(143, -90, 30, 20); // left inner eye
  ellipse(143, -148, 30, 20); // right inner eye

  stroke(innerEyesColor);
  fill(innerEyesColor);
  ellipse(135, -88, 10, 6); // left innermost eye
  ellipse(135, -145, 10, 6); // right innermost eye

  if (!headPopOut) {
    translate(-eyesPosXOffset, -eyesPosYOffset);
  }
}

function drawMoustache(furColor) {
  strokeWeight(2.5);
  stroke(furColor);
  noFill();

  beginShape(); // top left moustache
  curveVertex(175, -44);
  curveVertex(163, -44);
  curveVertex(167, -23);
  curveVertex(167, -23);
  endShape();

  beginShape(); // bottom left moustache
  curveVertex(183, -70);
  curveVertex(183, -52);
  curveVertex(195, -30);
  curveVertex(195, -40);
  endShape();

  beginShape(); // top right moustache
  curveVertex(160, -150);
  curveVertex(160, -183);
  curveVertex(167, -203);
  curveVertex(173, -203);
  endShape();

  beginShape(); // bottom right moustache
  curveVertex(195, -178);
  curveVertex(180, -178);
  curveVertex(195, -197);
  curveVertex(195, -197);
  endShape();
}

function drawOuterBody(furColor) {
  rotate(-70);

  strokeWeight(1);
  stroke(furColor);
  fill(furColor);

  beginShape(); // outer body
  curveVertex(760, -700);
  curveVertex(150, 164);
  curveVertex(202, 148);
  curveVertex(-700, -500);
  endShape();
}

function drawInnerBody(innerFurColor) {
  rotate(75);

  strokeWeight(1);
  stroke(innerFurColor);
  fill(innerFurColor);

  ellipse(245, -127, 70, 60); // inner body

  rotate(-75);
}

function drawLegs(furColor, innerFurColor) {
  strokeWeight(1);
  stroke(furColor);
  fill(furColor);

  beginShape(); // left leg
  curveVertex(150, 200);
  curveVertex(140, 180);
  curveVertex(125, 188);
  curveVertex(115, 220);
  curveVertex(135, 231);
  curveVertex(200, 200);
  endShape();

  beginShape(); // right leg
  curveVertex(100, 250);
  curveVertex(220, 164);
  curveVertex(250, 145);
  curveVertex(260, 165);
  curveVertex(235, 183);
  curveVertex(220, 220);
  endShape();

  fill(innerFurColor);

  circle(127, 220, 18); // left inner leg
  circle(248, 159, 18); // right inner leg
}

function drawTail(furColor) {
  strokeWeight(1);
  stroke(furColor);
  fill(furColor);

  beginShape(); // tail
  curveVertex(300, 150);
  curveVertex(137, 235);
  curveVertex(80, 230);
  curveVertex(80, 255);
  curveVertex(150, 246);
  curveVertex(150, 246);
  endShape();
}

function drawLightstick(distanceX, distanceY, rotateAngle) {
  translate(distanceX, distanceY);
  rotate(rotateAngle);

  strokeWeight(1);

  stroke(170, 179, 182);
  fill(170, 179, 182);
  rect(277, 32, 16, 3); // connector between grip and top

  stroke(255, 255, 255);
  fill(255, 255, 255);
  triangle(290, 34, 290, 104, 295, 35); // right side of the grip

  stroke(104, 104, 104);
  fill(104, 104, 104);
  triangle(280, 34, 275, 35, 280, 104); // left side of the grip

  stroke(233, 233, 233);
  fill(233, 233, 233);
  rect(280, 34, 10, 70); // center of the grip

  stroke(150);

  beginShape(); // outer hexagon
  vertex(298, 32);
  vertex(272, 32);
  vertex(259, 9.48);
  vertex(272, -13.04);
  vertex(298, -13.04);
  vertex(312, 9.48);
  endShape(CLOSE);

  strokeWeight(4);

  stroke(163, 254, 254); // E
  beginShape(LINES);
  vertex(272, -11.04);
  vertex(260, 9.48);
  vertex(260, 9.48);
  vertex(272, 30);
  vertex(261, 9.48);
  vertex(272, 9.48);
  endShape();

  stroke('yellow'); // O
  beginShape(LINES);
  vertex(298, -11.04);
  vertex(311, 9.48);
  vertex(311, 9.48);
  vertex(298, 30);
  endShape();

  stroke('white'); // X
  beginShape(LINES);
  vertex(272, -11.04);
  vertex(298, 30);
  vertex(272, 30);
  vertex(298, -11.04);
  endShape();

  translate(-distanceX, -distanceY);
  rotate(-20);
}