import {
  MenuCardContainer,
  ImageContainer,
  ProductImage,
  CardContent,
  PriceContainer,
  PriceWrapper,
  Price,
  ProductTitle,
} from "../styles/components/menuCard";

const MenuCard = ({ product }) => {
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
    </MenuCardContainer>
  );
};

export default MenuCard;
