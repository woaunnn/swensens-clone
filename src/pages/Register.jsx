import { useRef, useState } from "react";
import { Form, Grid, Radio } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import CreatePin from "../components/CreatePin";
import OtpVerification from "../components/OtpVerification";
import {
  RegisterPage,
  RegisterContainer,
  RegisterBox,
  RegisterContent,
  BackButton,
  WelcomeText,
  FormContainer,
  FormRow,
  FormField,
  FormLabel,
  RequiredStar,
  StyledInput,
  StyledDatePicker,
  GenderSection,
  GenderLabel,
  RadioGroup,
  AcceptanceSection,
  StyledCheckbox,
  LinkButton,
  SubmitButton,
  LoginBlock,
  LoginText,
  LoginLink,
  BannerImage,
} from "../styles/pages/register";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required("กรุณากรอกชื่อ")
    .min(2, "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร")
    .matches(/^[^0-9]*$/, "ชื่อต้องไม่มีตัวเลข"),
  lastName: yup
    .string()
    .required("กรุณากรอกนามสกุล")
    .min(2, "นามสกุลต้องมีอย่างน้อย 2 ตัวอักษร")
    .matches(/^[^0-9]*$/, "นามสกุลต้องไม่มีตัวเลข"),
  phoneNumber: yup
    .string()
    .required("กรุณากรอกเบอร์โทรศัพท์")
    .matches(/^[0-9-]+$/, "กรอกได้เฉพาะตัวเลขและเครื่องหมาย -")
    .test("digits-only", "เบอร์โทรศัพท์ต้องมี 10 หลัก", (value) => {
      if (!value) return false;
      const digitsOnly = value.replace(/-/g, "");
      return digitsOnly.length === 10;
    }),
  birthday: yup.mixed().required("กรุณาเลือกวันเกิด"),
  email: yup.string().email("กรุณากรอกอีเมลให้ถูกต้อง"),
  gender: yup.string().required("กรุณาเลือกเพศ"),
  acceptTerms: yup
    .boolean()
    .oneOf([true], "กรุณายอมรับข้อกำหนดการใช้งานและนโยบายความเป็นส่วนตัว"),
  receivedNews: yup.boolean(),
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

