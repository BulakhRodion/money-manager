import styled from 'styled-components';

export const TransactionsContainer = styled.div`
  display: flex;
  width: calc(100% - 300px);
  margin-left: auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ConverterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 300px;
  border: 1px solid #000000;
  border-radius: 10px;
`;

export const NumError = styled.span`
  color: #ff0000;
  font-size: 12px;
`;