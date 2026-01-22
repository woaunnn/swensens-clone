import { useState, useRef, useEffect } from "react";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import PinInput from "./PinInput";
import {
  CreatePinContainer,
  PinHeading,
  PinDescription,
  TogglePinButton,
  PinSubmitButton,
} from "../styles/components/createPin";

const CreatePin = ({ onSubmit }) => {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState({ pin: "", confirmPin: "" });
  const [loading, setLoading] = useState(false);
  const confirmPinRef = useRef(null);

  const handlePinChange = (value) => {
    setPin(value);
    if (error.pin) {
      setError({ ...error, pin: "" });
    }
  };

  const handlePinComplete = () => {
    if (confirmPinRef.current) {
      confirmPinRef.current.focusFirstInput();
    }
  };

  const handleConfirmPinChange = (value) => {
    setConfirmPin(value);

    if (error.confirmPin) {
      setError({ ...error, confirmPin: "" });
    }
  };

  const toggleShowPin = () => {
    setShowPin(!showPin);
  };

  const handleSubmit = async () => {
    if (pin.length !== 6) {
      setError({ ...error, pin: "กรุณากรอกรหัส PIN ให้ครบ 6 หลัก" });
      return;
    }

    if (confirmPin.length !== 6) {
      setError({ ...error, confirmPin: "กรุณากรอกรหัส PIN ให้ครบ 6 หลัก" });
      return;
    }

    if (pin !== confirmPin) {
      setError({ ...error, confirmPin: "รหัส PIN ไม่ตรงกัน" });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      onSubmit({ pin });
    }, 300);
  };

  useEffect(() => {
    if (pin.length === 6 && confirmPin.length === 6 && pin === confirmPin) {
      const timer = setTimeout(() => {
        handleSubmit();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [pin, confirmPin]);

  const isValid =
    pin.length === 6 && confirmPin.length === 6 && pin === confirmPin;

  return (
    <CreatePinContainer>
      <PinHeading>สร้างรหัส PIN</PinHeading>
      <PinDescription>
        รหัส PIN 6 หลักนี้จะช่วยให้คุณทำกิจกรรม ได้อย่างปลอดภัยยิ่งขึ้น
      </PinDescription>

      <PinInput
        id="pin"
        label="สร้างรหัส PIN"
        value={pin}
        onChange={handlePinChange}
        onComplete={handlePinComplete}
        error={error.pin}
        type={showPin ? "text" : "password"}
        required
      />

      <PinInput
        ref={confirmPinRef}
        id="confirmPin"
        label="ยืนยันรหัส PIN"
        value={confirmPin}
        onChange={handleConfirmPinChange}
        error={error.confirmPin}
        type={showPin ? "text" : "password"}
        required
      />

      <TogglePinButton onClick={toggleShowPin}>
        {showPin ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        {showPin ? "ซ่อนรหัส PIN" : "แสดงรหัส PIN"}
      </TogglePinButton>

      <PinSubmitButton onClick={handleSubmit} disabled={!isValid || loading}>
        {loading ? <LoadingOutlined /> : "ดำเนินการต่อ"}
      </PinSubmitButton>
    </CreatePinContainer>
  );
};

export default CreatePin;
