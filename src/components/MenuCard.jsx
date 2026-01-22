import { useState } from "react";
import { Select, message } from "antd";
import { useCart } from "../context/CartContext";
import {
  MenuCardContainer,
  ImageContainer,
  ProductImage,
  CardContent,
  PriceContainer,
  PriceWrapper,
  Price,
  ProductTitle,
  HoverOverlay,
  ActionButtons,
  SizeDropdown,
  AddToCartButton,
  ViewDetailsButton,
} from "../styles/components/menuCard";

const MenuCard = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(1);

  const sizeOptions = [
    { value: 4, label: 4 },
    { value: 3, label: 3 },
    { value: 2, label: 2 },
    { value: 1, label: 1 },
  ];

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({
      ...product,
      quantity: selectedSize,
    });
    message.success(`เพิ่ม ${product.name} ${selectedSize} ชิ้น ลงตะกร้าแล้ว`);
  };

  const handleSizeChange = (value) => {
    setSelectedSize(value);
  };

  const handleViewDetails = (e) => {
    e.stopPropagation();
  };

  return (
    <MenuCardContainer>
      <ImageContainer>
        <ProductImage
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={296}
          height={240}
        />
      </ImageContainer>
      <CardContent>
        <PriceContainer>
          <PriceWrapper>
            <Price>฿ {product.price}</Price>
          </PriceWrapper>
        </PriceContainer>
        <ProductTitle>{product.name}</ProductTitle>
      </CardContent>
      <HoverOverlay>
        <ActionButtons>
          {product.isPromotion ? (
            <ViewDetailsButton onClick={handleViewDetails}>
              ดูรายละเอียด
            </ViewDetailsButton>
          ) : (
            <>
              <SizeDropdown
                placement="topLeft"
                value={selectedSize}
                onChange={handleSizeChange}
                options={sizeOptions}
                onClick={(e) => e.stopPropagation()}
                getPopupContainer={(trigger) => trigger.parentElement}
              />
              <AddToCartButton onClick={handleAddToCart}>
                ใส่ตะกร้า ฿ {product.price * selectedSize}
              </AddToCartButton>
            </>
          )}
        </ActionButtons>
      </HoverOverlay>
    </MenuCardContainer>
  );
};

export default MenuCard;
