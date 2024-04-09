import BrandLogo from "../../../styles/assets/icons/brand_icon.svg"
import MenuIcon from "./../../../styles/assets/icons/menu_icon.svg"

import "./header.scss"


const Header = () => {
return (
  <div className="header_main_container">
    <div className="inner_wrapper">
      <div className="left_area">
        <img src={BrandLogo} alt="Brand Logo" />
      </div>
      <div className="right_area">
        <div className="btn_area">
        <button className='button primary_btn'>Login/Signup</button>
        </div>
        <div className="menu_area">
          <img src={MenuIcon} alt="Menu Icon" />
        </div>
      </div>
    </div>
  </div>
)
}

export default Header