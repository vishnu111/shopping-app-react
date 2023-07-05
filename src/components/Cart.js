import Nav from "./Nav";
function Cart({ cart, setCart }) {
  return (
    <div>
      <Nav />
      <div className="cart">
        <h2>This is a cart page</h2>
        {cart.map((c) => (
          <div key={c._id}>{c.title}</div>
        ))}
      </div>
    </div>
  );
}
export default Cart;
