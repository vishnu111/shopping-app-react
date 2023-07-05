import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../store";
import Nav from "./Nav";
function AddProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => {
    return state.product;
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    const newProduct = { ...product, [name]: value };
    dispatch(setProduct(newProduct));
    // setProduct(newProduct);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, imageUrl, price, description } = product;
    const res = await fetch("http://localhost:5000/admin/add-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, imageUrl, price, description }),
    })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Nav />
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="product-form"
        id="product-form"
      >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={product.title}
            onChange={handleInputs}
            placeholder="Enter Title"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            value={product.imageUrl}
            onChange={handleInputs}
            placeholder="Enter Image URL"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            value={product.price}
            onChange={handleInputs}
            placeholder="Enter Price"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={product.description}
            onChange={handleInputs}
            placeholder="Enter Description"
          ></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default AddProduct;
