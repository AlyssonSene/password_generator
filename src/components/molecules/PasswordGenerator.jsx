import React, { useState } from "react";
import Input from "../atoms/Input";
import Range from "../atoms/RangeButton";
import Tooltip from "../atoms/Tooltip";
import Button from "../atoms/Button";

const PasswordGenerator = () => {
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
    passGenerator();
  };

  const copyToClipboard = async () => {
    try {
      if (newPass) {
        await navigator.clipboard.writeText(newPass);
        setShowTooltip(true);

        setTimeout(() => {
          setShowTooltip(false);
        }, 2000);
      }
    } catch (err) {
      console.error("Erro ao copiar a senha:", err);
    }
  };

  return (
    <div className="passwordGenerator">
      <Input
        type="text"
        name="input password"
        id="inputPass"
        value={newPass}
        readOnly
      />
      <Range
        min={6}
        max={32}
        value={passLength}
        onChange={(e) => changPassLength(e.target.value)}
        name="password length"
        id="passLength"
      />
      <h4>Quantidade de caracteres: {passLength}</h4>
      <Tooltip show={showTooltip} className="copied">
        Copiado
      </Tooltip>
      <div className="button-group">
        <Button onClick={copyToClipboard}>Copiar senha</Button>
        <Button onClick={passGenerator}>Gerar nova</Button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
