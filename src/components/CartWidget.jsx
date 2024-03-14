import cart from "../assets/carrito-de-compras.png";
export const CartWidget = () => {
  return (
    <div id="cart-widget">
      <img src={cart} alt="cart" width="40px" />
      <span>1</span>
    </div>
  );
};
