import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";
import { applyTypography } from "../styles/typography";

const PinContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
  width: calc(min(100%, 440px));
`;

const PinLabel = styled.label`
  display: flex;
  gap: 8px;
  ${applyTypography({ fontSize: "22px", fontWeight: 500, lineHeight: "20px" })}
  color: #1a1a1a;
`;

const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 8px;
`;

const PinInputBox = styled.input`
  width: 44px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  text-align: center;
  ${applyTypography({ fontSize: "16px", fontWeight: 400, lineHeight: "24px" })}
  color: #1a1a1a;
  caret-color: #1a1a1a;
  appearance: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &:focus {
    outline: 1px solid #e31837;
    border-color: #e31837;
  }

  &[data-error="true"] {
    border-color: #e31837;
  }
`;

const ErrorMessage = styled.span`
  ${applyTypography({ fontSize: "14px", fontWeight: 400, lineHeight: "20px" })}
  color: #e31837;
  text-align: center;
`;

const PinInput = forwardRef(
  (
    { label, value = "", onChange, error, type = "tel", id, onComplete },
    ref,
  ) => {
    const inputRefs = useRef([]);
    const digits = value.padEnd(6, " ").split("").slice(0, 6);

    useEffect(() => {
      inputRefs.current = inputRefs.current.slice(0, 6);
    }, []);

    useImperativeHandle(ref, () => ({
      focusFirstInput: () => {
        inputRefs.current[0]?.focus();
      },
    }));

    const handleChange = (index, val) => {
      if (val && !/^\d$/.test(val)) return;

      const newDigits = [...digits];
      newDigits[index] = val || " ";
      const newValue = newDigits.join("").replace(/ /g, "");
      onChange(newValue);

      if (val && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }

      if (val && index === 5 && onComplete) {
        onComplete();
      }
    };

    const handleKeyDown = (index, e) => {
      if (e.key === "Backspace") {
        if (!digits[index] || digits[index] === " ") {
          if (index > 0) {
            inputRefs.current[index - 1]?.focus();
          }
        } else {
          handleChange(index, "");
        }
        e.preventDefault();
      } else if (e.key === "ArrowLeft" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === "ArrowRight" && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e) => {
      e.preventDefault();
      const pastedData = e.clipboardData
        .getData("text")
        .replace(/\D/g, "")
        .slice(0, 6);
      onChange(pastedData);

      const lastIndex = Math.min(pastedData.length, 5);
      inputRefs.current[lastIndex]?.focus();
    };

    return (
      <PinContainer id={id}>
        {label && <PinLabel htmlFor={id}>{label}</PinLabel>}
        <InputsContainer>
          {digits.map((digit, index) => (
            <PinInputBox
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type={type}
              inputMode="numeric"
              maxLength={1}
              value={digit === " " ? "" : digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              data-error={!!error}
              aria-label={`Please enter PIN character ${index + 1}`}
              autoComplete="off"
            />
          ))}
        </InputsContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </PinContainer>
    );
  },
);

PinInput.displayName = "PinInput";

export default PinInput;
