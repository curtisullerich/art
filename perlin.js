function setup() {
  createCanvas(400, 400);
  frameRate(30);
  noiseSeed(42);
}

function draw() {
  background('white');
  var step = 7.0;
  for (var i = 0; i < (width/step); i++) {
    var x = i*step;
    var maxDy = height;
    var perlinY = frameCount*0.015;
    var perlinX = i*0.02;
    var h = noise(perlinX, perlinY);
    var dy = maxDy/2 - maxDy*h;
    var y = height/2 + dy;
    drawPoint(x, y, h);
  }
}

function drawPoint(x, y, h) {
  push();
  translate(x, y);
  noStroke();
  fill('green');
  rotate(h*radians(540));
  var w = 100;
  ellipse(0, 0, w, w/2);
  pop();
}
