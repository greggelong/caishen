let drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
}

function draw() {
  background(20);
  //print(drops.length)

  // Generate new drops randomly
  if (random(1) < 0.5) {
    let x = random(width);
    let y = -20;
    let spd = random(5, 10);
    let symbol;
    if (random(1) < 0.5) {
      symbol = "$";
    } else {
      symbol = "元";
    }
    let sz = random(20, 70);
    let drop = new Drop(x, y, spd, symbol, sz);
    drops.push(drop);
  }

  // Update and display drops
  for (let i = drops.length - 1; i >= 0; i--) {
    drops[i].fall();
    drops[i].display();
    if (drops[i].offscreen()) {
      drops.splice(i, 1);
    }
  }
}

class Drop {
  constructor(x, y, spd, symbol, sz) {
    this.x = x;
    this.y = y;
    this.sz = sz;
    this.spd = spd;
    this.symbol = symbol;
  }

  fall() {
    this.y += this.spd;
  }

  display() {
    noStroke();
    if (this.symbol === "$") {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    textSize(this.sz);
    text(this.symbol, this.x, this.y);
  }

  offscreen() {
    return this.y > height;
  }
}
