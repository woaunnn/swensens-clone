import styled from "styled-components";
import { Space } from "antd";
import { typography, applyTypography } from "../typography";

export const StyledFooter = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 24px 50px;

  /* @media (min-width: 768px) {
    padding: 60px 32px 30px;
  } */
`;

export const FooterContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 144px;
  height: auto;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const LinksLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 48px;

  @media (min-width: 640px) {
    justify-content: center;
  }

  @media (min-width: 1280px) {
    flex-grow: 1;
    justify-content: space-evenly;
    gap: 0;
  }
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  ${applyTypography(typography.title.sm.medium)}
  padding: 0px 4px;
  display: inline-block;
  transition: opacity 0.3s;

  @media (min-width: 640px) {
    padding-top: 0;
    padding-bottom: 0;
  }

  &:hover {
    opacity: 0.7;
    color: white;
  }
`;

export const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 32px;
    height: 32px;
  }
`;

export const AppStoreButton = styled.a`
  display: inline-block;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 108px;
    height: 32px;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  color: white;
  ${applyTypography(typography.body.sm.regular)}

  /* @media (min-width: 768px) {
    margin-top: 40px;
  } */
`;
