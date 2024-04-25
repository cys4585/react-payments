import { CardPasswordInputProps } from "../components/payment/CardEnrollForm/CardPasswordInput";
import isNumericString from "../utils/isNumericString";
import { useState } from "react";

const validateOnChange = (inputValue: string) => {
  if (!isNumericString(inputValue)) {
    throw new Error("비밀번호는 숫자만 입력할 수 있어요");
  }
};

const validateOnBlur = (inputValue: string) => {
  if (inputValue.length !== 2) {
    throw new Error("비밀번호는 두 자리 숫자로 입력해 주세요");
  }
};

export interface CardPasswordErrorState {
  isError: boolean;
  errorMessage: string;
}

const useCardPassword = (): CardPasswordInputProps => {
  const [valueState, setValueState] = useState("");

  const [errorState, setErrorState] = useState<CardPasswordErrorState>({
    isError: false,
    errorMessage: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      validateOnChange(event.target.value);
      setValueState(event.target.value);
      setErrorState({ isError: false, errorMessage: "" });
    } catch (error) {
      if (!(error instanceof Error)) {
        return;
      }
      setErrorState({
        isError: true,
        errorMessage: error.message,
      });
    }
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    try {
      validateOnBlur(event.target.value);
      setErrorState({ isError: false, errorMessage: "" });
    } catch (error) {
      if (!(error instanceof Error)) {
        return;
      }
      setErrorState({
        isError: true,
        errorMessage: error.message,
      });
    }
  };

  return {
    valueState,
    errorState,
    onChange,
    onBlur,
  };
};

export default useCardPassword;
