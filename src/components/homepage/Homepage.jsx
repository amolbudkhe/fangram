import Header from "../common/header/header";
import BannerCarousel from "./bannerCarousel/bannerCarousel";

import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage_main_container">
      <Header />
      <div className="carousel_area">
        <BannerCarousel />
      </div>
      <div className="banner_bottom_section">
        <div className="section_text">
          <div className="celebrity_message gradient_txt">
            <h2># PersonalisedCelebrityMessages</h2>
          </div>
          <div className="section_message_title">
            We make your favourite celebrities talk to you, personally.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
