import styled from "styled-components";
import { Card, Button } from "antd";
import { typography, applyTypography } from "../typography";

export const HomeContainer = styled.div`
  width: 100%;
`;

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

export const DeliveryAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  margin-bottom: 24px;
  height: fit-content;
  scroll-margin-top: 120px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 24px;
    height: 56px;
  }
`;

export const DeliveryAddressLabel = styled.div`
  display: flex;
  white-space: nowrap;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const DeliveryAddressSelector = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid #d0d5dd;
  padding: 12px;
  background-color: #f9fafb;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
    border-color: #98a2b3;
  }
`;

export const DeliveryAddressContent = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
`;

export const LocationIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const DeliveryAddressText = styled.div`
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
  text-align: left;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #344054;
`;

export const CategoryFilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  overflow-x: auto;
  overflow-y: auto;
  padding-bottom: 16px;
  margin-bottom: 24px;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (min-width: 640px) {
    flex-wrap: wrap;
    padding-bottom: 0;
  }
`;

export const CategoryButton = styled.button`
  position: relative;
  cursor: pointer;
  font-weight: 600;
  min-height: 32px;
  height: 32px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid;
  font-size: 22px;
  line-height: 14px;
  white-space: nowrap;
  transition: all 0.3s;

  ${(props) =>
    props.$active
      ? `
    border-color: #e31837;
    background-color: rgba(227, 24, 55, 0.08);
    color: #e31837;
    
    &:hover {
      background-color: rgba(227, 24, 55, 0.16);
      color: #fff;
    }
  `
      : `
    border-color: #d0d5dd;
    background-color: transparent;
    color: #667085;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
      color: #fff;
    }
  `}

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
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
  position: relative;
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

export const CartDrawerBadge = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-align: center;
  color: #fff;
  left: -8px;
  top: -8px;
  width: 32px;
  height: 32px;
  background-color: #1a1a1a;
  ${applyTypography(typography.title.sm.bold)}

  @media (min-width: 1024px) {
    ${applyTypography(typography.title.md.bold)}
  }
`;

export const CartText = styled.div`
  text-align: center;
  ${applyTypography(typography.title.sm.bold)}
  color: white;
`;
