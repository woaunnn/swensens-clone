import { Carousel } from "antd";
import { BannerContainer, BannerImage } from "../styles/components/heroBanner";

const banners = [
  {
    id: 1,
    url: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fswensens-production.appspot.com%2Fo%2Fbanner%252Fsw-banner.jpg%3Falt%3Dmedia&w=1080&q=75",
    alt: "hero-banner-1",
  },
  {
    id: 2,
    url: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fswensens-production.appspot.com%2Fo%2Fbanner%252Fsw-banner.jpg%3Falt%3Dmedia&w=1080&q=75",
    alt: "hero-banner-2",
  },
  {
    id: 3,
    url: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fswensens-production.appspot.com%2Fo%2Fbanner%252Fsw-banner.jpg%3Falt%3Dmedia&w=1080&q=75",
    alt: "hero-banner-3",
  },
  // Add more banners as needed
];

const HeroBanner = () => {
  return (
    <BannerContainer>
      <Carousel
        autoplay
        dotPlacement="bottom"
        dots={{
          className: "custom-dots",
        }}
      >
        {banners.map((banner) => (
          <div key={banner.id}>
            <BannerImage src={banner.url} alt={banner.alt} />
          </div>
        ))}
      </Carousel>
    </BannerContainer>
  );
};

export default HeroBanner;
