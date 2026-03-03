import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { useDispatch,useSelector } from "react-redux";
import { searchedValue,removeSearch } from "../stateSlice/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch()
  const search = useSelector((state)=>state.searched.value)
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [formData, setFormData] = useState({ input: "" });
  // const handleForm = () => {
  //   const input = e.target

  //   setFormData((prev) => ({
  //     ...prev,
  //     [input]:value
  //   }))
  // }
console.log(search);



  return (
    <>
      {/* Navbar */}
      <nav className="bg-black text-white px-6 py-4 flex items-center justify-between shadow-lg relative z-50">
        {/* Left Section */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-red-800 tracking-wide">
            StreamX
          </h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 font-medium">
            <li><Link to="/" className="hover:text-red-800 transition duration-300">Home</Link></li>
            <li><Link to="/trending" className="hover:text-red-800 transition duration-300">Trending</Link></li>
            <li><Link to="/categories" className="hover:text-red-800 transition duration-300">Categories</Link></li>
            <li><Link to="/my-list" className="hover:text-red-800 transition duration-300">My List</Link></li>
            <li><Link to="/contact" className="hover:text-red-800 transition duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search Bar (Desktop only) */}
          <div className="hidden md:flex items-center bg-white rounded-full px-3 py-1">
            <Search size={18} className="text-black" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 outline-none bg-transparent text-black text-sm"
              
              value={search}
              onChange={(e)=>dispatch(searchedValue(e.target.value))}
            />
          </div>

          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-red-800 flex items-center justify-center font-semibold cursor-pointer hover:bg-red-700">
            S
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-black text-white px-6 py-6 space-y-4 border-t border-gray-800 animate-slideDown">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2 rounded-lg hover:bg-red-800 hover:text-white transition duration-300 font-medium text-lg"
          >
            Home
          </Link>
          <Link
            to="/trending"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2 rounded-lg hover:bg-red-800 hover:text-white transition duration-300 font-medium text-lg"
          >
            Trending
          </Link>
          <Link
            to="/categories"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2 rounded-lg hover:bg-red-800 hover:text-white transition duration-300 font-medium text-lg"
          >
            Categories
          </Link>
          <Link
            to="/my-list"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2 rounded-lg hover:bg-red-800 hover:text-white transition duration-300 font-medium text-lg"
          >
            My List
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2 rounded-lg hover:bg-red-800 hover:text-white transition duration-300 font-medium text-lg"
          >
            Contact
          </Link>
        </div>
      )}

      {/* Slide Down Animation */}
      <style>
        {`
          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideDown {
            animation: slideDown 0.3s ease-out forwards;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;