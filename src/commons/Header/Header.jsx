import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// import components
import Nav from "./Nav";
import SearchIcon from "../Search/SearchIcon";
import ShoppingIcon from "./ShoppingCartIcon";
import { Search } from "../Search/Search";

// import image
import logo from "../../assets/icons/cruce-logo.png";

// import icons
import { MenuAlt1Icon, UserIcon } from "@heroicons/react/outline";

const Header = () => {
  useEffect(() => {});

  return (
    <div className="fixed bg-white top-0 w-full z-50">
      <header className="h-24 flex items-center text-primary  transition-all duration-300 ">
        <div className="container bg-white mx-auto h-full flex items-center justify-between">
          {/* nav mobile*/}
          <div className="md:hidden">
            <MenuAlt1Icon className="w-8 h-8" />
          </div>

          {/* nav */}
          <div className="hidden md:block">
            <Nav />
          </div>

          {/* logo */}
          <Link to="/" className="md:hidden">
            <img className="w-32" src={logo} alt="" />
          </Link>

          <div className="flex">
            <SearchIcon />
            <UserIcon className="w-8 h-8 m-4 hidden text-secondary md:block" />
            <ShoppingIcon />
          </div>
        </div>
      </header>
      <Search />
    </div>
  );
};

export default Header;
