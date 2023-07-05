import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../sass/home.scss";
import Cart from "./Cart";
import Nav from "./Nav";
import {
  switchState,
  setItems,
  setCart,
  setItemNo,
  setHomeProduct,
} from "../store";
function Home() {
  const dispatch = useDispatch();
  const dataShow = useSelector((state) => {
    return state.dataShow;
  });
  const items = useSelector((state) => {
    return state.items;
  });

  const cart = useSelector((state) => {
    return state.cart;
  });
  //This useState is a clone of above redux cart, this is used to save the data to the local storage
  const [cloneCart, setCloneCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("here in clone cart");
  }, [cloneCart]);
  useEffect(() => {
    const newCart = JSON.parse(localStorage.getItem("cart"));
    console.log(newCart);
    if (newCart) dispatch(setCart(newCart));
  }, []);
  const itemNo = useSelector((state) => {
    return state.itemNo;
  });
  const product = useSelector((state) => {
    return state.homeProduct;
  });

  useEffect(() => {
    fetchItems();
  }, [dataShow]);
  const navigate = useNavigate();

  const fetchItem = (itemNo) => {
    const { _id, title, price, description, imageUrl, userId } = items.find(
      (item) => item._id == itemNo
    );
    console.log("at fetch item");
    console.log(_id);
    dispatch(
      setHomeProduct({
        id: _id,
        title: title,
        imageUrl: imageUrl,
        price: price,
        description: description,
      })
    );
  };

  const fetchItems = async () => {
    const data = await fetch("http://localhost:5000/products");
    const dataItem = await data.json();
    dispatch(setItems(dataItem));
  };

  //handles edit button click
  const handleClick = (item) => {
    dispatch(setItemNo(item));
    fetchItem(item);
    dispatch(switchState(false));
  };

  //hanldes add to cart button click
  const handleCart = (item) => {
    const newItems = [...cart, item];
    setCloneCart(newItems);
    dispatch(setCart(newItems));
  };

  //handles delete button click
  const handleDelete = async (item) => {
    const res = await fetch("http://localhost:5000/admin/delete-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item }),
    })
      .then((res) => {
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    const newProduct = { ...product, [name]: value };

    dispatch(setHomeProduct(newProduct));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, title, imageUrl, price, description } = product;
    console.log("in handle submit");

    const res = await fetch("http://localhost:5000/admin/edit-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, imageUrl, price, description, id }),
    })
      .then((res) => {
        dispatch(switchState(true));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (dataShow) {
    return (
      <div>
        <Nav />
        <div className="total-cards">
          {items.map((item) => (
            <div key={item._id} className="cards">
              <img src={item.imageUrl} alt="Example" />
              <h3>{item.title}</h3>
              <h4>{item.price}</h4>
              <p>{item.description}</p>
              <button
                onClick={() => {
                  handleClick(item._id);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  handleCart(item);
                }}
              >
                Add To Cart
              </button>
              <button
                onClick={() => {
                  handleDelete(item._id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
          {cart.length > 0 && <Cart cart={cart} setCart={setCart} />}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Nav />
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="edit-product"
          id="edit-product"
        >
          <h2>Editing {product.title}</h2>
          <div className="form-group">
            <label htmlFor="title">Title : </label>
            <input
              type="text"
              name="title"
              id="title"
              value={product.title}
              onChange={handleInputs}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL : </label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              value={product.imageUrl}
              onChange={handleInputs}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price : </label>
            <input
              type="text"
              name="price"
              id="price"
              value={product.price}
              onChange={handleInputs}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description : </label>
            <input
              type="text"
              name="description"
              id="description"
              value={product.description}
              onChange={handleInputs}
            ></input>
          </div>
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default Home;
