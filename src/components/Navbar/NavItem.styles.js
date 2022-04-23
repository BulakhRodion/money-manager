import styled from 'styled-components';

export const NavItemStyles = styled.li`
  display: flex;
  align-items: center;
  color: #8D8D8D;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  width: 100%;
  text-transform: uppercase;
  border-left: 5px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #000;
    border-left: 5px solid #000;
  }
  svg {
    fill: #000;
  }
  a {
    text-decoration: none;
    color: #8D8D8D;
    &:hover {
      color: #000;
    }
  }
`;

export const NavIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;