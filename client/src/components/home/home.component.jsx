import React, { useEffect, useState } from "react";
import CategoryComponent from "../category/category.component";
import CarouselComponent from "../carousel/carousel.component";
import axios from "axios";
const HomeComponent = () => {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([
    // {
    //   id: 1,
    //   categoryName: "Fruits & Vegetables",
    //   categoryText: "A variety of fresh fruits and vegetables.",
    //   imgSrc: "/static/images/category/fruits.png",
    // },
    // {
    //   id: 2,
    //   categoryName: "Bakery Cakes and Dairy",
    //   categoryText:
    //     "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
    //   imgSrc: "/static/images/category/bakery.png",
    // },
    // {
    //   id: 3,
    //   categoryName: "Beverages",
    //   categoryText:
    //     "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer, and more.",
    //   imgSrc: "/static/images/category/beverages.png",
    // },
    // {
    //   id: 4,
    //   categoryName: "Beauty and Hygiene",
    //   categoryText:
    //     "Buy beauty and personal care products online in India at best prices.",
    //   imgSrc: "/static/images/category/beauty.png",
    // },
    // {
    //   id: 5,
    //   categoryName: "Baby Care",
    //   categoryText:
    //     "Shop online for Baby Products, Diapers, Skin Care Products, etc.",
    //   imgSrc: "/static/images/category/baby.png",
    // },
  ]);
  useEffect(() => {
    let responsePromise = axios.get("http://localhost:5000/banners");
    responsePromise.then((response) => {
      response.data.sort((a, b) => a.order - b.order);
      setBanners(response.data);
    });
  }, []);

  useEffect(() => {
    let responsePromise = axios.get("http://localhost:5000/categories");
    responsePromise.then((response) => {
      response.data.sort((a, b) => a.order - b.order);
      setCategories(response.data);
    });
  }, []);

  
  const categoryElements = categories
    .filter((category) => category.enabled)
    .map((category) => {
      return (
        <CategoryComponent key={category.key} categoryDetails={category} />
      );
    });

  return (
    <>
      <CarouselComponent banners={banners} />
      <div className="d-flex flex-column align-items-center justify-content-start my-3">
        {categoryElements}
      </div>
    </>
  );
};

export default HomeComponent;
