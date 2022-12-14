import React from "react";

import { Link, NavLink } from "react-router-dom";
import CartWidget from "./Cartwidget";


const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}><img src="kisspng-chicken-soup-tomato-soup-vegetable-soup-clip-art-stewed-clipart-5adda803724f29.9995506215244759074682.png" alt="Sopita"
          width="80" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/Sopas"}>Sopas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/Chifas"}>Chifas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/Bebida"}>bebidas</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar