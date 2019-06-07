import React from 'react';
import styled from 'styled-components';
import { GitHub, Linkedin } from 'react-feather';

const StyledContact = styled.div`
  .social-media-links {
    display: grid;
    grid-gap: 1rem;
    .social-media {
      display: flex;
      align-items: center;
      .icons {
        padding: 0.5rem;
      }
    }
  }
`;

const Contact = () => (
  <StyledContact>
    <h1>Contact</h1>
    <p>
      You can reach me at <u>arvindeva@gmail.com.</u>
    </p>
    <div className="social-media-links">
      <div className="social-media">
        <div className="icons">
          <a
            href="https://github.com/arvindeva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </div>
        <a
          href="https://github.com/arvindeva"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      <div className="social-media">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/arvindeva/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/arvindeva/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>LinkedIn</div>
        </a>
      </div>
    </div>
  </StyledContact>
);

export default Contact;
