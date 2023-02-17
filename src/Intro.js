import React, { useState, useEffect, useRef } from 'react';

const MAX_DOTS = 500;
const DOT_SIZE = 10;
const DELETE_INTERVAL = 1;

function Intro() {
  const [dots, setDots] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (dots.length > 1) {
        ctx.beginPath();
        ctx.moveTo(dots[0].x, dots[0].y);

        for (let i = 1; i < dots.length; i++) {
          ctx.lineTo(dots[i].x, dots[i].y);
        }

        ctx.lineWidth = DOT_SIZE;
        ctx.strokeStyle = "#ff048b";
        ctx.globalAlpha = 0.1
        ctx.stroke();
      }

      dots.forEach((dot, index) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_SIZE / 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 4, 140, ${1 - index / MAX_DOTS})`;
        ctx.fill();
      });
    }

    const intervalId = setInterval(() => {
      if (dots.length > 0) {
        setDots((prevDots) => prevDots.slice(1));
      }
    }, DELETE_INTERVAL);

    draw();

    return () => {
      clearInterval(intervalId);
    };
  }, [dots]);

  function handleMouseMove(e) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setDots((prevDots) => [
      ...prevDots,
      { x, y, timestamp: Date.now() }
    ].slice(-MAX_DOTS));
  }

  return (
    <div>
      <canvas
        className="canvas"
        ref={canvasRef}
        width={window.outerWidth}
        height={window.outerHeight}
        onMouseMove={handleMouseMove}
      />
      <div className="background">
        <div className="profilepicture">
          <div className="profilepictureimg" />
        </div>
        <div>
          <div className="introheader">
            <p>Hi,</p>
            <p>I'm Aman,</p>
            <p>Full Stack Developer</p>
          </div>
          <div className="introtext">
            <p>
              Welcome to my portfolio website! I'm a full stack developer with a
              passion for creating amazing applications. I have gained 2 years
              of experience in a range of technologies including
              <span className="highlight"> Python, Java, Golang, Node.js </span>
              and
              <span className="highlight"> Express.js </span>for
              backend development, and
              <span className="highlight"> React, React Native, Angular.js, HTML/CSS
              </span> and<span className="highlight"> Javascript </span>
              for front-end development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
