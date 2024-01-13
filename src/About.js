import React from 'react';
import { TagCloud } from 'react-tagcloud';
import { shuffle } from 'lodash';

const beginner = 1;
const intermediate = 2;
const semi_pro = 3;
const professional = 4;

const skilltags = [
  { value: 'NextJS', count: professional },
  { value: 'Python', count: professional },
  { value: 'Java', count: intermediate },
  { value: 'Golang', count: beginner },
  { value: 'React', count: professional },
  { value: 'React Native', count: semi_pro },
  { value: 'Angular.js', count: semi_pro },
  { value: 'Node.js', count: professional },
  { value: 'HTML', count: semi_pro },
  { value: 'CSS', count: semi_pro },
  { value: 'JavaScript', count: semi_pro },
  { value: 'MySQL', count: semi_pro },
  { value: 'PostgreSQL', count: semi_pro },
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
        animation: 'blinker 5s linear infinite',
        animationDelay: `${Math.random() * 2}s`,
        border: `2px solid ${color}`,
        fontSize: `${size / 2}em`,
        margin: '0 auto',
        padding: '3px',
        display: 'inline-block',
        color: 'white'
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
        <p className="bluehighlight">About me</p>
      </div>
      <div className="abouttext">
        <p>
          I graduated from the <span className="orangehighlight">University of Southern California </span>with a <span className="orangehighlight">Master's Degree </span>
          in Computer Science. I'm currently developing a <span className="orangehighlight">conversational AI financial analyst</span> at Fundit Inc,
          enabling dynamic data extraction and visualization capabilities. I also lead a team of 6 in the analytics
          division of the RobotRace segment at Easley-Dunn Productions Inc.
        </p>
        <p>
          This website has been built using<span className="orangehighlight"> React.js, </span> which is one of my favorite
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