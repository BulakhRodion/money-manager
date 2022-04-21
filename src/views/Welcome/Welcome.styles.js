import styled from 'styled-components';

export const WelcomeUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
`;

export const WelcomeTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  //background: rgb(255,255,255);
  //background: linear-gradient(90deg, rgba(255,255,255,1) 13%, rgba(228,179,16,0.8911939775910365) 41%, rgba(223,132,40,0.9836309523809523) 80%);
`;

export const WelcomeSubtitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

export const FlexAlignCenter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ColumnHalf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 1rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  height: 350px;
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const FormTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

export const FormText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

export const FormLink = styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  color:  #295CC5;
  text-decoration: none;
  margin-top: 10px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #00a8ff;
  }
`;
