import React from 'react';
import logo from "../../assets/navlogo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "black", color: "white" }}>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <img src={logo} className="h-8 me-3" alt="Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Online Wardrobe</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Quick Links</h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">Home</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/products" className="hover:underline">Products</Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:underline">About Us</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Shopping Collections for Men</h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">T-Shirts</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Jeans</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Shoes</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Shopping Collection for Women</h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Dresses</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Tops</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Skirts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-400 sm:text-center">© 2024 <a href="#" className="hover:underline">Online Wardrobe™</a>. All Rights Reserved.</span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              
              
            <span className="text-sm text-gray-400 sm:text-center">Developed By : <a href="" className="hover:underline">M.Farrukh Khan</a></span>
              
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
