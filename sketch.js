import { sketch } from "p5js-wrapper";

let rez1 = 0.004;
let rez2 = 0.008;
// let rez3 = 0.006;
let tam = 30;
let gap = -7;

let lets = ["r", "o", "d", "g", "c", "o"];

let n1off = 0;
let n2off = 0;

sketch.setup = function () {
  createCanvas(windowWidth, windowHeight);
  textFont('Prosto One');
  colorMode(HSB, 360, 120, 100, 255);
  textSize(tam);
};

sketch.windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

sketch.draw = function () {
  background(0, 0, 25);
  for (let x = -10; x < width + tam; x += 26 + gap) {
    for (let y = -10; y < height + tam; y += 26 + gap) {
      const n2 = noise(
        x * rez2 + 10000 + n2off,
        y * rez2 + 10000 + n2off,
        n1off
      );
      // const n3 = noise(x * rez1, y * rez1, n2off);
      fill(n2 * 360, 100, 90);
      push();
      translate(x, y);
      rotate((n2 - 0.5) * 2 * PI);
      text(lets[(x + y) % 6], 0, 0);
      pop();
    }
  }
  n1off += rez1;
  n2off += rez2;
};
