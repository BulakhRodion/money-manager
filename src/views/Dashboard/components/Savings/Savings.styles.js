import styled from 'styled-components';

export const SavingsContainer = styled.div`
  display: flex;
  width: 450px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${props => props.theme.backgroundColors.reverseBackground};
`;

export const SavingsItem = styled.div`
	width: 140px;
	padding: 10px;
	border-radius: 10px;
	&:nth-child(1) {
		background-color: #a5485f;
		margin-right: 10px;
	}
	&:nth-child(2) {
		background-color: #9c4900;
		margin-right: 10px;
	}
	&:nth-child(3) {
		background-color: #2a9d8f;
	}
`

export const SavingsIcon = styled.img`
	width: 50px;
	height: 50px;
	margin-bottom: 30px;
`

export const SavingsAmount = styled.h4`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: ${props => props.theme.colors.reversePrimary};
`

export const SavingsGoal = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  color: ${props => props.theme.colors.reversePrimary};
`