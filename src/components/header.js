import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: hsla(0, 0%, 0%, 0.9);
  margin-bottom: 1.45rem;
  padding: 1rem 1rem;

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

    .links {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .link {
        padding: 0 1em;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="wrapper">
      <div>
        <h1 className="title">
          <StyledLink to="/">{siteTitle}</StyledLink>
        </h1>
      </div>
      <div className="links">
        <div className="link">
          <StyledLink to="/portfolio">Portfolio</StyledLink>
        </div>
        <div className="link">
          <StyledLink to="/blog">Blog</StyledLink>
        </div>
        <div className="link">
          <StyledLink to="/contact">Contact</StyledLink>
        </div>
      </div>
    </div>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
