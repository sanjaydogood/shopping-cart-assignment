import axios from "axios";
import React, { useEffect, useState } from "react";
import { cartConsumer } from "../../contexts/cartContext";
import ProductComponent from "../product/product.component";

const PlpComponent = () => {
  const [categories, setCategories] = useState([]);
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [activeElement, setActiveElement] = useState();

  const loadCategory = (e, category) => {
    //   Highlight tab
    if (activeElement) activeElement.classList.remove("active");
    const DOMElement = e.target;
    DOMElement.classList.add("active");
    setActiveElement(DOMElement);

    // Filter categories (TODO)
    const filteredProducts = fetchedProducts.filter(
      (product) => product.category === category.id
    );
    setFilteredProducts(filteredProducts);
  };

  useEffect(() => {
    const responsePromise = axios.get("http://localhost:5000/categories");
    responsePromise.then((response) => {
      response.data.sort((a, b) => a.order - b.order);
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    const responsePromise = axios.get("http://localhost:5000/products");
    responsePromise.then((response) => {
      setFilteredProducts(response.data);
      setFetchedProducts(response.data);
    });
  }, []);

  const categoriesElements = categories
    .filter((category) => category.enabled)
    .map((category) => {
      return (
        <button
          type="button"
          className="list-group-item list-group-item-action"
          key={category.key}
          onClick={(e) => loadCategory(e, category)}
        >
          {category.name}
        </button>
      );
    });
  const productElements = filteredProducts.map((product) => {
    return cartConsumer(ProductComponent, { product }, product.id);
  });

  return (
    <>
      <div className="container d-flex">
        <div className="list-group my-5">{categoriesElements}</div>
        <div className="container d-flex flex-wrap">{productElements}</div>
      </div>
    </>
  );
};

export default PlpComponent;
