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
            <p>Hi,</p>
            <p>I'm <span className="shadowhighlight">A</span>man,</p>
            <p>Full Stack Developer</p>
          </div>
          <div className="introtext">
            <p>
              Welcome to my portfolio website! I'm a full stack developer with a
              passion for creating amazing applications. I'm proficient in a range of technologies including
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
