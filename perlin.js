function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background('white');
  for (var i = 0; i < width; i++) {
    var x = i;
    var y = x + frameCount;
    drawPoint(x, y);
  }
}

function drawPoint(x, y) {
  noStroke();
  fill('green');
  circle(x, y, 100);
}
