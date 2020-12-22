import React from "react";
import "./Header.css";
import amazonLogo from "./img/4.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header_logo">
        <Link to="/">
          <img src={amazonLogo} alt="amazon" />
        </Link>
      </div>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header-searchicon" />
        {/* logo */}
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hellow Guest</span>

          <span className="header_optionLineTwo">Signe In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionalBascket">
            <ShoppingBasketIcon />
            <span className="header-optionLineTwo header_bascketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
