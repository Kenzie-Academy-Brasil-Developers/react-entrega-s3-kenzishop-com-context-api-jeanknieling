import formatValue from "../../utils/formatValue";
import { CardContainer } from "./style";

import { useCart } from "../../providers/Cart";

const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  const { addProductToCart } = useCart();

  const handleAddCart = () => {
    addProductToCart(product);
  };

  return (
    <CardContainer>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div>
        <p>{name}</p>
        <p>{formatValue(price)}</p>
        <button onClick={handleAddCart}>Adicionar ao carrinho</button>
      </div>
    </CardContainer>
  );
};

export default ProductCard;
