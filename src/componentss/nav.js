import BurgerMenu from "./burgerMenu";
import { useState } from "react";

const Nav = () => {
  const [showmenu, setShowMenu] = useState(false);
  return (
    <nav className="navigation">
      <div className="container">
        <h2 className="logo">Noiretblanc</h2>
        <button
          onClick={() => setShowMenu(true)}
          style={{ opacity: showmenu && "0.3" }}
          className="burger-btn"
        >
          <BurgerMenu />
        </button>
        <div className={`subnav ${showmenu ? "show-menu" : ""}`}>
          <button className="close-btn" onClick={() => setShowMenu(false)}>
            &times;
          </button>
          <ul className="nav">
            <li>
              <a href="#introduction">Home</a>
            </li>
            <li>
              <a href="#offers">About</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
            <li>
              <a href="#meet-yemi">Our team</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
