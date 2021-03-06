import styled from 'styled-components';

export const CurrencyInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 42px;
  border-radius: 0.5rem;
  border: 1px solid #1c1c1c;
  &:first-child {
    margin-bottom: 10px;
  }
  &:hover, &:focus-within, &:focus-visible {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    border-color: #295CC5;
    outline: none;
  }
`;

export const CurrencyInputStyled = styled.input`
  position: relative;
  width: 70%;
  height: 30px;
  padding: 2px 5px;
  border: none;
  font-style: italic;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  outline: none;
`;

export const CurrencySelectorStyled = styled.select`
  width: 30%;
  height: 30px;
  border: none;
  padding: 2px 5px;
  font-size: 14px;
  font-weight: bold;
  color: #000;
  outline: none;
  text-align: center;
`;