import { Link } from "react-router-dom"
import ItemServices from "./dropdownmenu/itemServices"
import { body,isActiveItem } from "../conststring/Tailwind"
import React from "react";
import Home from "../../pages/home"
export default function Navbar() {
  const [activeItem, setActiveItem] = React.useState("Home");
  return (
    <div className={body}>
      <button className=" font-bold px-4 py-4 rounded-full border border-gray-300 active:scale-95">Medora</button>
      <div className="flex gap-10 px-10 py-2 items-center rounded-full border border-gray-300 ">
          <Link to="/pages/home" className={` ${activeItem === "Home" ? isActiveItem : ""} `} onClick={() => setActiveItem("Home")}>Home</Link>
           <ItemServices />
          <Link to="/about" className={` ${activeItem === "About" ? isActiveItem : ""}`} onClick={() => setActiveItem("About")}>About US</Link>
          <Link to="/products" className={` ${activeItem === "Products" ? isActiveItem : ""}`} onClick={() => setActiveItem("Products")}>Products</Link>
          <Link to="/blog" className={` ${activeItem === "Blog" ? isActiveItem : ""}`} onClick={() => setActiveItem("Blog")}>Blog</Link>
          <Link to="/careers" className={` ${activeItem === "Careers" ? isActiveItem : ""}`} onClick={() => setActiveItem("Careers")}>Careers</Link>
          <input type="text" className="border border-gray-300 rounded-full px-4 py-2" placeholder="Search..." />
          <button className="text-gray-700 font-bold px-2 py-2 rounded-full border border-gray-300 active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.023.832l.707 4.242A1.125 1.125 0 012.875 9.75H2.25m0 0v-.375a3.375 3.375 0 011 0a2.25 2.25 0 012.016 1.761l1.834 5.253a2.25 2.25 0 002.164 1.554H17.25m-.75 0a2.25 2.25 0 01-2.25-2.25v-2.25A2.25 2.25 0 0117.25 9.75m0 0c-.899-.899-2.25-.899-3.149 0" />
            </svg>
          </button> 
      </div>
      <button className=" font-bold px-4 py-4 rounded-full border border-gray-300 active:scale-95 ">Contact US</button>
    </div>
  )
}