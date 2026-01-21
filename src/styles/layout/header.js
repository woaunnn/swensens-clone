import styled from "styled-components";
import { Button } from "antd";
import { typography, applyTypography } from "../typography";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  height: 80px;
  width: 100%;
  background: #ffffff;
  padding: 0 16px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);

  /* @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1024px) {
    padding: 0 64px;
  } */
`;

export const Logo = styled.img`
  width: 120px;
  height: auto;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 152px;
  }
`;

export const MemberPoints = styled.div`
  display: flex;
  align-items: center;
  font-size: 29px;
  font-weight: 600;
  line-height: 1;
  gap: 12px;

  img {
    width: 24px;
    height: 24px;
  }

  label {
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CartButton = styled(Button)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.04) !important;
  }

  img {
    width: 32px;
    height: 32px;

    &:hover {
      filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.3));
    }
  }
`;

export const ProfileButton = styled(Button)`
  border-radius: 24px;
  border: 1px solid #d1001f;
  background: #d1001f;
  color: #fff;
  height: 48px;
  padding: 12px 16px;
  ${applyTypography(typography.title.md.medium)}
  opacity: 1;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    background: rgba(227, 24, 55, 0.12);
    color: #d1001f;
    border-color: #d1001f;
    opacity: 1;
  }
`;

export const LanguageSwitcher = styled.button`
  display: flex;
  height: 48px;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus-visible {
    outline: none;
  }

  img {
    width: 16px;
    height: 16px;
  }

  span {
    ${applyTypography(typography.title.md.medium)}
    color: #1a1a1a;
  }
`;
