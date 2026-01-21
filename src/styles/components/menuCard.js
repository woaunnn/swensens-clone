import styled from "styled-components";
import { typography, applyTypography } from "../typography";

export const MenuCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #eaecf0;
  border-radius: 16px;
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
