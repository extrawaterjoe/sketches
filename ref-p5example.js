const canvasSketch = require("canvas-sketch")

// Grab P5.js from npm
const p5 = require("p5")

// Attach p5.js it to global scope
new p5()

const settings = {
  // Tell canvas-sketch we're using p5.js
  p5: true,
  // Turn on a render loop (it's off by default in canvas-sketch)
  animate: true,
  // We can specify WebGL context if we want
  context: "webgl",
  // Optional loop duration
  duration: 6,
  // Enable MSAA
  attributes: {
    antialias: true,
  },
}

// Optionally preload before you load the sketch
window.preload = () => {
  // Preload sounds/images/etc...
}

canvasSketch(() => {
  let clicked = false
  // Inside this is a bit like p5.js 'setup' function
  // ...

  // Attach events to window to receive them
  window.mouseClicked = () => {
    clicked = !clicked
  }

  // Return a renderer to 'draw' the p5.js content
  return ({ playhead, width, height }) => {
    // Draw with p5.js things
    clear()
    normalMaterial()
    if (clicked) {
      rotateX(playhead * 2 * PI)
      rotateZ(playhead * 2 * PI)
    }
    rotateX(playhead * 1 * PI)
    rotateY(playhead * 1 * PI)
    ellipsoid(190, 135, 130, 120, 120)
  }
}, settings)
