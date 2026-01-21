import styled from "styled-components";
import { Card, Button } from "antd";
import { typography, applyTypography } from "../typography";

export const HomeContainer = styled.div`
  width: 100%;
`;

// export const ContentWrapper = styled.div`
//   max-width: 1440px;
//   margin: 0 auto;
//   padding: 0 16px;

//   @media (min-width: 768px) {
//     padding: 0 32px;
//   }

//   @media (min-width: 1024px) {
//     padding: 0 64px;
//   }
// `;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #d32f2f 0%, #f44336 100%);
  padding: 80px 20px;
  color: white;
  text-align: center;
`;

export const HomeTitle = styled.h1`
  ${applyTypography(typography.headline.small)}
  margin-bottom: 20px;
  color: #000;
`;

export const HeroSubtitle = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Section = styled.section`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const PromoTitle = styled.h2`
  margin-bottom: 24px;
  margin-top: 16px;
  text-align: left;
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;

  @media (min-width: 640px) {
    font-size: 24px;
    font-weight: 500;
  }

  @media (min-width: 1536px) {
    font-size: 32px;
    font-weight: 400;
  }
`;

export const StyledCard = styled(Card)`
  height: 100%;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  .ant-card-cover img {
    height: 200px;
    object-fit: cover;
  }
`;

export const ProductTitle = styled.h3`
  ${applyTypography(typography.body.sm.regular)}
  margin-bottom: 10px;
  color: #333;
`;

export const ProductPrice = styled.div`
  ${applyTypography(typography.label.small)}
  color: #d32f2f;
  margin-bottom: 15px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  background: #d32f2f;
  border-color: #d32f2f;
  color: white;

  &:hover {
    background: #b71c1c !important;
    border-color: #b71c1c !important;
    color: white !important;
  }
`;

export const PromoCard = styled(Card)`
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
  color: white;
  border: none;
  height: 100%;

  .ant-card-head-title {
    color: white;
  }

  .ant-card-body {
    color: white;
  }
`;

export const CartDrawerTrigger = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  z-index: 20;
  transform: translateY(-50%);
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const CartDrawerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 110px;
  width: 88px;
  gap: 4px;
  border-radius: 16px 0 0 16px;
  padding: 16px 8px;
  background: #e31837;
  box-shadow: 0px 8px 16px -4px rgba(3, 6, 15, 0.32);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    width: 100px;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }
`;

export const CartText = styled.div`
  text-align: center;
  ${applyTypography(typography.title.sm.bold)}
  color: white;
`;
