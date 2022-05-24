import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  width: calc(100% - 300px);
  margin-left: auto;
  height: 100vh;
  background-color: ${props => props.theme.backgroundColors.mainView};
`;

export const ContentContainer = styled.div`
  padding-left: 20px;
`;

export const DashboardTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin-top: 25px;
  margin-bottom: 40px;
`;

export const AmountContainer = styled.ul`
  display: flex;
  width: 450px;
  height: 120px;
  border-radius: 10px;
  background-color: ${props => props.theme.backgroundColors.reverseBackground};
`;

export const AmountItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 150px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #8D8D8D;
  position: relative;
  &:nth-child(2):before, &:nth-child(2):after {
    content: "";
    display: block;
    width: 1px;
    height: 25px;
    background-color: #8D8D8D;
    margin: 0 auto;
    position: absolute;
  }
  &:nth-child(2):before {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  &:nth-child(2):after{
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;

export const AmountItemTitle = styled.span`
  margin-top: 10px;
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  color: ${props => props.theme.colors.reversePrimary};
`;