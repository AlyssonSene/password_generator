import React, { useState } from "react";
import "./Home.css";

const HomePage = () => {
  const [newPass, setNewPass] = useState("");
  const [passLength, setPassLength] = useState("6");
  const [showTooltip, setShowTooltip] = useState(false);

  const passGenerator = () => {
    let generatedPass = "";
    const chars =
      "abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()[]{}<>?";

    for (var i = 0; i <= passLength; i += 1) {
      let random = Math.floor(Math.random() * chars.length);
      generatedPass += chars.substring(random, random + 1);
    }
    setNewPass(generatedPass);
  };

  const changPassLength = (value) => {
    setPassLength(value);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(newPass);
      setShowTooltip(true);

      setTimeout(() => {
        setShowTooltip(false);
      }, 2000); // Esconde o tooltip após 2 segundos
    } catch (err) {
      console.error("Erro ao copiar a senha:", err);
    }
  };

  return (
    <div className="homePage">
      <h1>Bem vindo ao meu gerador de senhas</h1>
      <p>
        Utilize esse gerador para criar uma senha forte e segura para suas
        contas!
      </p>
      <input
        readOnly
        type="text"
        name="input password"
        id="inputPass"
        value={newPass}
      />
      <input
        onChange={(e) => {
          changPassLength(e.target.value);
          passGenerator();
        }}
        type="range"
        name="password length"
        id="passLength"
        min={6}
        value={passLength}
        max={32}
      />
      <h4>Quantidade de caracteres: {passLength}</h4>
      {showTooltip && newPass !== "" && (
        <span className="tooltip">Copiado</span>
      )}
      <div>
        <button className="button" onClick={copyToClipboard}>
          Copiar senha
        </button>

        <button className="button" onClick={passGenerator}>
          Gerar nova
        </button>
      </div>
    </div>
  );
};

export default HomePage;
