import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.div``;

const Home = () => (
  <StyledHome>
    <h1>
      Hi, I'm Arvin!
      <span role="img" aria-label="poop-emoji">
        {' '}
        💩
      </span>
    </h1>
  </StyledHome>
);

export default Home;
