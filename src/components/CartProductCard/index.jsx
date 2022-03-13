import formatValue from "../../utils/formatValue";
import { CardContainer } from "./style";

import { useCart } from "../../providers/Cart";

const CartProductCard = ({ product }) => {
  const { name, price, image } = product;
  const { removeFromCartProducts } = useCart();

  const handleRemoveProductCart = () => {
    removeFromCartProducts(product);
  };

  return (
    <CardContainer>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div>
        <p>{name}</p>
        <span>{formatValue(price)}</span>
        <button onClick={handleRemoveProductCart}>Remover</button>
      </div>
    </CardContainer>
  );
};

export default CartProductCard;
