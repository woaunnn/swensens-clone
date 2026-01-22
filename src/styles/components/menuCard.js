import styled from "styled-components";
import { typography, applyTypography } from "../typography";
import { Select } from "antd";

export const MenuCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #eaecf0;
  border-radius: 16px;
  transition: box-shadow 0.3s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
`;

export const CardContent = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
`;

export const PriceContainer = styled.span`
  display: flex;
  width: 100%;
  ${applyTypography(typography.body.md.bold)}
  color: #e31837;

  @media (min-width: 1024px) {
    ${applyTypography(typography.label.large)}
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Price = styled.span`
  font-size: 26px;
  display: inline-block;
  flex-shrink: 0;
  white-space: nowrap;

  &::first-letter {
    margin-right: 4px;
  }
`;

export const ProductTitle = styled.h3`
  width: 100%;
  text-align: start;
  ${applyTypography(typography.title.md.bold)}
  color: #1a1a1a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 1024px) {
    ${applyTypography(typography.title.md.bold)}
  }
`;

export const HoverOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 16px;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 100%
  );
  opacity: 0;
  transform: translateY(100%);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  pointer-events: none;
  border-radius: 16px;

  ${MenuCardContainer}:hover & {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
`;

export const SizeDropdown = styled(Select)`
  width: 50px !important;
  height: 100%;
  border-radius: 32px 0px 0px 32px !important;
  border: 1px solid #df001f !important;
  color: #df001f;
  ${applyTypography(typography.body.md.bold)}

  &:focus,
  &:focus-within {
    pointer-events: auto;
  }

  /* .ant-select-selector {
    height: 40px !important;
    border-radius: 8px 0px 0px 8px !important;
    border-right: none !important;
    display: flex;
    align-items: center;
  }

  .ant-select-selection-item {
    display: flex;
    align-items: center;
  } */
`;

export const AddToCartButton = styled.button`
  flex: 1;
  height: 100%;
  padding: 0 16px;
  border: none;
  border-radius: 0px 32px 32px 0px;
  background-color: #e31837;
  color: #fff;
  ${applyTypography(typography.body.md.bold)}
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #c91530;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ViewDetailsButton = styled.button`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border: none;
  border-radius: 8px;
  background-color: #e31837;
  color: #fff;
  ${applyTypography(typography.body.md.bold)}
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #c91530;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
