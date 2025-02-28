import React from "react";
import {
  StyledMain,
  StyledSection,
  StyledSubtitle,
  StyledTitle,
} from "../../styles/styles";
import PasswordGenerator from "../molecules/PasswordGenerator";

const HomePage = () => {
  return (
    <StyledMain>
      <StyledSection>
        <StyledTitle>Gerador de senhas</StyledTitle>
        <StyledSubtitle>
          Utilize esse gerador para criar uma senha forte e segura para suas
          contas!
        </StyledSubtitle>
      </StyledSection>
      <PasswordGenerator />
    </StyledMain>
  );
};

export default HomePage;
