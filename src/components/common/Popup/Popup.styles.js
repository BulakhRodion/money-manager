import styled from 'styled-components';

export const PopupOverlay = styled.div`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
`;

export const PopupContainer = styled.div`
  margin: 70px auto;  
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
`;

export const PopupTitle = styled.h2`
  margin-top: 0;
  color: #333;
`;

export const PopupClose = styled.span`
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

export const PopupContent = styled.div`
  max-height: 30%;
  overflow: auto;
`;