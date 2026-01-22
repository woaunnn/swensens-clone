import styled from "styled-components";
import { Button, Col, Input, Row, Checkbox, Radio, DatePicker } from "antd";
import { typography, applyTypography } from "../typography";
import { theme } from "../theme";

export const RegisterPage = styled(Row)`
  position: relative;
  width: 100%;
  background: #f5f5f5;
`;

export const RegisterContainer = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  padding: 24px;
`;

export const BannerImage = styled(Col)`
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

export const RegisterBox = styled(Col)`
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

export const RegisterContent = styled.div`
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
  border-radius: 2px;
  background: transparent;
  ${applyTypography(typography.title.sm.medium)}
  color: #1a1a1a;

  &:hover {
    border: none !important;
    background: rgba(0, 0, 0, 0.04) !important;
    color: #1a1a1a !important;
  }
  /* 
  &:focus {
    border: none !important;
    background: rgba(227, 24, 55, 0.08) !important;
    color: #1a1a1a !important;
  } */

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

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media (min-width: 1024px) {
    ${(props) => props.$half && "max-width: 50%;"}
  }
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
  padding: 8px 16px;
  ${applyTypography(typography.body.md.regular)}

  &::placeholder {
    color: #667085;
  }

  &:hover:not(:focus):not(.ant-input-focused) {
    border-color: #d0d5dd !important;
  }

  &:focus {
    border: 1px solid #d0d5dd;
  }

  &:disabled {
    cursor: not-allowed;
    border-color: #eaecf0;

    &::placeholder {
      color: #d0d5dd;
    }
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  height: 42px;
  width: 100%;
  border-radius: 2px;
  border: 1px solid #d0d5dd;
  background: #f9fafb;
  padding: 8px 16px;

  .ant-picker-input > input {
    ${applyTypography(typography.body.md.regular)}
    
    &::placeholder {
      color: #667085;
    }
  }

  &:hover {
    background: #f3f4f6;
    border: 1px solid #d0d5dd;
  }

  &.ant-picker-focused {
    /* outline: 1px solid #e31837; */
    border: 1px solid #d0d5dd;
    box-shadow: none;
  }
`;

export const GenderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const GenderLabel = styled.div`
  ${applyTypography(typography.label.medium)}
  font-weight: 500;
  color: rgb(${theme.colors.gray[700]});
  display: flex;
  gap: 8px;
`;

export const RadioGroup = styled(Radio.Group)`
  display: flex;
  flex-wrap: wrap;

  .ant-radio-wrapper {
    ${applyTypography(typography.label.medium)}
    font-weight: 500;
    color: #1a1a1a;

    .ant-radio {
      .ant-radio-inner {
        border-color: #98a2b3;

        &:hover {
          border-color: #e31837;
        }
      }

      &.ant-radio-checked {
        .ant-radio-inner {
          border-color: #e31837;
          background-color: #e31837;

          &:after {
            background-color: white;
          }
        }
      }
    }
  }
`;

export const AcceptanceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding-top: 16px;
  border-top: 1px solid #98a2b3;
  ${applyTypography(typography.body.md.regular)}
`;

export const StyledCheckbox = styled(Checkbox)`
  &.ant-checkbox-wrapper {
    display: flex;
    align-items: flex-start !important;
  }

  .ant-checkbox {
    margin-top: 3px;
    flex-shrink: 0;
    align-self: flex-start;

    .ant-checkbox-inner {
      width: 16px;
      height: 16px;
      border-radius: 2px;
      border-color: #98a2b3;

      &:hover {
        border-color: #e31837;
      }
    }

    &.ant-checkbox-checked {
      .ant-checkbox-inner {
        background-color: #e31837;
        border-color: #e31837;
      }

      &:after {
        border-color: #e31837;
      }
    }
  }

  .ant-checkbox + span {
    ${applyTypography(typography.body.md.regular)}
    color: #1a1a1a;
    padding-left: 8px;
    padding-top: 0;
    line-height: 1.4;
  }
`;

export const LinkButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: #e31837;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
  ${applyTypography(typography.body.md.regular)}

  &:hover {
    opacity: 0.8;
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 40px;
  background: #e31837;
  ${applyTypography(typography.title.md.medium)}
  color: white;
  padding: 12px 16px;

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

  @media (min-width: 1024px) {
    height: 64px;
    padding: 20px 24px;
    ${applyTypography(typography.title.lg.medium)}
  }
`;

export const LoginBlock = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 100%;
`;

export const LoginText = styled.span`
  ${applyTypography(typography.body.md.regular)}
  color: #1a1a1a;
`;

export const LoginLink = styled.a`
  ${applyTypography(typography.title.sm.medium)}
  font-weight: 500 !important;
  color: #1a1a1a;
  text-decoration: underline;
  padding: 8px 12px;
  border-radius: 2px;
  height: 32px;
  display: inline-flex;
  align-items: center;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    color: #1a1a1a;
  }

  /* &:focus {
    background: rgba(227, 24, 55, 0.08);
    color: #1a1a1a;
  } */
`;
