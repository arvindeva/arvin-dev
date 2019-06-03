import React from 'react';
import styled from 'styled-components';

import Link from '../Link';

const StyledDesktopLinks = styled.div`
  display: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .desktop-link {
    padding: 0 1em;
  }
`;

const DesktopLinks = () => (
  <StyledDesktopLinks>
    <div className="desktop-link">
      <Link to="/portfolio">Portfolio</Link>
    </div>
    <div className="desktop-link">
      <Link to="/blog">Blog</Link>
    </div>
    <div className="desktop-link">
      <Link to="/contact">Contact</Link>
    </div>
  </StyledDesktopLinks>
);

export default DesktopLinks;
