const canvasSketch = require("canvas-sketch")

const settings = {
  // Enable an animation loop
  animate: true,
  // Set loop duration to 3
  duration: 3,
  // Use a small size for better GIF file size
  dimensions: [2048, 2048],
  //dimensions: [256, 256],
  // Optionally specify a frame rate, defaults to 30
  fps: 30,
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "rgb(255, 255, 240)"
    context.fillRect(0, 0, width, height)

    context.beginPath()
    context.ellipse(
      width / 2,
      height / 2,
      Math.sin(Date.now() / 100) * 100 + 100,
      500,
      0,
      0,
      Math.PI * 2
    )
    context.fillStyle = "rgb(0, 0, 255)"
    context.fill()

    // rotate the context
    context.lineWidth = (Math.sin(Date.now() / 1000) * width) / 30 + width / 30
    context.strokeStyle = "rgb(0, 0, 128)"
    context.stroke()
  }
}

canvasSketch(sketch, settings)
