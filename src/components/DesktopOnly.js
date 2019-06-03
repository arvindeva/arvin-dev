import styled from 'styled-components';

const DesktopOnly = styled.div`
  display: flex;
  @media (max-width: 650px) {
    display: none;
  }
`;

export default DesktopOnly;
