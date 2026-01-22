import styled from "styled-components";
import { Button } from "antd";
import { typography, applyTypography } from "../typography";

export const CreatePinContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PinHeading = styled.div`
  ${applyTypography(typography.headline.medium)}
  color: #1a1a1a;
`;

export const PinDescription = styled.div`
  ${applyTypography(typography.body.md.regular)}
  color: #1a1a1a;
`;

export const TogglePinButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  height: 32px;
  margin: 0 auto;
  padding: 8px 16px;
  border: none;
  border-radius: 2px;
  background: transparent;
  ${applyTypography(typography.title.sm.medium)}
  color: #1a1a1a;

  &:hover {
    background: rgba(0, 0, 0, 0.04) !important;
    color: #1a1a1a !important;
  }

  &:focus {
    background: rgba(227, 24, 55, 0.08) !important;
    color: #1a1a1a !important;
  }

  svg {
    width: 16px;
    height: 16px;
  }
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
