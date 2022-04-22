import styled from 'styled-components';

export const ToastWrapper = styled.div `
  
`

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 9999;
  display: flex;
  width: 300px;
  height: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: #f3f3f3;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  animation: slide-in 0.5s ease-out;
  animation-fill-mode: forwards;
  @keyframes slide-in {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const ToastMessage = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 0;
`;