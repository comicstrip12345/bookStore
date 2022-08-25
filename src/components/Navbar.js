import React from 'react'
import { useSelector } from 'react-redux'
import CartDetails from './CartDetails';

const Navbar = () => {
    const price = useSelector((state)=>state.book.priceDetails)
    return (
        <header>
            <nav className='navbar fixed-top '>
                <div className="container">
                    <h1>book<span>Store</span></h1>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className="nav-link cart" data-bs-toggle="offcanvas" href="#cart" role="button" aria-controls="cart">
                                {/* Cart({price.length}) */}
                                <img src={require("../images/cart.png")} alt=""/> <sup>{price.length}</sup>
                            </a>
                        </li>
                    </ul>
                </div>
                <CartDetails id="cart"/>
            </nav>
        </header>
    )
}

export default Navbar