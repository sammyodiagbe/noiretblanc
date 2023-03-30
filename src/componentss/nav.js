import BurgerMenu from "./burgerMenu";
import { useState } from "react";

const Nav = () => {
  const [showmenu, setShowMenu] = useState(false);
  return (
    <nav className="navigation">
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact-us">Contact us</a>
          </li>
          <li>
            <a href="/our-team">Our team</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
