import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
  width: 40px;
`;

export const StyledMain = styled.main`
  max-width: 780px;
  margin: 0 auto;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 3rem;
`;

export const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 1.5rem;
`;

export const StyledSubtitle = styled.h2`
  font-size: 1.125rem;
  color: #706f6f;
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffff;
  box-shadow: 0 0 1px 1px rgba(132, 148, 165, 0.8);
  border-radius: 10px;
  margin-bottom: 1.5rem;
  padding: 0 10px;
`;

export const StyledInput = styled.input`
  font-family: "Inconsolata", serif;
  font-weight: bold;
  font-size: 2rem;
  border: none;
  outline: none;
  cursor: default;
  height: 50px;
  width: 100%;
  transition: all 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const StyledBoxButtons = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 18%;
`;

export const StyledSecurityBox = styled.div`
  height: 10px;
  background-color: #ddd;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const normalStyles = css`
  height: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  transition: all 0.3s;
`;

const warningStyles = css`
  background-color: #e7b50e;
`;

const safeStyles = css`
  background-color: #03a103;
`;

const criticalStyles = css`
  background-color: #c70d0d;
`;

const completeStyles = css`
  background-color: #03a103;
`;

export const StyledSecurityBar = styled.div`
  ${normalStyles}
  width: ${({ width }) => width}%;

  ${({ level }) => {
    switch (level) {
      case "complete":
        return completeStyles;
      case "strong":
        return safeStyles;
      case "medium":
        return warningStyles;
      case "weak":
        return criticalStyles;
      default:
        return normalStyles;
    }
  }}
`;

export const StyledTitleConfig = styled.div`
  border-bottom: 1px solid #f0f0f0;
  font-size: 1.2rem;
  margin: 2rem 0;
  text-align: start;

  & > h3 {
    font-weight: bold;
  }
`;

export const StyledConfig = styled.div`
  display: flex;
  gap: 3rem;
  color: #6e6e6e;
  margin-bottom: 1.5rem;
`;

export const StyledLengthPass = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

export const StyledSlider = styled.input`
  appearance: none;
  -webkit-appearance: none;
  height: 10px;
  background: #c4c1c1;
  outline: none;
  border-radius: 10px;
  width: 100%;
  margin-top: 1rem;
  cursor: pointer;

  & {
    opacity: 0.7;
    transition: opacity 0.8s ease-in-out;
  }

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background: #9b51e0;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background: #9b51e0;
    cursor: pointer;
  }
`;

export const StyledBoxConfig = styled.div`
  text-align: start;
`;

export const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background: #c9c7c7;
  transition: all 0.2s;

  &:hover {
    background-color: #afafaf;
  }

  &::after {
    content: "";
    display: none;
    position: absolute;
    left: 7px;
    top: 3px;
    width: 7px;
    height: 13px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

export const StyledCheckbox = styled.label`
  display: block;
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & > input {
    position: absolute;
    height: 0;
    width: 0;
    cursor: pointer;
  }

  input[type="checkbox"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;

    &:checked + ${StyledSpan} {
      background-color: #9b51e0;
    }

    &:checked + ${StyledSpan}::after {
      content: "";
      display: block;
    }
  }
`;

export const StyledCopyButton = styled.div`
  text-align: center;
  & > button {
    background-color: #bb6bd9;
    font-size: 1.2rem;
    width: 30%;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 1rem 2rem;
    transition: all 0.2s;
  }
  :hover {
    background-color: #9b51e0;
  }
`;
