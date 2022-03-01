const canvasSketch = require("canvas-sketch")

const settings = {
  animate: true,
  duration: 3,
  dimensions: [2048, 2048],
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

    context.lineWidth = (Math.sin(Date.now() / 1000) * width) / 30 + width / 30
    context.strokeStyle = "rgb(0, 0, 128)"
    context.stroke()
  }
}

canvasSketch(sketch, settings)
