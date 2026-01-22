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

export const CartBadge = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-align: center;
  color: #fff;
  right: -4px;
  top: -2px;
  width: 24px;
  height: 24px;
  background-color: #e31837;
  ${applyTypography(typography.title.sm.medium)}

  @media (min-width: 1024px) {
    ${applyTypography(typography.title.md.medium)}
  }
`;

export const ProfileButton = styled(Button)`
  border-radius: 24px;
  border: 1px solid #d1001f;
  background: #fff;
  color: #d1001f;
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

export const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    border-radius: 8px;
  }
`;

export const MobileLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobileCartContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const DesktopMenu = styled.div`
  width: 100%;
`;

export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #ffffff;
`;

export const DrawerHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid #eaecf0;
`;

export const DrawerHeaderContent = styled.div`
  flex: 1;
`;

export const DrawerUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DrawerUserName = styled.div`
  ${applyTypography(typography.title.md.bold)}
  color: #1a1a1a;
`;

export const DrawerMemberPoints = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  ${applyTypography(typography.body.md.bold)}

  img {
    width: 24px;
    height: 24px;
  }

  label {
    color: #1a1a1a;
  }
`;

export const DrawerCloseButton = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    background: rgba(227, 24, 55, 0.08);
    border-radius: 8px;
  }
`;

export const DrawerMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  overflow-y: auto;
`;

export const DrawerMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  min-height: 48px;
  ${applyTypography(typography.body.md.regular)}
  color: #1a1a1a;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(227, 24, 55, 0.04);
  }

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  span {
    flex: 1;
  }
`;

export const DrawerNestedMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  padding-left: 56px;
  min-height: 48px;
  ${applyTypography(typography.body.md.regular)}
  color: #1a1a1a;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(227, 24, 55, 0.04);
  }

  &:before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #667085;
    margin-right: 12px;
  }
`;

export const DrawerMenuDivider = styled.div`
  height: 1px;
  background: #eaecf0;
  margin: 8px 0;
`;

export const DrawerLogoutButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  min-height: 48px;
  ${applyTypography(typography.body.md.regular)}
  color: #eb334e;
  cursor: pointer;
  transition: background 0.2s ease;
  border-top: 1px solid #eaecf0;
  margin-top: auto;

  &:hover {
    background: rgba(235, 51, 78, 0.04);
  }

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

export const ProfileDropdownMenu = styled.div`
  min-width: 200px;
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const ProfileDropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 8px;
  min-height: 40px;
  ${applyTypography(typography.label.medium)}
  color: ${(props) => (props.$logout ? "#eb334e" : "#1a1a1a")};
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.$logout ? "rgba(235, 51, 78, 0.04)" : "rgba(0, 0, 0, 0.04)"};
  }

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  span {
    flex: 1;
  }
`;

export const ProfileDropdownDivider = styled.div`
  height: 1px;
  background: #eaecf0;
  margin: 4px -8px;
`;