const Register = () => {
  const navigate = useNavigate();
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const phoneInputRef = useRef(null);
  const cursorPositionRef = useRef(null);

  const [step, setStep] = useState("register");
  const [registerData, setRegisterData] = useState(null);
  const [generatedOtp, setGeneratedOtp] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      gender: "other",
      acceptTerms: true,
      receivedNews: false,
    },
  });

  const onFinish = (values) => {
    console.log("Form values:", values);
    setRegisterData(values);
    setStep("pin");
  };

  const handlePinSubmit = async ({ pin }) => {
    console.log("PIN submitted:", pin);

    const updatedData = { ...registerData, pin };
    setRegisterData(updatedData);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/generate-otp`,
        {
          phoneNumber: registerData.phoneNumber,
        },
      );

      console.log("OTP generated:", response.data.otp);
      setGeneratedOtp(response.data.otp);
      setStep("otp");
    } catch (error) {
      console.error("Failed to generate OTP:", error);
    }
  };

  const handleOtpSubmit = async ({ otp }) => {
    console.log("OTP submitted:", otp);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          userData: registerData,
          otp,
        },
      );

      console.log("User registered:", response.data);
      navigate("/login");
      return true;
    } catch (error) {
      console.error("Registration failed:", error);
      return false;
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/generate-otp`,
        {
          phoneNumber: registerData.phoneNumber,
        },
      );

      console.log("OTP resent:", response.data.otp);
      setGeneratedOtp(response.data.otp);
    } catch (error) {
      console.error("Failed to resend OTP:", error);
    }
  };

  const handleBackFromPin = () => {
    setStep("register");
  };

  const handleBackFromOtp = () => {
    setStep("pin");
  };

  return (
    <RegisterPage>
      <RegisterContainer offset={screens.xl ? 4 : 0} xs={24} xl={8}>
        <RegisterBox xs={24}>
          <RegisterContent>
            <BackButton
              onClick={
                step === "otp"
                  ? handleBackFromOtp
                  : step === "pin"
                    ? handleBackFromPin
                    : () => navigate(-1)
              }
            >
              <LeftOutlined style={{ fontSize: "16px" }} />
              <span>กลับ</span>
            </BackButton>

            {step === "register" ? (
              <>
                <WelcomeText>
                  สมัครสมาชิกฟรี! รับสิทธิประโยชน์และส่วนลดมากมาย
                </WelcomeText>

                <form onSubmit={handleSubmit(onFinish)}>
                  <FormContainer>
                    <FormRow>
                      <FormField $half>
                        <FormLabel htmlFor="firstName">
                          ชื่อ<RequiredStar>*</RequiredStar>
                        </FormLabel>
                        <Controller
                          name="firstName"
                          control={control}
                          render={({ field }) => (
                            <StyledInput
                              {...field}
                              id="firstName"
                              placeholder="ชื่อ"
                              status={errors.firstName ? "error" : ""}
                            />
                          )}
                        />
                        {errors.firstName && (
                          <span
                            style={{
                              color: "#e31837",
                              fontSize: "14px",
                              marginTop: "4px",
                            }}
                          >
                            {errors.firstName.message}
                          </span>
                        )}
                      </FormField>

                      <FormField $half>
                        <FormLabel htmlFor="lastName">
                          นามสกุล<RequiredStar>*</RequiredStar>
                        </FormLabel>
                        <Controller
                          name="lastName"
                          control={control}
                          render={({ field }) => (
                            <StyledInput
                              {...field}
                              id="lastName"
                              placeholder="นามสกุล"
                              status={errors.lastName ? "error" : ""}
                            />
                          )}
                        />
                        {errors.lastName && (
                          <span
                            style={{
                              color: "#e31837",
                              fontSize: "14px",
                              marginTop: "4px",
                            }}
                          >
                            {errors.lastName.message}
                          </span>
                        )}
                      </FormField>
                    </FormRow>

                    <FormRow>
                      <FormField>
                        <FormLabel htmlFor="phoneNumber">
                          เบอร์โทรศัพท์<RequiredStar>*</RequiredStar>
                        </FormLabel>
                        <Controller
                          name="phoneNumber"
                          control={control}
                          render={({
                            field: { onChange, value, ...field },
                          }) => (
                            <StyledInput
                              {...field}
                              ref={phoneInputRef}
                              id="phoneNumber"
                              placeholder="___-___-____"
                              value={value}
                              onChange={(e) =>
                                handlePhoneNumberChange(e, {
                                  value,
                                  onChange,
                                  phoneInputRef,
                                  cursorPositionRef,
                                })
                              }
                              status={errors.phoneNumber ? "error" : ""}
                            />
                          )}
                        />
                        {errors.phoneNumber && (
                          <span
                            style={{
                              color: "#e31837",
                              fontSize: "14px",
                              marginTop: "4px",
                            }}
                          >
                            {errors.phoneNumber.message}
                          </span>
                        )}
                      </FormField>

                      <FormField>
                        <FormLabel htmlFor="birthday">
                          วันเกิด<RequiredStar>*</RequiredStar>
                        </FormLabel>
                        <Controller
                          name="birthday"
                          control={control}
                          render={({ field }) => (
                            <StyledDatePicker
                              {...field}
                              id="birthday"
                              placeholder="วว/ดด/ปปปป"
                              format="DD/MM/YYYY"
                              style={{ width: "100%" }}
                              status={errors.birthday ? "error" : ""}
                            />
                          )}
                        />
                        {errors.birthday && (
                          <span
                            style={{
                              color: "#e31837",
                              fontSize: "14px",
                              marginTop: "4px",
                            }}
                          >
                            {errors.birthday.message}
                          </span>
                        )}
                      </FormField>
                    </FormRow>

                    <FormRow>
                      <FormField $half>
                        <FormLabel htmlFor="email">
                          อีเมล (ไม่ระบุได้)
                        </FormLabel>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => (
                            <StyledInput
                              {...field}
                              id="email"
                              placeholder="อีเมล (ไม่ระบุได้)"
                              type="email"
                              status={errors.email ? "error" : ""}
                            />
                          )}
                        />
                        {errors.email && (
                          <span
                            style={{
                              color: "#e31837",
                              fontSize: "14px",
                              marginTop: "4px",
                            }}
                          >
                            {errors.email.message}
                          </span>
                        )}
                      </FormField>

                      <GenderSection>
                        <GenderLabel>
                          เพศ<RequiredStar>*</RequiredStar>
                        </GenderLabel>
                        <Controller
                          name="gender"
                          control={control}
                          render={({ field }) => (
                            <RadioGroup {...field}>
                              <Radio value="male">ชาย</Radio>
                              <Radio value="female">หญิง</Radio>
                              <Radio value="other">ไม่ระบุ</Radio>
                            </RadioGroup>
                          )}
                        />
                        {errors.gender && (
                          <span
                            style={{
                              color: "#e31837",
                              fontSize: "14px",
                              marginTop: "4px",
                            }}
                          >
                            {errors.gender.message}
                          </span>
                        )}
                      </GenderSection>
                    </FormRow>

                    <AcceptanceSection>
                      <div>
                        <Controller
                          name="acceptTerms"
                          control={control}
                          render={({ field }) => (
                            <StyledCheckbox
                              {...field}
                              checked={field.value}
                              onChange={(e) => field.onChange(e.target.checked)}
                            >
                              ฉันได้อ่านและยอมรับ{" "}
                              <LinkButton type="button">
                                ข้อกำหนดการใช้งาน
                              </LinkButton>{" "}
                              และ{" "}
                              <LinkButton type="button">
                                นโยบายความเป็นส่วนตัว
                              </LinkButton>{" "}
                              ของสเวนเซ่นส์<RequiredStar>*</RequiredStar>
                            </StyledCheckbox>
                          )}
                        />
                        {errors.acceptTerms && (
                          <span
                            style={{
                              color: "#e31837",
                              fontSize: "14px",
                              marginTop: "4px",
                              display: "block",
                            }}
                          >
                            {errors.acceptTerms.message}
                          </span>
                        )}
                      </div>

                      <Controller
                        name="receivedNews"
                        control={control}
                        render={({ field }) => (
                          <StyledCheckbox
                            {...field}
                            checked={field.value}
                            onChange={(e) => field.onChange(e.target.checked)}
                          >
                            ฉันยินยอมรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ
                            จากสเวนเซ่นส์และ
                            <LinkButton type="button">
                              บริษัทในเครือ
                            </LinkButton>{" "}
                            โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ
                            สามารถศึกษาเงื่อนไขหรือข้อตกลง{" "}
                            <LinkButton type="button">
                              นโยบายความเป็นส่วนตัว
                            </LinkButton>{" "}
                            เพิ่มเติมได้ที่เว็บไซต์ของบริษัทฯ
                          </StyledCheckbox>
                        )}
                      />
                    </AcceptanceSection>

                    <SubmitButton htmlType="submit" disabled={!isValid}>
                      สร้างบัญชี
                    </SubmitButton>
                  </FormContainer>
                </form>

                <LoginBlock>
                  <LoginText>มีบัญชีสมาชิกอยู่แล้วใช่หรือไม่</LoginText>
                  <LoginLink onClick={() => navigate("/login")}>
                    เข้าสู่ระบบ
                  </LoginLink>
                </LoginBlock>
              </>
            ) : step === "pin" ? (
              <CreatePin
                onSubmit={handlePinSubmit}
                onBack={handleBackFromPin}
              />
            ) : (
              <OtpVerification
                phoneNumber={registerData?.phoneNumber}
                onSubmit={handleOtpSubmit}
                onBack={handleBackFromOtp}
                onResendOtp={handleResendOtp}
                otp={generatedOtp}
              />
            )}
          </RegisterContent>
        </RegisterBox>
      </RegisterContainer>

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
    </RegisterPage>
  );
};

export default Register;
