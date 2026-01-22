import styled from "styled-components";
import { typography, applyTypography } from "../typography";

export const CartDrawerContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding-bottom: 16px;
  margin: 24px 0;
`;

export const CloseButton = styled.button`
  position: absolute;
  left: -12px;
  top: 0px;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ffffff;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    background: #f5f5f5;
  }
`;

export const CartDrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px;

  @media (min-width: 1024px) {
    padding: 16px 24px 8px;
  }
`;

export const CartDrawerTitle = styled.h3`
  ${applyTypography(typography.title.lg.bold)}
  color: #1a1a1a;
`;

export const CartDrawerTotalPrice = styled.div`
  ${applyTypography(typography.title.lg.bold)}
  color: #1a1a1a;

  &::first-letter {
    margin-right: 4px;
  }
`;

export const BuyMoreSaveMore = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  padding-top: 8px;
  background: #ffffff;
  border-radius: 12px;
`;

export const BuyMoreSaveMoreText = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  ${applyTypography(typography.body.md.regular)}

  svg {
    display: inline-block;
  }
`;

export const BuyMoreSaveMoreBar = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
  background: #e5e7eb;
  border-radius: 8px;
`;

export const BuyMoreSaveMoreProgress = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(to right, #d1001f, #ff788c);
  transition: width 0.5s ease-in-out;
`;

export const BuyMoreSaveMoreIndicator = styled.div`
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translate(-100%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 8px;
  background: linear-gradient(to right, #ff788c, #d1001f);
`;

export const Divider = styled.div`
  height: 1px;
  background: #eaecf0;
  margin: 0 16px;
`;

export const CartItemList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-top: 8px;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 4px;
  }
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 56px auto;
  gap: 12px;
  padding: 8px 16px;
  border-bottom: 1px solid #eaecf0;

  @media (min-width: 1024px) {
    padding: 8px 24px;
  }
`;

export const CartItemImage = styled.div`
  position: relative;
  width: 56px;
  height: 56px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const CartItemInfo = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`;

export const CartItemName = styled.span`
  ${applyTypography(typography.label.medium)}
  color: #1a1a1a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CartItemActions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #d1001f;

  &:hover {
    background: rgba(209, 0, 31, 0.04);
    border-radius: 4px;
  }
`;

export const QuantityInput = styled.input`
  width: 24px;
  height: 24px;
  text-align: center;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  ${applyTypography(typography.body.sm.regular)}
  color: #1a1a1a;
  pointer-events: none;

  /* Hide number input arrows */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const CartItemPrice = styled.div`
  ${applyTypography(typography.title.sm.medium)}
  color: #1a1a1a;
  align-self: flex-start;
  white-space: nowrap;

  &::first-letter {
    margin-right: 2px;
  }
`;

export const UpsellSection = styled.section`
  margin-top: auto;
  padding: 16px 0;

  @media (min-width: 1024px) {
    padding-top: 28px;
    padding-bottom: 0;
  }
`;

export const UpsellHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 16px;

  @media (min-width: 1024px) {
    padding: 0 24px 16px;
  }
`;

export const UpsellTitle = styled.span`
  ${applyTypography(typography.title.sm.bold)}
  color: #1a1a1a;
`;

export const UpsellNavigation = styled.div`
  display: flex;
  gap: 4px;

  button {
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    cursor: pointer;
    color: #d1001f;

    &:disabled {
      color: #d1d5db;
      cursor: not-allowed;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const UpsellList = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 0 16px;

  @media (min-width: 1024px) {
    padding: 0 24px;
  }

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 4px;
  }
`;

export const UpsellItem = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 98px;
  border: 1px solid #eaecf0;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const UpsellItemImage = styled.div`
  width: 96px;
  height: 96px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UpsellItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
`;

export const UpsellItemPrice = styled.span`
  ${applyTypography(typography.body.sm.bold)}
  color: #d1001f;

  &::first-letter {
    margin-right: 2px;
  }
`;

export const UpsellItemName = styled.h3`
  ${applyTypography(typography.title.sm.bold)}
  color: #1a1a1a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const UpsellAddButton = styled.button`
  position: absolute;
  right: 8px;
  top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #d1001f;
  border: none;
  cursor: pointer;
  padding: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #b00019;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const CartFooter = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 12px 16px 0;
  background: #ffffff;
`;

export const CartFooterNote = styled.span`
  ${applyTypography(typography.body.sm.regular)}
  color: #667085;
  text-align: center;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #d1001f;
  color: #ffffff;
  ${applyTypography(typography.title.md.medium)}
  cursor: pointer;
  transition: background 0.2s ease;

  @media (min-width: 768px) {
    min-height: 48px;
    padding: 12px 16px;
  }

  &:hover {
    background: #b00019;
  }

  &:active {
    background: #9a0015;
  }
`;
