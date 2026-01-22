import { Drawer } from "antd";
import { useRef } from "react";
import { useCart } from "../context/CartContext";
import {
  CartDrawerContainer,
  CartDrawerHeader,
  CartDrawerTitle,
  CartDrawerTotalPrice,
  BuyMoreSaveMore,
  BuyMoreSaveMoreText,
  BuyMoreSaveMoreBar,
  BuyMoreSaveMoreProgress,
  BuyMoreSaveMoreIndicator,
  CartItemList,
  CartItem,
  CartItemImage,
  CartItemInfo,
  CartItemName,
  CartItemActions,
  QuantityControl,
  QuantityButton,
  QuantityInput,
  CartItemPrice,
  UpsellSection,
  UpsellHeader,
  UpsellTitle,
  UpsellNavigation,
  UpsellList,
  UpsellItem,
  UpsellItemImage,
  UpsellItemContent,
  UpsellItemPrice,
  UpsellItemName,
  UpsellAddButton,
  CartFooter,
  CartFooterNote,
  CheckoutButton,
  CloseButton,
  Divider,
} from "../styles/components/cartDrawer";

const CartDrawer = ({ open, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();
  const upsellListRef = useRef(null);

  const upsellProducts = [
    {
      _id: "1",
      name: "ไอศกรีมควอท",
      price: 369,
      image:
        "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.swensens1112.com%2Fpublic%2Fimages%2Fproducts%2FSW%2F636224_2.jpg&w=96&q=75",
    },
    {
      _id: "2",
      name: "ไอศกรีม มินิ ควอท",
      price: 239,
      image:
        "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.swensens1112.com%2Fpublic%2Fimages%2Fproducts%2FSW%2F636224_1.jpg&w=96&q=75",
    },
    {
      _id: "3",
      name: "ไอศกรีมสกู๊ป",
      price: 69,
      image:
        "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.swensens1112.com%2Fpublic%2Fimages%2Fproducts%2FSW%2F701221_1.jpg&w=96&q=75",
    },
    {
      _id: "4",
      name: "ไอศกรีมสกู๊ป",
      price: 69,
      image:
        "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.swensens1112.com%2Fpublic%2Fimages%2Fproducts%2FSW%2F701221_1.jpg&w=96&q=75",
    },
    {
      _id: "5",
      name: "ไอศกรีมสกู๊ป",
      price: 69,
      image:
        "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.swensens1112.com%2Fpublic%2Fimages%2Fproducts%2FSW%2F701221_1.jpg&w=96&q=75",
    },
  ];

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleScrollUpsell = (direction) => {
    if (upsellListRef.current) {
      const scrollAmount = 110; // 98px width + 12px gap
      const currentScroll = upsellListRef.current.scrollLeft;
      const newScroll =
        direction === "prev"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      upsellListRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <Drawer
      placement="right"
      onClose={onClose}
      open={open}
      width={352}
      closeIcon={null}
      styles={{
        body: { padding: 0, overflow: "visible" },
        wrapper: { overflow: "visible" },
      }}
    >
      <CloseButton onClick={onClose}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
        </svg>
      </CloseButton>
      <CartDrawerContainer>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          {/* Header */}
          <div>
            <CartDrawerHeader>
              <CartDrawerTitle>ออเดอร์</CartDrawerTitle>
              <CartDrawerTotalPrice>฿ {totalPrice}</CartDrawerTotalPrice>
            </CartDrawerHeader>

            {/* Buy More Save More */}
            <BuyMoreSaveMore>
              <BuyMoreSaveMoreText>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#D1001F" />
                  <path
                    d="M12.705 7.79L8.205 3.29C8.025 3.11 7.775 3 7.5 3H4C3.45 3 3 3.45 3 4V7.5C3 7.775 3.11 8.025 3.295 8.21L7.795 12.71C7.975 12.89 8.225 13 8.5 13C8.775 13 9.025 12.89 9.205 12.705L12.705 9.205C12.89 9.025 13 8.775 13 8.5C13 8.225 12.885 7.97 12.705 7.79ZM4.75 5.5C4.335 5.5 4 5.165 4 4.75C4 4.335 4.335 4 4.75 4C5.165 4 5.5 4.335 5.5 4.75C5.5 5.165 5.165 5.5 4.75 5.5Z"
                    fill="#FCFCFD"
                  />
                </svg>{" "}
                <span style={{ color: "#667085" }}>เย้! คุณได้รับ</span>{" "}
                <span style={{ color: "#D1001F", fontWeight: 700 }}>
                  ค่าส่งฟรี
                </span>
              </BuyMoreSaveMoreText>
              <BuyMoreSaveMoreBar>
                <BuyMoreSaveMoreProgress />
                <BuyMoreSaveMoreIndicator>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.31836 2.7713C9.58859 2.59233 9.95254 2.62228 10.1914 2.86115L10.2812 2.97052C10.4347 3.20205 10.4346 3.50262 10.2812 3.73419L10.1914 3.84357L4.8916 9.13947L4.89062 9.13849C4.65172 9.37724 4.28481 9.40735 4.01367 9.22833L3.90332 9.13849L1.80859 7.04376C1.53558 6.77069 1.53561 6.33443 1.80859 6.06134L1.91797 5.9715C2.18822 5.79227 2.55204 5.82242 2.79102 6.06134L4.39941 7.66974L9.20898 2.86115L9.31836 2.7713Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="0.4"
                    />
                  </svg>
                </BuyMoreSaveMoreIndicator>
              </BuyMoreSaveMoreBar>
            </BuyMoreSaveMore>

            <Divider />
          </div>

          {/* Cart Items */}
          <CartItemList>
            {cartItems.map((item) => (
              <CartItem key={item._id}>
                <CartItemImage>
                  <img src={item.image} alt={item.name} />
                </CartItemImage>
                <CartItemInfo>
                  <div>
                    <CartItemName>{item.name}</CartItemName>
                    <CartItemActions>
                      <QuantityControl>
                        <QuantityButton
                          onClick={() =>
                            handleQuantityChange(item._id, item.count - 1)
                          }
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.6668 6V12.6667H5.3335V6H10.6668ZM9.66683 2H6.3335L5.66683 2.66667H3.3335V4H12.6668V2.66667H10.3335L9.66683 2ZM12.0002 4.66667H4.00016V12.6667C4.00016 13.4 4.60016 14 5.3335 14H10.6668C11.4002 14 12.0002 13.4 12.0002 12.6667V4.66667Z"
                              fill="#D1001F"
                            />
                          </svg>
                        </QuantityButton>
                        <QuantityInput
                          type="number"
                          value={item.count}
                          readOnly
                        />
                        <QuantityButton
                          onClick={() =>
                            handleQuantityChange(item._id, item.count + 1)
                          }
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.6654 8.66683H8.66536V12.6668H7.33203V8.66683H3.33203V7.3335H7.33203V3.3335H8.66536V7.3335H12.6654V8.66683Z"
                              fill="currentColor"
                            />
                          </svg>
                        </QuantityButton>
                      </QuantityControl>
                    </CartItemActions>
                  </div>
                  <CartItemPrice>฿ {item.price * item.count}</CartItemPrice>
                </CartItemInfo>
              </CartItem>
            ))}
          </CartItemList>

          {/* Upsell Products */}
          <UpsellSection>
            <UpsellHeader>
              <UpsellTitle>สินค้าที่คุณอาจสนใจ</UpsellTitle>
              <UpsellNavigation>
                <button onClick={() => handleScrollUpsell("prev")}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm35.31 292.69a16 16 0 1 1-22.62 22.62l-96-96a16 16 0 0 1 0-22.62l96-96a16 16 0 0 1 22.62 22.62L206.63 256z" />
                  </svg>
                </button>
                <button onClick={() => handleScrollUpsell("next")}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                      d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z"
                    />
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="m216 352 96-96-96-96"
                    />
                  </svg>
                </button>
              </UpsellNavigation>
            </UpsellHeader>

            <UpsellList ref={upsellListRef}>
              {upsellProducts.map((product) => (
                <UpsellItem key={product._id}>
                  <UpsellItemImage>
                    <img src={product.image} alt={product.name} />
                  </UpsellItemImage>
                  <UpsellItemContent>
                    <UpsellItemPrice>฿ {product.price}</UpsellItemPrice>
                    <UpsellItemName>{product.name}</UpsellItemName>
                  </UpsellItemContent>
                  <UpsellAddButton>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8334 10.8333H10.8334V15.8333H9.16669V10.8333H4.16669V9.16663H9.16669V4.16663H10.8334V9.16663H15.8334V10.8333Z"
                        fill="#fff"
                      />
                    </svg>
                  </UpsellAddButton>
                </UpsellItem>
              ))}
            </UpsellList>
          </UpsellSection>

          {/* Footer */}
          <CartFooter>
            <CartFooterNote>
              *ราคายังไม่รวมค่าจัดส่งและส่วนลดอื่นๆ
            </CartFooterNote>
            <CheckoutButton>
              <span>ทำรายการต่อ</span>
              <span>฿ {totalPrice}</span>
            </CheckoutButton>
          </CartFooter>
        </div>
      </CartDrawerContainer>
    </Drawer>
  );
};

export default CartDrawer;
