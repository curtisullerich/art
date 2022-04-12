function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background('white');
  var y = height/2;
  for (var i = 0; i < width; i++) {
    var x = i;
    drawPoint(x, y);
  }
}

function drawPoint(x, y) {
  fill('green');
  circle(x, y, 100);
}
