import { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import PinInput from "./PinInput";
import {
  OtpContainer,
  OtpHeading,
  OtpDescription,
  OtpSubmitButton,
  ErrorText,
  ReferenceCodeBox,
  ReferenceLabel,
  ReferenceCode,
  ResendSection,
  ResendText,
  ResendButton,
} from "../styles/components/otpVerification";

const OtpVerification = ({
  phoneNumber,
  onSubmit,
  onResendOtp,
  otp: externalOtp,
}) => {
  const [otp, setOtp] = useState(externalOtp || "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const referenceCode = "DvFKLatl";

  // Update OTP when external OTP changes (from resend)
  useEffect(() => {
    if (externalOtp) {
      setOtp(externalOtp);
    }
  }, [externalOtp]);

  const handleOtpChange = (value) => {
    setOtp(value);
    if (error) {
      setError("");
    }
  };

  const handleResend = async () => {
    setOtp("");
    setError("");

    if (onResendOtp) {
      await onResendOtp();
    }
  };

  const handleSubmit = async () => {
    if (otp.length !== 6) {
      setError("กรุณากรอกรหัส OTP ให้ครบ 6 หลัก");
      return;
    }

    setLoading(true);

    setTimeout(async () => {
      const isValid = await onSubmit({ otp });

      if (!isValid) {
        setError("รหัสยืนยัน OTP ไม่ถูกต้อง กรุณาลองอีกครั้ง");
        setLoading(false);
      }
    }, 300);
  };

  const isValid = otp.length === 6;

  return (
    <OtpContainer>
      <OtpHeading>กรอกรหัส OTP</OtpHeading>
      <OtpDescription>
        กรุณากรอกรหัส OTP 6 หลักที่ส่งไปยัง {phoneNumber}
      </OtpDescription>

      <ReferenceCodeBox>
        <ReferenceLabel>รหัสอ้างอิง :</ReferenceLabel>
        <ReferenceCode>{referenceCode}</ReferenceCode>
      </ReferenceCodeBox>

      <PinInput
        id="otp"
        label="รหัส OTP"
        value={otp}
        onChange={handleOtpChange}
        type="text"
        required
      />

      {error && <ErrorText>{error}</ErrorText>}

      <ResendSection>
        <ResendText>ไม่ได้รับรหัสยืนยัน?</ResendText>
        <ResendButton onClick={handleResend}>ส่งอีกครั้ง</ResendButton>
      </ResendSection>

      <OtpSubmitButton onClick={handleSubmit} disabled={!isValid || loading}>
        {loading ? <LoadingOutlined /> : "ยืนยัน"}
      </OtpSubmitButton>
    </OtpContainer>
  );
};

export default OtpVerification;
