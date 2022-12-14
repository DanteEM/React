import React from "react";
import CartWidget from "./Cartwidget";
import Navbar from "./navbar";

const Header = () => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Navbar/> 
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <CartWidget/> 
                </div>
            </div>


        </div>
    )
    
}

export default Header;
