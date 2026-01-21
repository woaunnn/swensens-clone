import { Row, Col, Dropdown } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import {
  StyledHeader,
  Logo,
  MemberPoints,
  CartButton,
  ProfileButton,
  LanguageSwitcher,
} from "../styles/layout/header";

const Header = () => {
  const isLoggedIn = false; // TODO: Replace with actual auth state

  const profileMenuItems = [
    {
      key: "profile",
      label: "โปรไฟล์",
    },
    {
      key: "orders",
      label: "ประวัติการสั่งซื้อ",
    },
    {
      key: "logout",
      label: "ออกจากระบบ",
    },
  ];

  const languageMenuItems = [
    {
      key: "th",
      label: "ไทย (TH)",
    },
    {
      key: "en",
      label: "English (EN)",
    },
  ];

  return (
    <StyledHeader id="header">
      <Row
        align="middle"
        justify="space-between"
        style={{
          height: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 12px",
        }}
      >
        <Col xs={8} md={4} lg={3}>
          <Link to="/">
            <Logo
              alt="swensens-logo"
              src="https://www.swensens1112.com/images/desktop-header-logo.svg"
            />
          </Link>
        </Col>

        <Col xs={16} md={20} lg={21}>
          <Row align="middle" justify="end" gutter={16}>
            {isLoggedIn && (
              <Col>
                <MemberPoints>
                  <img
                    alt="member-points-icons"
                    src="https://www.swensens1112.com/icons/member-point.svg"
                  />
                  <label>0 แต้ม</label>
                </MemberPoints>
              </Col>
            )}

            <Col>
              <CartButton>
                <img
                  alt="cart icon"
                  width="32"
                  height="32"
                  src="https://www.swensens1112.com/images/mobile-cart.svg"
                />
              </CartButton>
            </Col>

            <Col>
              {isLoggedIn ? (
                <Dropdown
                  menu={{ items: profileMenuItems }}
                  placement="bottomRight"
                >
                  <ProfileButton>
                    <span>สวัสดี Tanakorn</span>
                  </ProfileButton>
                </Dropdown>
              ) : (
                <Link to="/login">
                  <ProfileButton>เข้าสู่ระบบ / ลงทะเบียน</ProfileButton>
                </Link>
              )}
            </Col>

            <Col>
              <Dropdown
                menu={{ items: languageMenuItems }}
                placement="bottomRight"
              >
                <LanguageSwitcher type="button">
                  <img
                    alt="location icon"
                    src="https://www.swensens1112.com/images/change-language.svg"
                  />
                  <span>th</span>
                </LanguageSwitcher>
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default Header;
