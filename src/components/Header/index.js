import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

import Hamburger from './Hamburger';
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

    .desktop-links {
      display: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .desktop-link {
      padding: 0 1em;
    }
  }

  .mobile-links {
    text-align: center;
    .mobile-link {
    }
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const DesktopLinks = () => (
  <div className="desktop-links">
    <div className="desktop-link">
      <StyledLink to="/portfolio">Portfolio</StyledLink>
    </div>
    <div className="desktop-link">
      <StyledLink to="/blog">Blog</StyledLink>
    </div>
    <div className="desktop-link">
      <StyledLink to="/contact">Contact</StyledLink>
    </div>
  </div>
);

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
            <StyledLink to="/">{siteTitle}</StyledLink>
          </h1>
        </div>
        <MobileOnly>
          <Hamburger isOpen={open} onOpen={onOpen} />
        </MobileOnly>
        <DesktopOnly>
          <DesktopLinks />
        </DesktopOnly>
      </div>
      {open ? (
        <div className="mobile-links">
          <div className="mobile-link">Portfolio</div>
          <div className="mobile-link">Blog</div>
          <div className="mobile-link">Contact</div>
        </div>
      ) : null}
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
