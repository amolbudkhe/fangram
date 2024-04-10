import Carousel from "../../common/carousel/carousel";

import BannerImageOne from "../../../styles/assets/images/BannerImageOne.png";

const BannerCarousel = () => {
  return (
    <Carousel>
      <div className="carousel_main_container">
        <div className="inner_wrapper">
          <div className="img_area">
            {/* <h1>Carousel 0</h1> */}
            <img src={BannerImageOne} alt="Banner Carousel" />
          </div>
        </div>
      </div>
      <div className="carousel_main_container">
        <div className="inner_wrapper">
          <div className="img_area">
            {/* <h1>Carousel 1</h1> */}
            <img src={BannerImageOne} alt="Banner Carousel" />
          </div>
        </div>
      </div>
      <div className="carousel_main_container">
        <div className="inner_wrapper">
          <div className="img_area">
            {/* <h1>Carousel 2</h1> */}
            <img src={BannerImageOne} alt="Banner Carousel" />
          </div>
        </div>
      </div>
      <div className="carousel_main_container">
        <div className="inner_wrapper">
          <div className="img_area">
            {/* <h1>Carousel 3</h1> */}
            <img src={BannerImageOne} alt="Banner Carousel" />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
