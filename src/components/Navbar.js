import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    let location = useLocation();
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">SHOPING CART</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link {location == /? "/": active}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link {location == /about? "/": active}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link {location == /addproduct? "/": active}`} to="/addproduct">Add Product</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link className={`nav-link {location == /addproduct? "/": active}`} to="/cart"><button className="btn btn-primary" type="button">Cart</button></Link>
                            <Link className={`nav-link {location == /addproduct? "/": active}`} to="/login"><button className="btn btn-primary" type="button">Login</button></Link>
                            <Link className={`nav-link {location == /addproduct? "/": active}`} to="/signup"><button className="btn btn-primary" type="button">Signup</button></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
