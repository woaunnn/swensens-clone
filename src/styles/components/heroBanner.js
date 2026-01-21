import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;

  @media (min-width: 1536px) {
    border-radius: 16px;
  }

  .slick-slider {
    border-radius: 8px;
    overflow: hidden;

    @media (min-width: 1536px) {
      border-radius: 16px;
    }
  }

  .slick-dots {
    position: relative;
    bottom: auto;
    margin-top: 20px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 16px;

    li {
      width: 8px;
      height: 8px;
      margin: 0 4px;

      @media (min-width: 768px) {
        width: 12px;
        height: 12px;
      }

      button {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #e31837;
        border: 1px solid #e31837;
        padding: 0;
        transition: all 0.2s;
        opacity: 1;
        cursor: pointer;

        &:hover {
          opacity: 0.75;
        }

        &::before {
          display: none;
        }
      }

      &.slick-active button {
        background: #e31837;
        border-color: #e31837;
      }
    }
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 3 / 1;
  border-radius: 8px;

  @media (min-width: 640px) {
    aspect-ratio: 4 / 1;
  }

  @media (min-width: 1440px) {
    border-radius: 32px;
  }
`;
