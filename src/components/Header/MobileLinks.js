import React from 'react';
import styled from 'styled-components';

import Link from '../Link';

const StyledMobileLinks = styled.div`
  text-align: center;
`;

const MobileLinks = () => (
  <StyledMobileLinks>
    <div>
      <Link to="/portfolio">Portfolio</Link>
    </div>
    <div>
      <Link to="/contact">Contact</Link>
    </div>
  </StyledMobileLinks>
);

export default MobileLinks;
