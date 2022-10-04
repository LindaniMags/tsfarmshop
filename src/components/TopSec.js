import Maskgroup from "../images/Mask group.png";
import search from "../images/Group 149.png";
import phone from "../images/phone 1.png";
import tslogo from "../images/TS logo.png";
import { TiThMenuOutline } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import React from "react";
export function TopSec() {
  const [active, setActive] = React.useState(false);

  function menu() {
    setActive((prevState) => !prevState);
  }

  return (
    <div>
      <div className="header-con">
        <div className="b-menu">
          <TiThMenuOutline className="menu-icon" onClick={menu} />
          <div className={active ? "menu-icon-active" : "menu-icon-inactive"}>
            <ul className="nav-list-active">
              <li>
                <a href="google.com">PRODUCTS</a>
              </li>
              <li>
                <a href="google.com">SERVICES</a>
              </li>
              <li>
                <a href="google.com">EDUCATION</a>
              </li>
              <li>
                <a href="google.com">SUPPLIERS</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tslogo">
          <img src={tslogo} className="icon" alt="logo" />
        </div>

        <div className="cell-con">
          <img src={phone} alt="cell" />
          <p>+268 7612 3456</p>
        </div>
      </div>
      <div className="nav-con">
        <ul className="nav-list">
          <li>
            <a href="google.com">PRODUCTS</a>
          </li>
          <li>
            <a href="google.com">SERVICES</a>
          </li>
          <li>
            <a href="google.com">EDUCATION</a>
          </li>
          <li>
            <a href="google.com">SUPPLIERS</a>
          </li>
        </ul>
      </div>

      <div className="hero"></div>
      <div className="sub-title">
        <h1>FARM SHOP</h1>
      </div>
    </div>
  );
}
