import styled from 'styled-components';

export const InputFieldWrapper = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const InputFieldLabel = styled.label`
  font-size: 0.8rem;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
  &.active {
    top: 0.5rem;
    left: 0.5rem;
    font-size: 0.8rem;
    transition: all 0.2s ease-in-out;
    pointer-events: none;
  }
`;

export const InputPlaceholder = styled.input`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #1c1c1c;
  font-style: italic;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  outine: none;
  &:hover, &:focus-within, &:focus-visible {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    border-color: #295CC5;
    outline: none;
  }
`;

export const InputIcon = styled.figure`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &.active {
    transition: all 0.2s ease-in-out;
  }
`;