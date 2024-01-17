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

export const StyledTitle = styled.text`
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 1.5rem;
`;

export const StyledSubtitle = styled.text`
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
  justify-content: space-around;
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
  transition: all 0.2s;
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

  ${({ strength }) => {
    switch (strength) {
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
