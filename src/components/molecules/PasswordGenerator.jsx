import React, { useCallback, useEffect, useState } from "react";
import Input from "../atoms/Input";
import Range from "../atoms/RangeButton";
import Button from "../atoms/Button";
import refresIcon from "../../assets/refresh.svg";
import copyIcon from "../../assets/duplicate.svg";
import {
  StyledBox,
  StyledBoxButtons,
  StyledSecurityBox,
  StyledSecurityBar,
  StyledTitleConfig,
  StyledConfig,
  StyledLengthPass,
  StyledBoxConfig,
  StyledCopyButton,
} from "../../styles/styles";
import CheckboxInput from "../atoms/Checkbox";
import Title from "../atoms/Title";

const PasswordGenerator = () => {
  const [newPass, setNewPass] = useState("");
  const [passLength, setPassLength] = useState("6");
  const [uppercasesChecked, setUppercasesChecked] = useState(true);
  const [numbersChecked, setNumbersChecked] = useState(true);
  const [symbolsChecked, setSymbolsChecked] = useState(true);
  const [level, setPassLevel] = useState("");
  const [strength, setPassStrength] = useState("");

  const passGenerator = useCallback(() => {
    let generatedPass = "";
    let chars = "abcdefghijklmnopqrstuvwxyz";
    const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()[]{}<>?";

    if (uppercasesChecked) chars += upperCases;

    if (numbersChecked) chars += numbers;

    if (symbolsChecked) chars += symbols;

    for (var i = 0; i < passLength; i += 1) {
      let random = Math.floor(Math.random() * chars.length);
      generatedPass += chars.substring(random, random + 1);
    }

    setNewPass(generatedPass);

    let strength = Math.round(
      (passLength / 32) * 25 +
        (uppercasesChecked ? 20 : 0) +
        (numbersChecked ? 25 : 0) +
        (symbolsChecked ? 30 : 0)
    );

    let level = "weak";

    if (strength > 100) strength = 100;

    if (strength >= 35) level = "medium";

    if (strength >= 55) level = "strong";

    if (strength >= 70) level = "complete";

    setPassLevel(level);
    setPassStrength(strength);
  }, [numbersChecked, passLength, symbolsChecked, uppercasesChecked]);

  useEffect(() => {
    passGenerator();
  }, [passGenerator]);

  const handleUppercasesChecked = (event) => {
    setUppercasesChecked(event.target.checked);
  };

  const handleSymbolsChecked = (event) => {
    setSymbolsChecked(event.target.checked);
  };

  const handleNumbersChecked = (event) => {
    setNumbersChecked(event.target.checked);
  };

  const changPassLength = (e) => {
    setPassLength(e.target.value);
  };

  const copyToClipboard = async () => {
    try {
      if (newPass) {
        await navigator.clipboard.writeText(newPass);
        setTimeout(() => {}, 2000);
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
          <Button onClick={passGenerator} className={"refresh"}>
            <img src={refresIcon} alt="refresh pass" />
          </Button>
        </StyledBoxButtons>
      </StyledBox>

      <StyledSecurityBox>
        <StyledSecurityBar
          width={strength}
          level={level}
          id="securityBar"
        ></StyledSecurityBar>
      </StyledSecurityBox>

      <StyledTitleConfig>
        <Title level={"3"} text={"Personalizar"} />
      </StyledTitleConfig>

      <StyledLengthPass>
        <Title level={"4"} text={`Quantidade de caracteres: ${passLength}`} />
      </StyledLengthPass>

      <StyledConfig>
        <Range
          min={6}
          max={32}
          value={passLength}
          onChange={(e) => changPassLength(e)}
          name="password length"
          id="passLength"
        />
        <StyledBoxConfig>
          <CheckboxInput
            checked={uppercasesChecked}
            onChange={handleUppercasesChecked}
            name={"uppercases"}
            label={"Maiúsculas"}
          />
          <CheckboxInput
            checked={numbersChecked}
            onChange={handleNumbersChecked}
            name={"numbers"}
            label={"Números"}
          />
          <CheckboxInput
            checked={symbolsChecked}
            onChange={handleSymbolsChecked}
            name={"symbols"}
            label={"Símbolos"}
          />
        </StyledBoxConfig>
      </StyledConfig>
      <StyledCopyButton>
        <button onClick={copyToClipboard} className={"copy"}>
          Copiar
        </button>
      </StyledCopyButton>
    </section>
  );
};

export default PasswordGenerator;
