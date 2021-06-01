import React, { useEffect, useRef, useState } from "react";


function PopcornGame() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  let bucketImg = document.createElement("img")
  bucketImg.src="bucket.png" 

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d")
    context.scale(2, 2)
    context.lineCap = "round"
    context.strokeStyle = "ivory"
    context.lineWidth = 5
    
    contextRef.current = context
  }, [])

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent
    // contextRef.drawImage(bucketImg, off);
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)

  }

  const endDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false)

  }

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return
    }
    const { offsetX, offsetY } = nativeEvent
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
    
  }

  return (
    <div>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
      ref={canvasRef}>
      </canvas>
    </div>
  );
}
export default PopcornGame