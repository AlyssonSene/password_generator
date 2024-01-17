import React from "react";
import PasswordGenerator from "../molecules/PasswordGenerator";

const HomePage = () => {
  return (
    <div className="homePage">
      <h1>Bem vindo ao meu gerador de senhas</h1>
      <p>
        Utilize esse gerador para criar uma senha forte e segura para suas
        contas!
      </p>
      <PasswordGenerator />
    </div>
  );
};

export default HomePage;