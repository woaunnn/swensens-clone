import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import PinInput from "./PinInput";
import {
  LoginPinContainer,
  LockIconContainer,
  LockIcon,
  PinHeading,
  PinInputWrapper,
  PinSubmitButton,
  ForgotPinLink,
} from "../styles/pages/loginPin";

const LoginPin = ({ onSubmit, onForgotPin }) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePinChange = (value) => {
    setPin(value);
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (pin.length !== 6) {
      setError("กรุณากรอกรหัส PIN ให้ครบ 6 หลัก");
      return;
    }

    setLoading(true);

    setTimeout(async () => {
      const isValid = await onSubmit({ pin });

      if (!isValid) {
        setError("รหัส PIN ไม่ถูกต้อง กรุณาลองอีกครั้ง");
        setLoading(false);
      }
    }, 300);
  };

  const isValid = pin.length === 6;

  return (
    <LoginPinContainer>
      <LockIconContainer>
        <LockIcon>
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.2139 9H19.9282V6.42857C19.9282 2.82857 17.0996 0 13.4996 0C9.89959 0 7.07102 2.82857 7.07102 6.42857V9H5.78531C4.37102 9 3.21388 10.1571 3.21388 11.5714V24.4286C3.21388 25.8429 4.37102 27 5.78531 27H21.2139C22.6282 27 23.7853 25.8429 23.7853 24.4286V11.5714C23.7853 10.1571 22.6282 9 21.2139 9ZM13.4996 20.5714C12.0853 20.5714 10.9282 19.4143 10.9282 18C10.9282 16.5857 12.0853 15.4286 13.4996 15.4286C14.9139 15.4286 16.071 16.5857 16.071 18C16.071 19.4143 14.9139 20.5714 13.4996 20.5714ZM17.4853 9H9.51388V6.42857C9.51388 4.24286 11.3139 2.44286 13.4996 2.44286C15.6853 2.44286 17.4853 4.24286 17.4853 6.42857V9Z" />
          </svg>
        </LockIcon>
      </LockIconContainer>

      <PinHeading>ใส่รหัส PIN</PinHeading>

      <PinInputWrapper>
        <PinInput
          id="loginPin"
          value={pin}
          onChange={handlePinChange}
          error={error}
          type="password"
        />
      </PinInputWrapper>

      <PinSubmitButton onClick={handleSubmit} disabled={!isValid || loading}>
        {loading ? <LoadingOutlined /> : "ดำเนินการต่อ"}
      </PinSubmitButton>

      <ForgotPinLink onClick={onForgotPin}>ลืมรหัส PIN</ForgotPinLink>
    </LoginPinContainer>
  );
};

export default LoginPin;
