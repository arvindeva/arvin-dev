import React from 'react';
import styled from 'styled-components';

const StyledPortfolio = styled.div`
  a {
    text-decoration: underline;
    :hover {
      color: red;
    }
  }
`;

const Portfolio = () => (
  <StyledPortfolio>
    <h1>Portfolio</h1>
    <p>Here are some of my projects.</p>
    <h2>
      <a
        href="https://extinctionrebellion.id/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Extinction Rebellion Indonesia
      </a>
    </h2>
    <p>
      Official website for Extinction Rebellion Indonesia, following style
      guidelines from the Extinction Rebellion international movement. Built
      using <b>React, Emotion, Netlify</b>.
    </p>
    <h2>
      <a
        href="https://github.com/arvindeva/react-dashboard"
        target="_blank"
        rel="noopener noreferrer"
      >
        Social Media Dashboard
      </a>
    </h2>
    <p>
      A dashboard for social media site admin that gets data from the JSON
      Placeholder API. Built using <b>React, Redux, Styled Components</b>.
    </p>
    <h2>
      <a
        href="https://github.com/arvindeva/react-ts-mobx"
        target="_blank"
        rel="noopener noreferrer"
      >
        React, TypeScript, MobX Boilerplate
      </a>
    </h2>
    <p>
      A boilerplate for easy project setup to use{' '}
      <b>React, TypeScript, MobX, Webpack, Babel 7</b>.
    </p>
    <h2>
      <a
        href="https://github.com/arvindeva/pokedex"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pokedex
      </a>
    </h2>
    <p>
      A Pokedex app that fetches data from the PokèAPI. Built with{' '}
      <b>React, Styled Components, Semantic UI</b>.
    </p>
    <h2>
      <a
        href="https://github.com/arvindeva/video-search"
        target="_blank"
        rel="noopener noreferrer"
      >
        YouTube Video Search and Player
      </a>
    </h2>
    <p>
      A <b>React</b> app to search and fetch data from the YouTube API and play
      the video.
    </p>
    <h2>
      <a
        href="https://github.com/arvindeva/currency-exercise"
        target="_blank"
        rel="noopener noreferrer"
      >
        Currency Converter
      </a>
    </h2>
    <p>Currency converter made in React with local state management.</p>
  </StyledPortfolio>
);

export default Portfolio;
