import { useState, useRef } from "react";
import { Grid, message } from "antd";
import { LeftOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import LoginPin from "../components/LoginPin";
import PinInput from "../components/PinInput";
import { useUser } from "../context/UserContext";
import {
  LoginPage,
  LoginContainer,
  LoginBox,
  LoginContent,
  BackButton,
  WelcomeText,
  FormContainer,
  FormLabel,
  RequiredStar,
  StyledInput,
  StyledPasswordInput,
  SubmitButton,
  OrDivider,
  OrText,
  EmailButton,
  RegisterBlock,
  RegisterText,
  RegisterLink,
  BannerImage,
  ErrorMessage,
} from "../styles/pages/login";

const phoneValidationSchema = yup.object({
  phoneNumber: yup
    .string()
    .required("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง")
    .matches(/^[0-9-]+$/, "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง")
    .test("digits-only", "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง", (value) => {
      if (!value) return false;
      const digitsOnly = value.replace(/-/g, "");
      return digitsOnly.length === 10;
    }),
});

const emailValidationSchema = yup.object({
  email: yup
    .string()
    .required("กรุณากรอกอีเมลให้ถูกต้อง")
    .email("กรุณากรอกอีเมลให้ถูกต้อง"),
  password: yup.string().required("กรุณากรอกรหัสผ่าน"),
});

const formatPhoneNumber = (value) => {
  if (!value) return "";
  const phoneNumber = value.replace(/[^\d]/g, "").slice(0, 10);

  let part1 = phoneNumber.slice(0, 3).padEnd(3, " ");
  let part2 = phoneNumber.slice(3, 6).padEnd(3, " ");
  let part3 = phoneNumber.slice(6, 10).padEnd(4, " ");

  return `${part1}-${part2}-${part3}`;
};

const handlePhoneNumberChange = (
  e,
  { value, onChange, phoneInputRef, cursorPositionRef },
) => {
  const input = e.target;
  const cursorPos = input.selectionStart;
  const prevValue = value || "";
  const newValue = e.target.value;

  const prevDigits = prevValue.replace(/[^\d]/g, "");
  const newDigits = newValue.replace(/[^\d]/g, "");

  if (newDigits.length > 10) {
    return;
  }

  if (newDigits.length < prevDigits.length) {
    cursorPositionRef.current = cursorPos;
  } else {
    const digitsBeforeCursor = newValue
      .slice(0, cursorPos)
      .replace(/[^\d]/g, "").length;
    const formatted = formatPhoneNumber(newValue);

    let newCursorPos = 0;
    let digitCount = 0;
    for (let i = 0; i < formatted.length; i++) {
      if (formatted[i].match(/\d/)) {
        digitCount++;
        if (digitCount === digitsBeforeCursor) {
          newCursorPos = i + 1;
          break;
        }
      }
    }
    cursorPositionRef.current = newCursorPos;
  }

  const formatted = formatPhoneNumber(e.target.value);
  onChange(formatted);

  setTimeout(() => {
    if (phoneInputRef.current && cursorPositionRef.current !== null) {
      phoneInputRef.current.input.setSelectionRange(
        cursorPositionRef.current,
        cursorPositionRef.current,
      );
    }
  }, 0);
};

const Login = () => {
  const navigate = useNavigate();
  const { fetchUser } = useUser();
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const [loginMethod, setLoginMethod] = useState("phone");
  const [step, setStep] = useState("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInputRef = useRef(null);
  const cursorPositionRef = useRef(null);

  const phoneForm = useForm({
    resolver: yupResolver(phoneValidationSchema),
    mode: "onChange",
    defaultValues: {
      phoneNumber: "",
    },
  });

  const emailForm = useForm({
    resolver: yupResolver(emailValidationSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    control: phoneControl,
    handleSubmit: handlePhoneSubmit,
    formState: { errors: phoneErrors, isValid: isPhoneValid },
    reset: resetPhone,
  } = phoneForm;

  const {
    control: emailControl,
    handleSubmit: handleEmailSubmit,
    formState: { errors: emailErrors, isValid: isEmailValid },
    reset: resetEmail,
    setError: setEmailError,
  } = emailForm;

  const onPhoneSubmit = (values) => {
    setPhoneNumber(values.phoneNumber);
    setStep("pin");
  };

  const onEmailSubmit = async (values) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email: values.email,
          password: values.password,
        },
        {
          withCredentials: true,
        },
      );

      console.log("Email login success:", response.data);
      await fetchUser();
      navigate("/");
    } catch (error) {
      console.error("Email login failed:", error);
      const errorMessage =
        error.response?.data?.error || "เข้าสู่ระบบไม่สำเร็จ";
      message.error(errorMessage);
      setEmailError("email", {
        type: "manual",
        message: errorMessage,
      });
      setEmailError("password", {
        type: "manual",
        message: " ",
      });
    }
  };

  const handlePinSubmit = async ({ pin }) => {
    console.log("PIN login:", { phoneNumber, pin });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          phoneNumber,
          pin,
        },
        {
          withCredentials: true,
        },
      );

      console.log("Login success:", response.data);
      await fetchUser();
      navigate("/");
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const handleForgotPin = () => {
    navigate(`/reset-pin/${phoneNumber}`);
  };

  const handleBackFromPin = () => {
    setStep("phone");
  };

  const toggleLoginMethod = () => {
    if (loginMethod === "phone") {
      resetPhone();
      setLoginMethod("email");
    } else {
      resetEmail();
      setLoginMethod("phone");
    }
  };

  return (
    <LoginPage>
      <LoginContainer offset={screens.xl ? 4 : 0} xs={24} xl={8}>
        <LoginBox>
          <LoginContent>
            <BackButton
              onClick={() =>
                step === "pin" ? handleBackFromPin() : navigate(-1)
              }
            >
              <LeftOutlined style={{ fontSize: "16px" }} />
              กลับ
            </BackButton>

            {step === "phone" ? (
              <>
                <WelcomeText>
                  ยินดีต้อนรับสมาชิก Swensen's{"\n"}
                  เข้าสู่ระบบแล้วเริ่มสั่งไอศกรีมกันเลย!
                </WelcomeText>

                {loginMethod === "phone" ? (
                  <form
                    onSubmit={handlePhoneSubmit(onPhoneSubmit)}
                    key="phone-form"
                  >
                    <FormContainer>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <FormLabel htmlFor="phoneNumber">
                          เบอร์โทรศัพท์<RequiredStar>*</RequiredStar>
                        </FormLabel>
                        <Controller
                          name="phoneNumber"
                          control={phoneControl}
                          render={({
                            field: { onChange, value, ...field },
                          }) => (
                            <StyledInput
                              {...field}
                              ref={phoneInputRef}
                              id="phoneNumber"
                              placeholder="กรอกเบอร์โทรศัพท์"
                              value={value}
                              onChange={(e) =>
                                handlePhoneNumberChange(e, {
                                  value,
                                  onChange,
                                  phoneInputRef,
                                  cursorPositionRef,
                                })
                              }
                              status={phoneErrors.phoneNumber ? "error" : ""}
                            />
                          )}
                        />
                        {phoneErrors.phoneNumber && (
                          <ErrorMessage>
                            {phoneErrors.phoneNumber.message}
                          </ErrorMessage>
                        )}
                      </div>

                      <SubmitButton htmlType="submit" disabled={!isPhoneValid}>
                        ดำเนินการต่อ
                      </SubmitButton>
                    </FormContainer>
                  </form>
                ) : (
                  <form
                    onSubmit={handleEmailSubmit(onEmailSubmit)}
                    key="email-form"
                  >
                    <FormContainer>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <FormLabel htmlFor="email">
                          อีเมล<RequiredStar>*</RequiredStar>
                        </FormLabel>
                        <Controller
                          name="email"
                          control={emailControl}
                          render={({ field }) => (
                            <StyledInput
                              {...field}
                              id="email"
                              placeholder="กรอกอีเมล"
                              status={emailErrors.email ? "error" : ""}
                            />
                          )}
                        />
                        {emailErrors.email && (
                          <ErrorMessage>
                            {emailErrors.email.message}
                          </ErrorMessage>
                        )}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <FormLabel htmlFor="password">
                          รหัสผ่าน<RequiredStar>*</RequiredStar>
                        </FormLabel>
                        <Controller
                          name="password"
                          control={emailControl}
                          render={({ field }) => (
                            <StyledPasswordInput
                              {...field}
                              id="password"
                              placeholder="กรอกรหัสผ่าน"
                              status={emailErrors.password ? "error" : ""}
                            />
                          )}
                        />
                        {emailErrors.password && (
                          <ErrorMessage>
                            {emailErrors.password.message}
                          </ErrorMessage>
                        )}
                      </div>

                      <SubmitButton htmlType="submit" disabled={!isEmailValid}>
                        เข้าสู่ระบบ
                      </SubmitButton>
                    </FormContainer>
                  </form>
                )}

                <OrDivider>
                  <OrText>หรือ</OrText>
                </OrDivider>

                <EmailButton onClick={toggleLoginMethod}>
                  {loginMethod === "phone" ? (
                    <>
                      <MailOutlined style={{ fontSize: "20px" }} />
                      เข้าสู่ระบบด้วยอีเมล
                    </>
                  ) : (
                    <>
                      <PhoneOutlined style={{ fontSize: "20px" }} />
                      เข้าสู่ระบบด้วยเบอร์โทร
                    </>
                  )}
                </EmailButton>

                <RegisterBlock>
                  <RegisterText>ยังไม่มีบัญชีใช่หรือไม่</RegisterText>
                  <RegisterLink as={Link} to="/register">
                    สร้างบัญชี
                  </RegisterLink>
                </RegisterBlock>
              </>
            ) : (
              <LoginPin
                onSubmit={handlePinSubmit}
                onForgotPin={handleForgotPin}
              />
            )}
          </LoginContent>
        </LoginBox>
      </LoginContainer>

      {screens.xl && (
        <BannerImage offset={2} span={8}>
          <img
            src={`${import.meta.env.VITE_SWENSENS_URL}/images/banner/register-banner.jpg`}
            alt="bg-banner"
            loading="lazy"
            decoding="async"
          />
        </BannerImage>
      )}
    </LoginPage>
  );
};

export default Login;
