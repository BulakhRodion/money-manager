import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  width: calc(100% - 300px);
  margin-left: auto;
  height: 100vh;
  background-color: ${props => props.theme.backgroundColors.mainView};
`;
