import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

const Link = styled(GatsbyLink)`
  text-decoration: none;
`;

export const UnderlinedLink = styled(Link)`
  text-decoration: underline;
`;

export default Link;
