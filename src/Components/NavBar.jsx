import React from 'react';
import { BiCart } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = ({carts}) => {
    return (
        <nav className='bg-base-100 shadow-sm'>
            <div className="navbar max-w-300 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <GiHamburgerMenu />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl md:text-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-none shadow-none">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {/* <a href="#"><BiCart /></a> */}

                    <div className="indicator">
                        {
                            carts.length > 0 &&(<span className="absolute z-9 -top-1 -right-2 badge badge-error text-[10px] text-white px-1.5 py-0.5 min-h-0 h-4">
                            {carts.length}
                        </span>)
                        }
                        <button className="text-2xl btn btn-circle">
                            <BiCart />
                        </button>
                    </div>
                    <a href="#">Login</a>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;