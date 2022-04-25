import styled from "styled-components";

export const ErrorUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: #01147E;
  padding: 10px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 400px;
  border-radius: 30px;
  background-color: #f5f5f5;
`;

export const ErrorImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

export const ErrorTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #1c1c1c;
  margin-bottom: 20px;
`;

export const ErrorText = styled.p`
  font-size: 20px;
  text-align: center;
  color: #8d8d8d;
`;

export const ErrorButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: #01147E;
  border: none;
  border-radius: 30px;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #01147E;
    color: #fff;
  }
`;