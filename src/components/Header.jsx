import { useState } from "react";
import { Row, Col, Dropdown, Drawer } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";
import {
  StyledHeader,
  Logo,
  MemberPoints,
  CartButton,
  CartBadge,
  ProfileButton,
  LanguageSwitcher,
  HamburgerButton,
  MobileLogoContainer,
  DesktopMenu,
  MobileCartContainer,
  DrawerContent,
  DrawerHeader,
  DrawerHeaderContent,
  DrawerUserInfo,
  DrawerUserName,
  DrawerMemberPoints,
  DrawerCloseButton,
  DrawerMenu,
  DrawerMenuItem,
  DrawerNestedMenuItem,
  DrawerMenuDivider,
  DrawerLogoutButton,
  ProfileDropdownMenu,
  ProfileDropdownItem,
  ProfileDropdownDivider,
} from "../styles/layout/header";

const Header = () => {
  const { user, logout } = useUser();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const isLoggedIn = !!user;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

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

  const profileDropdownContent = (
    <ProfileDropdownMenu>
      <ProfileDropdownItem onClick={() => navigate("/orders")}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
            fill="currentColor"
          />
          <path
            d="M7 12H9V17H7V12ZM11 7H13V17H11V7ZM15 14H17V17H15V14Z"
            fill="currentColor"
          />
        </svg>
        <span>คำสั่งซื้อและสั่งอีกครั้ง</span>
      </ProfileDropdownItem>

      <ProfileDropdownItem onClick={() => navigate("/profile")}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
            fill="currentColor"
          />
        </svg>
        <span>โปรไฟล์</span>
      </ProfileDropdownItem>

      {user?.role === "admin" && (
        <ProfileDropdownItem onClick={() => navigate("/admin/products")}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.51 2.42L9.13 5.07C8.52 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.72 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11.02C4.53 11.34 4.5 11.67 4.5 12C4.5 12.33 4.53 12.66 4.57 12.98L2.46 14.63C2.27 14.78 2.22 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.95C7.96 18.35 8.52 18.68 9.13 18.93L9.51 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
              fill="currentColor"
            />
          </svg>
          <span>จัดการสินค้า</span>
        </ProfileDropdownItem>
      )}

      <ProfileDropdownDivider />

      <ProfileDropdownItem
        onClick={() => {
          logout();
          navigate("/");
        }}
        $logout
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M4.75358 4.16667H9.75358C10.2119 4.16667 10.5869 3.79167 10.5869 3.33333C10.5869 2.875 10.2119 2.5 9.75358 2.5H4.75358C3.83691 2.5 3.08691 3.25 3.08691 4.16667V15.8333C3.08691 16.75 3.83691 17.5 4.75358 17.5H9.75358C10.2119 17.5 10.5869 17.125 10.5869 16.6667C10.5869 16.2083 10.2119 15.8333 9.75358 15.8333H4.75358V4.16667Z"
            fill="#EB334E"
          />
          <path
            d="M17.7952 9.70833L15.4702 7.38333C15.2036 7.11667 14.7536 7.3 14.7536 7.675V9.16667H8.92025C8.46191 9.16667 8.08691 9.54167 8.08691 10C8.08691 10.4583 8.46191 10.8333 8.92025 10.8333H14.7536V12.325C14.7536 12.7 15.2036 12.8833 15.4619 12.6167L17.7869 10.2917C17.9536 10.1333 17.9536 9.86667 17.7952 9.70833Z"
            fill="#EB334E"
          />
        </svg>
        <span>ออกจากระบบ</span>
      </ProfileDropdownItem>
    </ProfileDropdownMenu>
  );

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
        {/* Mobile Layout */}
        <Col xs={4} md={0}>
          <HamburgerButton onClick={() => setDrawerOpen(true)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                fill="#1a1a1a"
              />
            </svg>
          </HamburgerButton>
        </Col>

        <Col xs={0} md={4} lg={3}>
          <Link to="/">
            <Logo
              alt="swensens-logo"
              src="https://www.swensens1112.com/images/desktop-header-logo.svg"
            />
          </Link>
        </Col>

        {/* Mobile Logo Center */}
        <Col xs={16} md={0}>
          <MobileLogoContainer>
            <Link to="/">
              <Logo
                alt="swensens-logo"
                src="https://www.swensens1112.com/images/desktop-header-logo.svg"
              />
            </Link>
          </MobileLogoContainer>
        </Col>

        {/* Mobile Cart */}
        <Col xs={4} md={0}>
          <MobileCartContainer>
            <CartButton onClick={() => setCartDrawerOpen(true)}>
              <img
                alt="cart icon"
                width="32"
                height="32"
                src="https://www.swensens1112.com/images/mobile-cart.svg"
              />
              {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
            </CartButton>
          </MobileCartContainer>
        </Col>

        {/* Desktop Menu */}
        <Col xs={0} md={20} lg={21}>
          <DesktopMenu>
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
                <CartButton onClick={() => setCartDrawerOpen(true)}>
                  <img
                    alt="cart icon"
                    width="32"
                    height="32"
                    src="https://www.swensens1112.com/images/mobile-cart.svg"
                  />
                  {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
                </CartButton>
              </Col>

              <Col>
                {isLoggedIn ? (
                  <Dropdown
                    dropdownRender={() => profileDropdownContent}
                    placement="bottomRight"
                    trigger={["click"]}
                  >
                    <ProfileButton>
                      <span>สวัสดี {user?.firstName}</span>
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
          </DesktopMenu>
        </Col>
      </Row>

      {/* Mobile Drawer Menu */}
      <Drawer
        title={null}
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width="80%"
        styles={{
          body: { padding: "64px 24px 16px" },
        }}
        closeIcon={null}
      >
        <DrawerContent>
          {/* Drawer Header */}
          <DrawerHeader>
            <DrawerHeaderContent>
              {isLoggedIn ? (
                <DrawerUserInfo>
                  <DrawerUserName>สวัสดี, {user?.firstName} 🍦</DrawerUserName>
                  <DrawerMemberPoints>
                    <img
                      alt="member-points-icons"
                      src="https://www.swensens1112.com/icons/member-point.svg"
                      width="24"
                      height="24"
                    />
                    <label>0 แต้ม</label>
                  </DrawerMemberPoints>
                </DrawerUserInfo>
              ) : (
                <DrawerUserInfo>
                  <DrawerUserName>สวัสดี 🍦</DrawerUserName>
                </DrawerUserInfo>
              )}
            </DrawerHeaderContent>
            <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 6.91L17.59 5.5L12 11.09L6.41 5.5L5 6.91L10.59 12.5L5 18.09L6.41 19.5L12 13.91L17.59 19.5L19 18.09L13.41 12.5L19 6.91Z"
                  fill="#E31837"
                />
              </svg>
            </DrawerCloseButton>
          </DrawerHeader>

          {/* Menu Items */}
          <DrawerMenu>
            {isLoggedIn && (
              <>
                <DrawerMenuItem
                  onClick={() => {
                    setDrawerOpen(false);
                    navigate("/orders");
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7 12H9V17H7V12ZM11 7H13V17H11V7ZM15 14H17V17H15V14Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>คำสั่งซื้อและสั่งอีกครั้ง</span>
                </DrawerMenuItem>

                <DrawerMenuItem
                  onClick={() => {
                    setDrawerOpen(false);
                    navigate("/profile");
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>โปรไฟล์</span>
                </DrawerMenuItem>

                {/* Nested Profile Menu Items */}
                <DrawerMenuItem
                  onClick={() => {
                    setDrawerOpen(false);
                    navigate("/account/pin");
                  }}
                >
                  <span>เปลี่ยน PIN</span>
                </DrawerMenuItem>

                <DrawerMenuItem
                  onClick={() => {
                    setDrawerOpen(false);
                    navigate("/account/credit-cards");
                  }}
                >
                  <span>บัตรเครดิตของฉัน</span>
                </DrawerMenuItem>

                <DrawerMenuItem
                  onClick={() => {
                    setDrawerOpen(false);
                    navigate("/account/addresses");
                  }}
                >
                  <span>สมุดที่อยู่</span>
                </DrawerMenuItem>

                {user?.role === "admin" && (
                  <DrawerMenuItem
                    onClick={() => {
                      setDrawerOpen(false);
                      navigate("/admin/products");
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.51 2.42L9.13 5.07C8.52 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.72 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11.02C4.53 11.34 4.5 11.67 4.5 12C4.5 12.33 4.53 12.66 4.57 12.98L2.46 14.63C2.27 14.78 2.22 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.95C7.96 18.35 8.52 18.68 9.13 18.93L9.51 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>จัดการสินค้า</span>
                  </DrawerMenuItem>
                )}
              </>
            )}

            {!isLoggedIn && (
              <DrawerMenuItem
                onClick={() => {
                  setDrawerOpen(false);
                  navigate("/login");
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                    fill="currentColor"
                  />
                </svg>
                <span>เข้าสู่ระบบ / ลงทะเบียน</span>
              </DrawerMenuItem>
            )}

            {/* Language Switcher */}
            <DrawerMenuItem>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div style={{ display: "flex", gap: "4px" }}>
                  <span>ภาษา</span>
                  <span>-</span>
                  <span style={{ fontWeight: 700, textTransform: "uppercase" }}>
                    TH
                  </span>
                </div>
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
              </div>
            </DrawerMenuItem>

            {/* Logout */}
            {isLoggedIn && (
              <>
                {/* <DrawerMenuDivider /> */}
                <DrawerLogoutButton
                  onClick={() => {
                    setDrawerOpen(false);
                    logout();
                    navigate("/");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M4.75358 4.16667H9.75358C10.2119 4.16667 10.5869 3.79167 10.5869 3.33333C10.5869 2.875 10.2119 2.5 9.75358 2.5H4.75358C3.83691 2.5 3.08691 3.25 3.08691 4.16667V15.8333C3.08691 16.75 3.83691 17.5 4.75358 17.5H9.75358C10.2119 17.5 10.5869 17.125 10.5869 16.6667C10.5869 16.2083 10.2119 15.8333 9.75358 15.8333H4.75358V4.16667Z"
                      fill="#EB334E"
                    />
                    <path
                      d="M17.7952 9.70833L15.4702 7.38333C15.2036 7.11667 14.7536 7.3 14.7536 7.675V9.16667H8.92025C8.46191 9.16667 8.08691 9.54167 8.08691 10C8.08691 10.4583 8.46191 10.8333 8.92025 10.8333H14.7536V12.325C14.7536 12.7 15.2036 12.8833 15.4619 12.6167L17.7869 10.2917C17.9536 10.1333 17.9536 9.86667 17.7952 9.70833Z"
                      fill="#EB334E"
                    />
                  </svg>
                  <span>ออกจากระบบ</span>
                </DrawerLogoutButton>
              </>
            )}
          </DrawerMenu>
        </DrawerContent>
      </Drawer>

      {/* Cart Drawer */}
      <CartDrawer
        open={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
      />
    </StyledHeader>
  );
};

export default Header;
