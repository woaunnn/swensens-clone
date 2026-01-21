import { Row, Col, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import HeroBanner from "../components/HeroBanner";
import {
  HomeContainer,
  //   ContentWrapper,
  HeroSection,
  //   HeroTitle,
  HeroSubtitle,
  Section,
  SectionTitle,
  StyledCard,
  ProductTitle,
  ProductPrice,
  StyledButton,
  PromoCard,
  HomeTitle,
  CartDrawerButton,
  CartDrawerTrigger,
  CartText,
} from "../styles/pages/home";
import MenuCard from "../components/MenuCard";

const Home = () => {
  // Mock data สำหรับ productsContentWrapper
  const products = [
    {
      id: 1,
      name: "ไอศกรีม 2 ควอท 399 บาท สำหรับลูกค้าทุกท่าน",
      price: 399,
      image: `${import.meta.env.VITE_SWENSENS_URL}/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F460023_8.jpg&w=384&q=75`,
    },
    {
      id: 2,
      name: `ไอศกรีมเค้ก ทริปเปิ้ล ช็อกโก 1.5 ปอนด์ 399 บาท สำหรับลูกค้าทุกท่าน`,
      price: 399,
      image: `${import.meta.env.VITE_SWENSENS_URL}/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F641752_1.jpg&w=384&q=75`,
    },
    {
      id: 3,
      name: `ไอศกรีมเค้ก ชาเขียว มัทฉะ ช็อกโก บราวนีส์ 1.5 ปอนด์ 399 บาท สำหรับลูกค้าทุกท่าน`,
      price: 399,
      image: `${import.meta.env.VITE_SWENSENS_URL}/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F641754.jpg&w=384&q=75`,
    },
    {
      id: 4,
      name: `ไอศกรีมเค้ก โซ สตรอว์เบอร์รี 1.5 ปอนด์ 399 บาท สำหรับลูกค้าทุกท่าน`,
      price: 399,
      image: `${import.meta.env.VITE_SWENSENS_URL}/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F641753.jpg&w=384&q=75`,
    },
    {
      id: 5,
      name: `ไอศกรีมเค้ก ดับเบิ้ล ชาไทย 1.5 ปอนด์ 399 บาท สำหรับลูกค้าทุกท่าน`,
      price: 399,
      image: `${import.meta.env.VITE_SWENSENS_URL}/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F641755.jpg&w=384&q=75`,
    },
    {
      id: 6,
      name: `ไอศกรีม 2 มินิ ควอท 399 บาท`,
      price: 399,
      image: `${import.meta.env.VITE_SWENSENS_URL}/_next/image?url=https%3A%2F%2Fcdn.swensens1112.com%2Fpublic%2Fimages%2Fproducts%2FSW%2F500636094.jpg&w=384&q=75`,
    },
    {
      id: 7,
      name: `ไอศกรีม 3 มินิ ควอท 499 บาท`,
      price: 499,
      image: `${import.meta.env.VITE_SWENSENS_URL}/_next/image?url=https%3A%2F%2Fcdn.swensens1112.com%2Fpublic%2Fimages%2Fproducts%2FSW%2F500636116_1.jpg&w=384&q=75`,
    },
  ];

  //   const promotions = [
  //     {
  //       id: 1,
  //       title: "Special Offer",
  //       description: "Buy 1 Get 1 Free on all sundaes!",
  //     },
  //     {
  //       id: 2,
  //       title: "Happy Hour",
  //       description: "20% off from 2-5 PM",
  //     },
  //     {
  //       id: 3,
  //       title: "Weekend Deal",
  //       description: "Family pack starting at ฿299",
  //     },
  //   ];

  return (
    <HomeContainer>
      <Row justify="center">
        <Col xs={24} lg={16} style={{ padding: "40px 24px" }}>
          <HeroBanner />
          <HomeTitle>โปรโมชัน</HomeTitle>
          <Row gutter={[16, 16]}>
            {products.length > 0 &&
              products.map((product) => (
                <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                  <MenuCard key={product.id} product={product} />
                </Col>
              ))}
          </Row>
          <HomeTitle>เมนูจัดส่ง</HomeTitle>
        </Col>
      </Row>
      <CartDrawerTrigger>
        <CartDrawerButton>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[14px]"
            data-sentry-element="svg"
            data-sentry-component="Cart"
            data-sentry-source-file="Cart.tsx"
          >
            <path
              d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM10 10C10 10.55 9.55 11 9 11C8.45 11 8 10.55 8 10V8H10V10ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM16 10C16 10.55 15.55 11 15 11C14.45 11 14 10.55 14 10V8H16V10Z"
              fill="white"
              data-sentry-element="path"
              data-sentry-source-file="Cart.tsx"
            ></path>
          </svg>
          <CartText>ตะกร้า</CartText>
        </CartDrawerButton>
      </CartDrawerTrigger>
      {/* Hero Banner */}
      {/* <ContentWrapper style={{ paddingTop: "24px" }}> */}
      {/* <HeroBanner /> */}
      {/* </ContentWrapper> */}

      {/* Hero Section */}
      {/* <HeroSection>
        <HeroTitle>Welcome to Swensen's</HeroTitle>
        <HeroSubtitle>
          Enjoy the finest ice cream and desserts in Thailand
        </HeroSubtitle>
        <Button size="large" type="primary" danger>
          Order Now
        </Button>
      </HeroSection> */}

      {/* <Section>
        <SectionTitle>Featured Products</SectionTitle>
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={6}>
              <StyledCard
                cover={<img alt={product.name} src={product.image} />}
              >
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice>฿{product.price}</ProductPrice>
                <StyledButton icon={<ShoppingCartOutlined />}>
                  Add to Cart
                </StyledButton>
              </StyledCard>
            </Col>
          ))}
        </Row>
      </Section>

      <Section style={{ background: "#f5f5f5" }}>
        <SectionTitle>Current Promotions</SectionTitle>
        <Row gutter={[16, 16]}>
          {promotions.map((promo) => (
            <Col key={promo.id} xs={24} sm={12} md={8}>
              <PromoCard title={promo.title}>
                <p style={{ fontSize: "16px" }}>{promo.description}</p>
                <Button type="default" style={{ marginTop: "10px" }}>
                  Learn More
                </Button>
              </PromoCard>
            </Col>
          ))}
        </Row>
      </Section>

      <Section>
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <img
              src="https://via.placeholder.com/600x400/d32f2f/ffffff?text=Swensen's+Ice+Cream"
              alt="About Swensen's"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Col>
          <Col xs={24} md={12}>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
              About Swensen's
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#666" }}>
              Since 1972, Swensen's has been serving premium ice cream and
              delicious desserts to families across Thailand. Our commitment to
              quality ingredients and exceptional taste has made us a beloved
              destination for ice cream lovers of all ages.
            </p>
            <Button
              type="primary"
              danger
              size="large"
              style={{ marginTop: "20px" }}
            >
              Learn More About Us
            </Button>
          </Col>
        </Row>
      </Section> */}
    </HomeContainer>
  );
};

export default Home;
