import React, { useEffect, useState } from "react";

function Intro() {
  const [rotatingHeader, setRotatingHeader] = useState("");
  
  useEffect(() => {
    let index = 0;
    let rotatingIndex = 0;
    let shouldIncrement = true;
    const rotateStrings = [
      "Full Stack Developer",
      "Software Engineer",
      "Web Developer",
    ];
    const globalIntervalId = setInterval(() => {
      let curString = rotateStrings[rotatingIndex];
      if (shouldIncrement) {
        if (index <= curString.length) {
          setRotatingHeader(curString.substring(0, index));
          index++;
        } else {
          shouldIncrement = !shouldIncrement;
        }
      } else {
        if (index >= 0) {
          setRotatingHeader(curString.substring(0, index));
          index--;
        } else {
          shouldIncrement = !shouldIncrement;
          rotatingIndex = (rotatingIndex + 1) % rotateStrings.length;
        }
      }
    }, 100);
    return () => clearInterval(globalIntervalId);
  }, []);

  return (
    <div id="introduction">
      <div className="background">
        <div className="profilepicture">
          <div className="profilepictureimg" />
        </div>
        <div>
          <div className="introheader">
            <p className="pinkhighlight">Hi,</p>
            <p className="bluehighlight">I'm Aman,</p>
            <p id="rotatingheader" className="orangehighlight">
              {rotatingHeader}
            </p>
          </div>
          <div className="introtext">
            <p>
              Welcome to my portfolio website! I'm a skilled Full Stack Software
              Engineer with a successful record engineering innovative
              solutions, enabling impactful features, integrating AI to
              transform the product suite and driving business growth.
              Recognized for my aptitude to acquire new skills, adapt to job
              demands, proactively drive enhancements and deliver results. Over
              2 years of professional experience, with a blend of frontend,
              backend, AI and cloud technologies such as
              <span className="yellowhighlight">
                {" "}
                Python, Java, Golang, Node.js{" "}
              </span>
              and
              <span className="yellowhighlight"> Express.js </span>for backend
              development, and
              <span className="yellowhighlight">
                {" "}
                React, React Native, Next.js, Angular.js, HTML/CSS, TypeScript
              </span>{" "}
              and<span className="yellowhighlight"> JavaScript </span>
              for front-end development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
