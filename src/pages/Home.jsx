import { Row, Col, Button, Skeleton } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import HeroBanner from "../components/HeroBanner";
import CartDrawer from "../components/CartDrawer";
import {
  HomeContainer,
  HomeTitle,
  CartDrawerButton,
  CartDrawerTrigger,
  CartDrawerBadge,
  CartText,
  CategoryFilterContainer,
  CategoryButton,
  DeliveryAddressContainer,
  DeliveryAddressLabel,
  DeliveryAddressSelector,
  DeliveryAddressContent,
  DeliveryAddressText,
} from "../styles/pages/home";
import MenuCard from "../components/MenuCard";
import { useUser } from "../context/UserContext";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { user } = useUser();
  const { totalItems } = useCart();
  const [activeCategory, setActiveCategory] = useState("");
  const [promotionProducts, setPromotionProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPromotions, setLoadingPromotions] = useState(true);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const categories = [
    "ไอศกรีมเค้ก",
    "ไอศกรีมควอท (450g)",
    "ไอศกรีมมินิ ควอท (250g)",
    "ซันเด เซต",
    "ไอศกรีมสกู๊ป",
    "ท็อปปิ้ง",
  ];

  const availableCategories = categories.filter((cat) =>
    allProducts.some((product) => product.category === cat),
  );

  useEffect(() => {
    const fetchPromotions = async () => {
      setLoadingPromotions(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/products/promotions`,
        );
        setPromotionProducts(response.data.products);
      } catch (error) {
        console.error("Failed to fetch promotions:", error);
      } finally {
        setLoadingPromotions(false);
      }
    };

    fetchPromotions();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/products`,
        );
        setAllProducts(response.data.products);
        // Get unique categories from products
        const uniqueCategories = [...new Set(response.data.products.map(p => p.category).filter(Boolean))];
        // Filter to only include categories in our predefined list, maintaining order
        const availableCats = categories.filter(cat => uniqueCategories.includes(cat));
        // Set first available category as default
        if (availableCats.length > 0) {
          setActiveCategory(availableCats[0]);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = allProducts.filter(
    (product) => product.category === activeCategory,
  );
  return (
    <HomeContainer>
      <Row justify="center">
        <Col xs={24} lg={16} style={{ padding: "40px 24px" }}>
          {/* <iframe
            src="https://www.google.com/maps?q=Bangkok&z=14&output=embed"
            width="100%"
            height="300"
          /> */}
          {user && <HomeTitle>สวัสดี {user?.firstName}</HomeTitle>}

          <DeliveryAddressContainer>
            <DeliveryAddressLabel>ไปส่งที่:</DeliveryAddressLabel>
            <DeliveryAddressSelector>
              <DeliveryAddressContent>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1.33337C5.42 1.33337 3.33333 3.42004 3.33333 6.00004C3.33333 9.50004 8 14.6667 8 14.6667C8 14.6667 12.6667 9.50004 12.6667 6.00004C12.6667 3.42004 10.58 1.33337 8 1.33337ZM8 7.66671C7.08 7.66671 6.33333 6.92004 6.33333 6.00004C6.33333 5.08004 7.08 4.33337 8 4.33337C8.92 4.33337 9.66667 5.08004 9.66667 6.00004C9.66667 6.92004 8.92 7.66671 8 7.66671Z"
                    fill="#667085"
                  />
                </svg>
                <DeliveryAddressText>
                  เลือกที่อยู่สำหรับจัดส่ง
                </DeliveryAddressText>
              </DeliveryAddressContent>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83398 7.9165L10.0007 12.0832L14.1673 7.9165H5.83398Z"
                  fill="#787878"
                />
              </svg>
            </DeliveryAddressSelector>
          </DeliveryAddressContainer>

          <HeroBanner />
          <HomeTitle>โปรโมชัน</HomeTitle>
          <Row gutter={[16, 16]}>
            {loadingPromotions ? (
              Array.from({ length: 4 }).map((_, index) => (
                <Col key={index} xs={12} md={8} lg={6}>
                  <Skeleton.Image
                    active
                    style={{ width: "100%", height: "240px" }}
                  />
                  <Skeleton active paragraph={{ rows: 2 }} />
                </Col>
              ))
            ) : promotionProducts.length > 0 ? (
              promotionProducts.map((product) => (
                <Col key={product._id} xs={12} md={8} lg={6}>
                  <MenuCard product={product} />
                </Col>
              ))
            ) : (
              <Col span={24}>
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px",
                    color: "#667085",
                  }}
                >
                  ไม่มีโปรโมชันในขณะนี้
                </div>
              </Col>
            )}
          </Row>
          <HomeTitle>เมนูจัดส่ง</HomeTitle>
          <CategoryFilterContainer>
            {availableCategories.map((category) => (
              <CategoryButton
                key={category}
                $active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </CategoryButton>
            ))}
          </CategoryFilterContainer>
          <Row gutter={[16, 16]}>
            {loading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <Col key={index} xs={12} md={8} lg={6}>
                  <Skeleton.Image
                    active
                    style={{ width: "100%", height: "240px" }}
                  />
                  <Skeleton active paragraph={{ rows: 2 }} />
                </Col>
              ))
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Col key={product._id} xs={12} md={8} lg={6}>
                  <MenuCard product={product} />
                </Col>
              ))
            ) : (
              <Col span={24}>
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px",
                    color: "#667085",
                  }}
                >
                  ไม่มีสินค้าในหมวดหมู่นี้
                </div>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
      <CartDrawerTrigger>
        <CartDrawerButton onClick={() => setCartDrawerOpen(true)}>
          {totalItems > 0 && <CartDrawerBadge>{totalItems}</CartDrawerBadge>}
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

      <CartDrawer
        open={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
      />
    </HomeContainer>
  );
};

export default Home;
