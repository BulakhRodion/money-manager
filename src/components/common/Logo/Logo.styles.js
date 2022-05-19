import styled from 'styled-components';

export const LogoLink = styled.a `
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${props => props.theme.colors.navActive};
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 100px;
  svg {
    width: 60px;
    height: 60px;
    margin-right: 10px;
    fill: ${props => props.theme.fill};
  }
`;
