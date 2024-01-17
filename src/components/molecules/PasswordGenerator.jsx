import React, { useState } from "react";
import Input from "../atoms/Input";
import Range from "../atoms/RangeButton";
import Tooltip from "../atoms/Tooltip";
import Button from "../atoms/Button";
import copyIcon from "../../assets/duplicate.svg";
import refresIcon from "../../assets/refresh.svg";
import {
  StyledBox,
  StyledBoxButtons,
  StyledSecurityBox,
  StyledSecurityBar,
} from "../../styles/styles";

const PasswordGenerator = () => {
  const [newPass, setNewPass] = useState("");
  const [passLength, setPassLength] = useState("6");
  const [showTooltip, setShowTooltip] = useState(false);

  const passGenerator = () => {
    let generatedPass = "";
    const chars =
      "abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()[]{}<>?";

    for (var i = 0; i < passLength; i += 1) {
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
    <section>
      <StyledBox>
        <Input
          type="text"
          name="input password"
          id="inputPass"
          value={newPass}
          readOnly
        />
        <StyledBoxButtons>
          <Button onClick={copyToClipboard} className={"copy"}>
            <img src={copyIcon} alt="copy pass" />
          </Button>
          <Button onClick={passGenerator} className={"refresh"}>
            <img src={refresIcon} alt="refresh pass" />
          </Button>
        </StyledBoxButtons>
      </StyledBox>

      <StyledSecurityBox>
        <StyledSecurityBar strength="weak" id="securityBar"></StyledSecurityBar>
      </StyledSecurityBox>

      <div>
        <h3>Personalizar</h3>
        <h4>Quantidade de caracteres: {passLength}</h4>
        <Range
          min={6}
          max={32}
          value={passLength}
          onChange={(e) => changPassLength(e.target.value)}
          name="password length"
          id="passLength"
        />

        <div>
          <input type="checkbox" name="uppercase" />
          <span>Maiúsculas</span>

          <input type="checkbox" name="numbers" />
          <span>Números</span>

          <input type="checkbox" name="simbols" />
          <span>Símbolos</span>
        </div>
      </div>
      <Tooltip show={showTooltip} className="copied">
        Copiado
      </Tooltip>
    </section>
  );
};

export default PasswordGenerator;
