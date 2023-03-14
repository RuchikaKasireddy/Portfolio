import React from 'react';

function Intro() {
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
            <p className="orangehighlight">Full Stack Developer</p>
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
