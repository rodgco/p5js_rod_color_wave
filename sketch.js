import { sketch } from "p5js-wrapper";
import { createNoise3D } from "simplex-noise";

let rez1 = 0.008;
let rez2 = 0.0008;
// let rez3 = 0.006;
let tam = 40;
let gap = -16;

let lets = "|".split("");

let n1off = 0;
let n2off = 0;

const noise3d = createNoise3D();

sketch.setup = function () {
  createCanvas(windowWidth, windowHeight);
  textFont("Prosto One");
  colorMode(HSB, 360, 120, 100, 255);
  textSize(tam);
};

sketch.windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

sketch.draw = function () {
  background(0, 0, 25);
  for (let x = 0; x < width / (tam+gap); x++) {
    for (let y = 0; y < height / (tam+gap); y++) {
      const n2 = map(
        noise3d(x*tam * rez2 + n2off, y *tam* rez2 + n2off, n1off),
        -1,
        1,
        0,
        1
      );
      fill(n2 * 360, 100, 90);
      push();
      translate(x*(tam+gap), y*(tam+gap));
      rotate((n2 - 0.5) * 2 * PI);
      text(lets[(x + y) % lets.length], 0, 0);
      pop();
    }
  }
  n1off += rez1;
  n2off += rez2;
};
