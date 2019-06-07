import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.div``;

const Home = () => (
  <StyledHome>
    <h1>
      Hi!
      <span role="img" aria-label="poop-emoji">
        {' '}
        💩
      </span>
    </h1>
    <p>
      I'm Arvindeva Wibisono (Arvin), a front-end developer currently working at
      Warung Pintar. I make websites and web applications, mostly using React.
    </p>
  </StyledHome>
);

export default Home;
