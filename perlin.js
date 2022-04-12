function setup() {
  createCanvas(1200, 600);
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
    var h2 = noise(perlinY, perlinX);
    var dy = maxDy/2 - maxDy*h;
    var y = height/2 + dy;
    drawPoint(x, y, h2);
  }
}

function drawPoint(x, y, h) {
  push();
  translate(x, y);
  noStroke();
  var alpha = 0.9 * 255;
  var from = color('red')
  from.setAlpha(alpha);
  var to = color('blue')
  to.setAlpha(alpha);
  var c1 = lerpColor(from, to, h);
  fill(c1);
  rotate(h*radians(540));
  var w = 100;
  ellipse(0, 0, w, w/2);
  pop();
}
