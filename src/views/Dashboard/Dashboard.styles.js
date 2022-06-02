import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  width: calc(100% - 300px);
  margin-left: auto;
  height: 100vh;
  background-color: ${props => props.theme.backgroundColors.mainView};
`;

export const ContentContainerLeft = styled.div`
  padding-left: 20px;
  width: 100%;
  max-width: 500px;
`;

export const ContentContainerRight = styled.div`
  padding-left: 20px;
  padding-top: 30px;
  width: 100%;
  max-width: 900px;
`;

export const DashboardTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin-top: 25px;
  margin-bottom: 40px;
`;

