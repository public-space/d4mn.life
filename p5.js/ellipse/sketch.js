//*P5.js Ellipse*//

function setup() {
  createCanvas(640, 620);
}

//? Ellipse centered on screen
// function draw() {
//   background(204);
//   ellipse(320, 240, 400, 400);
// }

//? Ellipse centered on screen

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80,80);
}
