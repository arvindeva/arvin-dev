import React from 'react';
import styled from 'styled-components';

import { UnderlinedLink } from '../Link';

const StyledHome = styled.div`
  .curry {
    font-size: 3rem;
  }
`;

const Home = () => (
  <StyledHome>
    <h1>
      Hi!{' '}
      <span role="img" aria-label="poop-emoji">
        👋
      </span>
    </h1>
    <p>
      I'm <b>Arvindeva Wibisono</b> (<b>Arvin</b>), a <b>front-end developer</b>{' '}
      currently working at <b>Warung Pintar</b>. I make websites and web
      applications, mostly using <b>React</b>. Feel free to check my projects at
      my <UnderlinedLink to="/portfolio">Portfolio</UnderlinedLink> page.
    </p>
    <h2>Skills</h2>
    <p>
      HTML5, CSS3, JavaScript, ES6, TypeScript, Node.js, React, Redux, MobX,
      GraphQL, Apollo Client/Server, Emotion, Styled Components, Styled System,
      Sass, SVG, Webpack, Express, git, SQL, MongoDB, Jest, Enzyme, Testing
      Library, Storybook, Cypress, Selenium.
    </p>
  </StyledHome>
);

export default Home;
