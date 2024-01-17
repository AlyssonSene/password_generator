import styled from "styled-components";

// export const StyledButton = styled.button`
//   background-color: #039962;
//   border: none;
//   color: #fff;
//   padding: 10px 20px;
//   text-align: center;
//   text-decoration: none;
//   font-size: 16px;
//   cursor: pointer;
//   border-radius: 10px;
//   margin: 10px;
//   width: 200px;

//   &:hover {
//     background-color: #025536;
//   }
// `;

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
  color: #828282;
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffff;
  box-shadow: 1px 1px 2px rgba(132, 148, 165, 0.8);
  border-radius: 8px;
  margin-bottom: 3rem;
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
