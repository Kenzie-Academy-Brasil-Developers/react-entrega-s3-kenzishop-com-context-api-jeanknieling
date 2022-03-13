import formatValue from "../../utils/formatValue";
import { CartContainer } from "./style";

import { useCart } from "../../providers/Cart";

const ShoppingCart = () => {
  const { cartProducts } = useCart();

  const totalPrice = cartProducts.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <CartContainer>
      <h2>Resumo do pedido</h2>
      <div>
        <p>{cartProducts.length} Produtos</p>
        <span>{formatValue(totalPrice)}</span>
      </div>
      <button>Finalizar pedido</button>
    </CartContainer>
  );
};

export default ShoppingCart;
