import React from 'react';

function About() {
  return (
    <div id="about">
      <div className="aboutheader">
        <p><span className="shadowhighlight">A</span>bout me</p>
      </div>
      <div className="abouttext">
        <p>
          I'm currently pursuing a Masters degree in Computer Science
          at the University of Southern California, and I'm
          expected to graduate in May 2023. This degree has allowed me to deepen
          my understanding of computer science concepts, and I'm excited to apply
          this knowledge to my future projects.
        </p>
        <p>
          This website has been built using<span className="highlight"> React.js, </span> which is one of my favorite
          technologies to work with. I have had the opportunity to work on a
          variety of projects, from developing web-based applications to building
          native mobile applications. With each project, I strive to provide the
          best solution possible for the end user.
        </p>
        <p>
          On this website, you will find examples of my work, my resume, and
          my contact information. Please feel free to reach out to me if you
          have any questions or want to discuss how we can work together to
          create something amazing. Thank you for stopping by!
        </p>
      </div>
    </div>
  )
}

export default About;