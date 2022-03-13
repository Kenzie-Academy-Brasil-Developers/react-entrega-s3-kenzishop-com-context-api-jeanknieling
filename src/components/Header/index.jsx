import { Link } from "react-router-dom";
import { HeaderContainer } from "./style";
import CartCounter from "../CartCounter";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";

import { useCart } from "../../providers/Cart";

const Header = () => {
  const { cartProducts } = useCart();

  return (
    <HeaderContainer>
      <Link to="/dashboard">
        <h1>Kenzie Shop</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/cart">
              {cartProducts.length !== 0 && <CartCounter />}
              <AiOutlineShoppingCart />
              Carrinho
            </Link>
          </li>
          <li>
            <Link to="/">
              <FiLogIn />
              Entrar
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
