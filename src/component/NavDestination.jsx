import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Data } from "../data";
const NavDestination = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="lg:row-start-4 lg:col-start-7 col-span-4  z-10  flex justify-center lg:justify-start lg:pt-4 row-start-6  items-center">
        <ul className="flex gap-6  text-white uppercase">
          {Data.destinations.map((dest) => (
            <li className="relative" key={dest.name}>
              <NavLink
                to={`/destination/${dest.path}`}
                className={({ isActive }) =>
                  ` ${isActive ? "botton-des" : ""} ${
                    pathname === "/destination" &&
                    dest.path === "moon" &&
                    "botton-des"
                  }`
                }
              >
                {dest.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default NavDestination;
