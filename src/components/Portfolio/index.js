import React from 'react';
import styled from 'styled-components';

const StyledPortfolio = styled.div``;

const Portfolio = () => (
  <StyledPortfolio>
    <h1>Portfolio</h1>
    <p>Here are some of my projects.</p>
    <a
      href="https://github.com/arvindeva/react-dashboard"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>Social Media Dashboard</h2>
    </a>
    <p>
      A dashboard for social media site admin that gets data from the JSON
      Placeholder API. Built using React, Redux, Styled Components.
    </p>
    <a
      href="https://github.com/arvindeva/react-ts-mobx"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>React, TypeScript, MobX Boilerplate</h2>
    </a>
    <p>
      A boilerplate for easy project setup to use React, TypeScript, MobX,
      Webpack, Babel 7.
    </p>
    <a
      href="https://github.com/arvindeva/pokedex"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>Pokedex</h2>
    </a>
    <p>
      A Pokedex app that fetches data from the PokèAPI. Built with React, Styled
      Components, Semantic UI
    </p>
    <a
      href="https://github.com/arvindeva/video-search"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>YouTube Video Search and Player</h2>
    </a>
    <p>
      A react app to search and fetch data from the YouTube API and play the
      video.
    </p>
    <a
      href="https://github.com/arvindeva/currency-exercise"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>Currency Converter</h2>
    </a>
    <p>Currency converter made in React with local state management.</p>
  </StyledPortfolio>
);

export default Portfolio;
