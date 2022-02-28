const canvasSketch = require("canvas-sketch")
const { lerp } = require("canvas-sketch-util/math")

const settings = {
  animate: true,
  duration: 3,
  dimensions: [2048, 2048],
  fps: 30,
}

const sketch = ({ width, height }) => {
  const count = 6
  const margin = width * 0.15
  const padding = 100
  const tileSize = (width - margin * 2) / count - padding

  const createGrid = () => {
    const points = []
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = x / (count - 1)
        const v = y / (count - 1)
        points.push([u, v])
      }
    }
    return points
  }

  const points = createGrid().filter(() => Math.random() > 0.9)

  return ({ context, width, height }) => {
    context.fillStyle = "rgb(255, 255, 240)"
    context.fillRect(0, 0, width, height)

    points.forEach(([u, v]) => {
      const time = Date.now() * 0.001
      const x = lerp(
        margin,
        width - margin,
        u * Math.sin(time * 0.3) * 0.3 + 0.9
      )
      const y = lerp(
        margin,
        width - margin,
        v * Math.sin(time * 0.7) * 0.2 + 0.8
      )

      context.beginPath()
      context.arc(x, y, tileSize, 0, Math.PI * 2)
      const r = Math.sin(time * 0.3) * 0.3 + 0.5
      const g = Math.sin(time * 0.5) * 0.4 + 0.5
      const b = Math.sin(time * 0.7) * 0.5 + 0.5
      context.fillStyle = `rgb(${r * 255}, ${g * 255}, ${b * 255})`
      context.fill()

      context.lineWidth =
        (Math.sin(Date.now() / 1000) * width) / 30 + width / 30
      context.strokeStyle = `rgb(${r * 105}, ${g * 115}, ${b * 150})`
      context.stroke()

      context.lineWidth =
        (Math.sin(Date.now() / 1001) * width) / 50 + width / 50
      context.strokeStyle = `rgb(${r * 205}, ${g * 215}, ${b * 250})`
      context.stroke()
    })
  }
}

canvasSketch(sketch, settings)
