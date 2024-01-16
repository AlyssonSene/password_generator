import React, { useState } from "react";

const HomePage = () => {
  const [newPass, setNewPass] = useState("");
  const [passLength, setPassLength] = useState("6");

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
      console.log("Senha copiada para a área de transferência!");
    } catch (err) {
      console.error("Erro ao copiar a senha:", err);
    }
  };

  return (
    <div>
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
      <button onClick={copyToClipboard}>Copiar senha</button>
      <button onClick={passGenerator}>Gerar nova</button>
    </div>
  );
};

export default HomePage;
