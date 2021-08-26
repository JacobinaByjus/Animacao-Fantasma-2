function preload() {
  ghostRunning = loadAnimation("ghost1.png", "ghost2.png", "ghost3.png");
}

function setup() {
  createCanvas(400, 400);
  ghost = createSprite(200, 180, 20, 50);
  ghost.addAnimation("running", ghostRunning);
}

function draw() {
  background("black");

  drawSprites();
}
