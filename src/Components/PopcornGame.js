import React, { useEffect, useRef, useState } from "react";
import MainNavBar from "./MainNavBar"


function PopcornGame() {

  window.addEventListener("keydown", logKey);
  function logKey(e) {
  }

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  let bucketImg = document.createElement("img")
  bucketImg.src =
    ""; 

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

   function Basket() {

     this.show = function () {
       contextRef.current.drawImage(bucketImg, 150, 100);
     };
     this.left = function () {
       this.x = this.x - 65;
     };
     this.right = function () {
       this.x = this.x + 65;
     };
   }

   let basket = new Basket();

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
        basket.show();
    
  }

  return (
    <div>
      <MainNavBar />
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      ></canvas>
      {/* <img
        src={
          "https://lh3.googleusercontent.com/proxy/Z93AdNXvBUqFwIQvO7hfhai8PDyN3053OgGPu2z6SpIp58RWvNqMDhl9a2BPgWm57i-gycFFc1MmrvnAQz22k4jLVQ"
        }
      ></img> */}
    </div>
  );
}
export default PopcornGame