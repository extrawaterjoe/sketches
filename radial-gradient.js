const canvasSketch = require("canvas-sketch")

const settings = {
  dimensions: "a4",
  pixelsPerInch: 300,
  units: "in",
}

const sketch = () => {
  return ({ context, width, height }) => {
    const margin = 1 / 4

    // Off-white background
    context.fillStyle = "hsl(0, 0%, 98%)"
    context.fillRect(0, 0, width, height)

    // creates a radial gradient that is centered on the canvas
    const gradient = context.createRadialGradient(
      width * 0.5,
      height * 0.5,
      0,
      width * 0.5,
      height * 0.5,
      width * 0.4
    )

    // add 3 color stops to the gradient
    gradient.addColorStop(0.3, "#7CA5B8")
    gradient.addColorStop(0.8, "#38369A")
    gradient.addColorStop(1, "#C6EBBE")

    context.fillStyle = gradient
    context.fillRect(margin, margin, width - margin * 2, height - margin * 2)
  }
}

// Start the sketch
canvasSketch(sketch, settings)
