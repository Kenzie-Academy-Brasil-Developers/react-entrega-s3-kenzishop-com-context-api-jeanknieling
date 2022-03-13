import formatValue from "../../utils/formatValue";
import { CartContainer } from "./style";

const ShoppingCart = () => {
  const localStorageCartProducts = JSON.parse(
    localStorage.getItem("@KenzieShop:productsCart")
  );

  const totalPrice = localStorageCartProducts.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  return (
    <CartContainer>
      <h2>Resumo do pedido</h2>
      <div>
        <p>{localStorageCartProducts.length} Produtos</p>
        <span>{formatValue(totalPrice)}</span>
      </div>
      <button>Finalizar pedido</button>
    </CartContainer>
  );
};

export default ShoppingCart;
