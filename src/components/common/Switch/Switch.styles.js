import styled from "styled-components";

export const ThemeSwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 20px;
  border-radius: 10px;
  padding: 0;
  margin: 0;
  svg {
    width: 16px;
    height: 16px;
    top: 2px;
    position: absolute;
    pointer-events: none;
    &:first-of-type {
      left: 4px;
    }
    &:last-of-type {
      right: 4px;
    }
  }
`;

export const HiddenInput = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  &:checked + span:before {
    transform: translateX(40px);
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 10px;
  -webkit-transition: .4s;
  transition: .4s;
  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: #000;
    -webkit-transition: .4s;
    transition: .4s;
  }
`;