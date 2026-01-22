import styled from "styled-components";
import { Button } from "antd";
import { typography, applyTypography } from "../typography";

export const OtpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const OtpHeading = styled.div`
  ${applyTypography(typography.headline.medium)}
  color: #1a1a1a;
`;

export const OtpDescription = styled.div`
  ${applyTypography(typography.body.md.regular)}
  color: #1a1a1a;
`;

export const OtpSubmitButton = styled(Button)`
  width: 100%;
  height: 40px;
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

export const ErrorText = styled.div`
  ${applyTypography(typography.body.sm.regular)}
  color: #e31837;
  margin-top: -16px;
`;

export const ReferenceCodeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  ${applyTypography(typography.body.sm.regular)}
`;

export const ReferenceLabel = styled.span`
  color: #667085;
`;

export const ReferenceCode = styled.span`
  color: #e31837;
`;

export const ResendSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ResendText = styled.div`
  ${applyTypography(typography.body.sm.regular)}
  color: #1a1a1a;
`;

export const ResendButton = styled.button`
  ${applyTypography(typography.title.sm.medium)}
  color: #98a2b3;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    color: #d0d5dd;
    cursor: not-allowed;
    text-decoration: none;
  }
`;
