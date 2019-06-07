import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

import Link from '../Link';
import Hamburger from '../Hamburger';
import DesktopLinks from './DesktopLinks';
import MobileLinks from './MobileLinks';
import MobileOnly from '../MobileOnly';
import DesktopOnly from '../DesktopOnly';

const StyledHeader = styled.header`
  background: hsla(0, 0%, 0%, 0.9);
  margin-bottom: 1.45rem;
  padding: 1rem 1rem;
  color: white;

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 960px;
    .title {
      margin: 0;
    }
  }

  .mobile-links {
    text-align: center;
    .mobile-link {
    }
  }
`;

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <StyledHeader>
      <div className="wrapper">
        <div>
          <h1 className="title">
            <Link to="/">{siteTitle}</Link>
          </h1>
        </div>
        <MobileOnly>
          <Hamburger isOpen={open} onOpen={onOpen} />
        </MobileOnly>
        <DesktopOnly>
          <DesktopLinks />
        </DesktopOnly>
      </div>
      <MobileOnly>{open ? <MobileLinks /> : null}</MobileOnly>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
