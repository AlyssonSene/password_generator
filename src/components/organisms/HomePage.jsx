import React from "react";
import PasswordGenerator from "../molecules/PasswordGenerator";
import {
  StyledMain,
  StyledSection,
  StyledTitle,
  StyledSubtitle,
} from "../../styles/styles";

const HomePage = () => {
  return (
    <StyledMain>
      <StyledSection>
        <StyledTitle>Bem vindo ao meu gerador de senhas</StyledTitle>
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
