import React from 'react';
import styled from 'styled-components';

import Link from '../Link';

const StyledMobileLinks = styled.div`
  text-align: center;
  padding-top: 3rem;
`;

const MobileLinks = () => (
  <StyledMobileLinks>
    <ul>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </StyledMobileLinks>
);

export default MobileLinks;
