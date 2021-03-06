import styled from 'styled-components';

export const NavItemStyles = styled.li`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.navPrimary};
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  width: 100%;
  text-transform: uppercase;
  border-left: 5px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.navHover};
    border-left: 5px solid ${props => props.theme.colors.navHover};
  }
  svg {
    fill: ${(props) => props.theme.fill};
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.navPrimary};
    &:hover {
      color: ${props => props.theme.colors.navHover};
    }
  }
`;

export const NavIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const NavDivider = styled.div`
  width: 100px;
  height: 1px;
  background-color: #8D8D8D;
  margin: 1rem 0;
`;