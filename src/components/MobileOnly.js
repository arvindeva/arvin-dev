import styled from 'styled-components';

const MobileOnly = styled.div`
  display: none;
  @media screen and (max-width: 650px) {
    display: block;
  }
`;

export default MobileOnly;
