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
    context.filter = "blur(20px)"
    context.fillStyle = "rgb(255, 255, 240)"
    context.fillRect(0, 0, width, height)

    context.beginPath()
    context.arc(width / 2, height / 2, 500, 0, Math.PI * 2)

    // animated slowly chanhge the color
    const time = Date.now() * 0.001
    const r = Math.sin(time * 0.3) * 0.3 + 0.5
    const g = Math.sin(time * 0.5) * 0.4 + 0.5
    const b = Math.sin(time * 0.7) * 0.5 + 0.5
    context.fillStyle = `rgb(${r * 255}, ${g * 255}, ${b * 255})`
    context.fill()

    context.lineWidth = (Math.sin(Date.now() / 1000) * width) / 30 + width / 30
    context.strokeStyle = `rgb(${r * 155}, ${g * 195}, ${b * 200})`
    context.stroke()

    context.lineWidth = (Math.sin(Date.now() / 1001) * width) / 50 + width / 50
    context.strokeStyle = `rgb(${r * 205}, ${g * 215}, ${b * 250})`
    context.stroke()
  }
}

canvasSketch(sketch, settings)
