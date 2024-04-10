import Slider from "react-slick";
import "./carousel.scss";

const Carousel = (props) => {
  const { className = "" } = props;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    className: className,
  };

  return <Slider {...settings}>{props.children}</Slider>;
};

export default Carousel;
