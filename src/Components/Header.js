import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav className="Header">
      <NavLink activeClassName="active" className="link" to="/" end>
        produto
      </NavLink>{" "}
      <NavLink activeClassName="active" className="link" to="contato">
        Contato
      </NavLink>
    </nav>
  );
};

export default Header;
