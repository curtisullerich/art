function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background('white');
  for (var i = 0; i < width; i++) {
    var x = i;
    var maxDy = height/4;
    var perlinY = frameCount*0.015;
    var perlinX = i*0.02;
    var dy = maxDy/2 - maxDy*noise(perlinX, perlinY);
    var y = height/2 + dy;
    drawPoint(x, y);
  }
}

function drawPoint(x, y) {
  noStroke();
  fill('green');
  circle(x, y, 100);
}
