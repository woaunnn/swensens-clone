import styled from "styled-components";
import { Button, Col, Input, Row } from "antd";
import { typography, applyTypography } from "../typography";
import { theme } from "../theme";

export const LoginPage = styled(Row)`
  position: relative;
  width: 100%;
  background: #f5f5f5;

  /* @media (min-width: 1024px) {
    & > * + * {
      margin-top: 24px;
    }
  } */
`;

export const LoginContainer = styled(Col)`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  min-height: calc(100vh - 80px);
  padding: 24px;
`;

export const BannerImage = styled(Col)`
  /* position: absolute;
  top: 0;
  right: 0; */
  /* height: 100%; */
  /* min-height: 100vh; */
  /* width: 40%;
  flex-shrink: 0; */

  @media (min-width: 1024px) {
    display: block;

    img {
      position: absolute;
      height: 100%;
      width: 100%;
      inset: 0;
      object-fit: cover;
    }
  }
`;

export const LoginBox = styled(Col)`
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  background: #ffffff;
  padding: 24px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

export const LoginContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
`;

export const BackButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  height: 40px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: transparent;
  ${applyTypography(typography.title.sm.medium)}
  color: #1a1a1a;

  &:hover {
    border: none !important;
    background: rgba(0, 0, 0, 0.04) !important;
    color: #1a1a1a !important;
  }

  &:focus {
    border: none !important;
    background: rgba(227, 24, 55, 0.08) !important;
    color: #1a1a1a !important;
  }

  @media (min-width: 768px) {
    height: 48px;
    padding: 12px 16px;
    ${applyTypography(typography.title.md.medium)}
  }
`;

export const WelcomeText = styled.div`
  white-space: pre-wrap;
  ${applyTypography(typography.display.small)}
  color: #1a1a1a;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormLabel = styled.label`
  display: flex;
  gap: 8px;
  ${applyTypography(typography.label.medium)}
  font-weight: 500;
  color: rgb(${theme.colors.gray[700]});
`;

export const RequiredStar = styled.span`
  color: #e31837;
`;

export const StyledInput = styled(Input)`
  height: 42px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  background: #f9fafb;
  padding: 8px 16px;
  ${applyTypography(typography.body.md.regular)}

  &::placeholder {
    color: #667085;
  }

  &:hover {
    border-color: #d0d5dd !important;
    background: #f9fafb !important;
  }

  &:focus,
  &.ant-input-focused {
    border-color: #d0d5dd !important;
    background: #f9fafb !important;
    box-shadow: none !important;
    outline: none !important;
  }

  &:disabled {
    cursor: not-allowed;
    border-color: #eaecf0;
    background: #f2f4f7;

    &::placeholder {
      color: #d0d5dd;
    }
  }
`;

export const StyledPasswordInput = styled(Input.Password)`
  height: 42px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  background: #f9fafb;
  padding: 8px 16px;
  ${applyTypography(typography.body.md.regular)}

  .ant-input {
    ${applyTypography(typography.body.md.regular)}
    background: transparent;

    &::placeholder {
      color: #667085;
    }
  }

  &:hover {
    border-color: #d0d5dd !important;
    background: #f9fafb !important;
  }

  &:focus,
  &.ant-input-affix-wrapper-focused {
    border-color: #d0d5dd !important;
    background: #f9fafb !important;
    box-shadow: none !important;
    outline: none !important;
  }

  &:disabled {
    cursor: not-allowed;
    border-color: #eaecf0;
    background: #f2f4f7;

    .ant-input::placeholder {
      color: #d0d5dd;
    }
  }

  .ant-input-suffix {
    color: #667085;
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  height: 40px;
  min-height: 48px;
  border: none;
  border-radius: 40px;
  background: #e31837;
  ${applyTypography(typography.title.md.medium)}
  color: white;
  padding: 8px 16px;

  &:hover {
    background: #e31837 !important;
    color: white !important;
    opacity: 0.8;
  }

  &:focus {
    background: rgba(227, 24, 55, 0.12) !important;
    color: #e31837 !important;
    border: 1px solid #e31837 !important;
  }

  &:disabled {
    background: #f2f4f7 !important;
    color: #d0d5dd !important;
    cursor: not-allowed;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    height: 48px;
    padding: 12px 16px;
  }
`;

export const OrDivider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-top: 1px solid #eaecf0;
  }
`;

export const OrText = styled.span`
  padding: 0 16px;
  ${applyTypography(typography.body.md.regular)}
  text-transform: uppercase;
  color: #667085;
`;

export const EmailButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 40px;
  min-height: 48px;
  border: 1px solid #d0d5dd;
  border-radius: 40px;
  background: #f9fafb;
  ${applyTypography(typography.title.md.medium)}
  color: #667085;
  padding: 8px 16px;

  svg {
    fill: currentColor;
  }

  &:hover {
    background: #e31837 !important;
    color: white !important;
    border-color: #667085 !important;
  }

  &:focus {
    background: #f3f4f6 !important;
    color: #667085 !important;
    border-color: #d0d5dd !important;
  }

  &:disabled {
    border: none !important;
    background: #f2f4f7 !important;
    color: #d0d5dd !important;
  }

  @media (min-width: 768px) {
    height: 48px;
    padding: 12px 16px;
  }
`;

export const RegisterBlock = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;

export const RegisterText = styled.span`
  ${applyTypography(typography.body.md.regular)}
  color: #1a1a1a;
`;

export const RegisterLink = styled.a`
  ${applyTypography(typography.title.sm.medium)}
  font-weight: 500 !important;
  color: #1a1a1a;
  text-decoration: underline;
  padding: 8px 12px;
  border-radius: 8px;
  height: 32px;
  display: inline-flex;
  align-items: center;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    color: #1a1a1a;
  }

  &:focus {
    background: rgba(227, 24, 55, 0.08);
    color: #1a1a1a;
  }
`;

export const ErrorMessage = styled.span`
  ${applyTypography(typography.body.md.regular)}
  color: #e31837;
  font-size: 14px;
  margin-top: 4px;
`;
