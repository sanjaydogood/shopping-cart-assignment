import React from "react";
import "./carousel.css";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = (props) => {
  const carouselBanners = props.banners.map((banner) => {
    return (
      <Carousel.Item style={{ height: "300px" }} key={banner.id}>
        <img
          style={{ height: "300px" }}
          className="d-block w-100"
          src={banner.bannerImageUrl}
          alt={banner.bannerImageAlt}
        />
      </Carousel.Item>
    );
  });
  return (
    <div className="container-fluid">
      <Carousel>{carouselBanners}</Carousel>
    </div>
  );
};

export default CarouselComponent;
