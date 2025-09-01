import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import icon_close from "../assets/shared/icon-close.svg";
import icon_ham from "../assets/shared/icon-hamburger.svg";

const routes = [
  { to: '/', text: "HOME", num: "00" },
  { to: '/destination', text: "DESTINATION", num: "01" },
  { to: '/crew', text: "CREW", num: "02" },
  { to: '/technology', text: "TECHNOLOGY", num: "03" },
];

const Nav = () => {
  const [nav, setNav] = useState(!false);

  return (
    <nav className="absolute lg:top-4  z-20 w-full text-white flex items-center gap-4 justify-between h-20 lg:pl-16 px-5 sm:px-0 sm:pl-5 ">
      <img src={logo} alt="logo-page" className="" />
      <ul
        className={`flex gap-4 nav items-center  lg:pl-20 w-full lg:max-w-[730px] max-w-[490px] justify-center lg:justify-normal ${
          nav ? "close" : "open"
        }`}
        onClick={() => setNav(!nav)}
      >
        {routes.map((route) => (
          <li className="relative" key={route.num}>
            <NavLink
              to={route.to}
              className={({ isActive }) =>
                `${isActive ? "botton" : ""} md:nav-hover`
              }
            >
              <span className="hidden lg:inline-block ">{route.num}</span>{" "}
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
      {nav ? (
        <img
          src={icon_ham}
          alt=""
          onClick={() => setNav(!nav)}
          className="inline-block sm:hidden z-30 animate__animated animate__pulse animate__infinite animate__slower animate__delay-3s"
        />
      ) : (
        <img
          src={icon_close}
          alt=""
          onClick={() => setNav(!nav)}
          className="inline-block sm:hidden z-30 animate__animated animate__wobble animate__repeat-3 animate__slower animate__delay-3s"
        />
      )}
    </nav>
  );
};

export default Nav;
