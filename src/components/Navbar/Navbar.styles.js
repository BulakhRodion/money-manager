import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  position: fixed;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 1rem 0;
  background-color: #f1f1f1;
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`;