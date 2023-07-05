import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
function App() {
  const cart = useSelector((state) => {
    return state.cart;
  });
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/form" exact element={<Form />} />
          <Route path="/add-product" exact element={<AddProduct />} />
          <Route path="/cart" exact element={<Cart cart={cart} />} />
          {/* <Route path="/blue-green" exact element={<BlueGreen />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
