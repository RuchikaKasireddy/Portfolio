import React from 'react';
import { TagCloud } from 'react-tagcloud';
import { shuffle } from 'lodash';

const beginner = 1;
const intermediate = 2;
const advanced = 3;

const skilltags = [
  { value: 'Python', count: advanced },
  { value: 'Java', count: intermediate },
  { value: 'Golang', count: beginner },
  { value: 'React', count: advanced },
  { value: 'React Native', count: advanced },
  { value: 'Angular.js', count: advanced },
  { value: 'Node.js', count: advanced },
  { value: 'HTML', count: advanced },
  { value: 'CSS', count: advanced },
  { value: 'JavaScript', count: advanced },
  { value: 'MySQL', count: advanced },
  { value: 'PostgreSQL', count: intermediate },
  { value: 'MongoDB', count: beginner },
  { value: 'DynamoDB', count: beginner },
  { value: 'AWS Lambda', count: intermediate },
  { value: 'Google Cloud Functions', count: intermediate }
];

const shuffledTags = shuffle(skilltags);

const customRenderer = (tag, size, color) => {
  return (
    <span
      key={tag.value}
      style={{
        animation: 'blinker 3s linear infinite',
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${size / 2}em`,
        margin: '0 auto',
        padding: '3px',
        display: 'inline-block',
        color: `${color}`
      }}
    >
      {tag.value}
    </span>
  )
}

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
      <TagCloud
        className="tagcloud"
        tags={shuffledTags}
        minSize={1}
        maxSize={5}
        renderer={customRenderer}
      />
    </div>
  )
}

export default About;