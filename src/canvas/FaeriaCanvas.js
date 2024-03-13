import { useRef, useEffect } from "react";

const FaeriaCanvas = (props) => {

  const ref = useRef();

  const draw = (context) => {
    context.clearRect(0,0, context.canvas.width, context.canvas.height);
    context.fillStyle = 'red';
    context.fillRect(100,100,200,200);
  }

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext("2d");
    draw(context);
  },[])

  return(
    <canvas ref={ref}{...props} />
  )
};
export default FaeriaCanvas;
