import React, { useEffect } from 'react';

function Intro() {
  const rotateStrings = ["Full Stack Developer", "Software Engineer", "Web Developer"];
  const intervalLength = 5000;
  let curIdx = 0;
  function loop() {
    const div = document.getElementById("rotatingheader");
    div.innerHTML = rotateStrings[curIdx];
    div.classList.remove("deleting");
    div.classList.add("typing");
    setTimeout(() => {
      div.classList.remove("typing");
      div.classList.add("deleting");
    }, 2000);
    curIdx = (curIdx + 1) % rotateStrings.length;
  }

  useEffect(() => {
    setInterval(loop, intervalLength);
  });
  
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
            <p id="rotatingheader" className="orangehighlight"></p>
          </div>
          <div className="introtext">
            <p>
              Welcome to my portfolio website! I'm a full stack developer with a
              passion for creating amazing applications. I'm proficient in a range of technologies including
              <span className="yellowhighlight"> Python, Java, Golang, Node.js </span>
              and
              <span className="yellowhighlight"> Express.js </span>for
              backend development, and
              <span className="yellowhighlight"> React, React Native, Angular.js, HTML/CSS
              </span> and<span className="yellowhighlight"> Javascript </span>
              for front-end development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
