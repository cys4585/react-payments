import { CaptionText, LabelText, TitleText } from "../styles/common";

import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import isNumericString from "../utils/isNumericString";
import styled from "styled-components";
import { useState } from "react";

const CardNumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardNumberBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const validateCardNumberOnChange = (inputValue: string) => {
  if (!isNumericString(inputValue)) {
    throw new Error("카드 번호는 숫자만 입력할 수 있어요");
  }
};

const validateCardNumberOnBlur = (inputValue: string) => {
  if (inputValue.length !== 4) {
    throw new Error("네 자리 수를 입력해주세요");
  }
};

interface CardNumbersProps {
  cardNumbers: CardInformation["cardNumbers"];
  onChange: (inputValue: string, targetIndex: number) => void;
}

export default function CardNumbers({
  cardNumbers,
  onChange,
}: CardNumbersProps) {
  const [errorMessage, setErrorMessage] = useState("");

  const onCardNumberChange = (inputValue: string, cardNumberIndex: number) => {
    try {
      validateCardNumberOnChange(inputValue);
      setErrorMessage("");
      onChange(inputValue, cardNumberIndex);
      return false;
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
      return true;
    }
  };

  const onCardNumberBlur = (inputValue: string) => {
    try {
      validateCardNumberOnBlur(inputValue);
      setErrorMessage("");
      return false;
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
      return true;
    }
  };

  return (
    <CardNumbersContainer>
      <div>
        <TitleText>결제할 카드 번호를 입력해 주세요</TitleText>
        <CaptionText>본인 명의의 카드만 결제 가능합니다.</CaptionText>
      </div>
      <CardNumberBox>
        <LabelText>카드 번호</LabelText>
        <InputContainer>
          <Input
            maxLength={4}
            placeholder="1234"
            onChange={(value) => onCardNumberChange(value, 0)}
            value={cardNumbers[0]}
            onBlur={onCardNumberBlur}
          />
          <Input
            maxLength={4}
            placeholder="1234"
            onChange={(value) => onCardNumberChange(value, 1)}
            value={cardNumbers[1]}
            onBlur={onCardNumberBlur}
          />
          <Input
            maxLength={4}
            placeholder="1234"
            onChange={(value) => onCardNumberChange(value, 2)}
            value={cardNumbers[2]}
            onBlur={onCardNumberBlur}
          />
          <Input
            maxLength={4}
            placeholder="1234"
            onChange={(value) => onCardNumberChange(value, 3)}
            value={cardNumbers[3]}
            onBlur={onCardNumberBlur}
          />
        </InputContainer>
        <ErrorMessage message={errorMessage}></ErrorMessage>
      </CardNumberBox>
    </CardNumbersContainer>
  );
}
