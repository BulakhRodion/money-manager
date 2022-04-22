import styled from 'styled-components';

export const NavItemStyles = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8D8D8D;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  width: 100%;
  text-transform: uppercase;
  border-left: 5px solid transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #000;
    border-left: 5px solid #000;
  }
`;

export const NavItemIcon = styled.img`
  height: 1.5rem;
  margin-right: 1rem;
  width: 1.5rem;
  //transition: all 0.3s ease-in-out;
  //&:hover {
  //  fill: #000;
  //}
`;