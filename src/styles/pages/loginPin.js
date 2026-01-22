import styled from "styled-components";
import { Button } from "antd";
import { typography, applyTypography } from "../typography";

export const LoginPinContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const LockIconContainer = styled.div`
  margin: 0 auto;
`;

export const LockIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #eaecf0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 27px;
    height: 27px;
    fill: #667085;
  }
`;

export const PinHeading = styled.div`
  ${applyTypography(typography.headline.medium)}
  color: #1a1a1a;
  text-align: center;
  margin: 0 auto;
`;

export const PinInputWrapper = styled.div`
  padding: 48px 0;
  text-align: center;
`;

export const PinSubmitButton = styled(Button)`
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

export const ForgotPinLink = styled.button`
  ${applyTypography(typography.title.sm.medium)}
  color: #1a1a1a;
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  margin: 0 auto;
  padding: 8px 12px;
  
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;
