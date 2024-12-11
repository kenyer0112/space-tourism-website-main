import { Data } from "../data";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const NavCrew = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="lg:row-start-9 lg:col-start-2 col-span-4 md:row-start-6 row-start-7  z-10 flex justify-center lg:items-center lg:justify-start">
        <ul className="flex w-40  gap-4 h-16 items-center ">
          {Data.crew.map((crew) => (
            <li className="" key={crew.path}>
              <NavLink
                to={`/crew/${crew.path}`}
                className={({ isActive }) =>
                  `block h-5 w-5  rounded-full ${
                    isActive ? "bg-white" : "bg-gray"
                  }  ${
                    pathname === "/crew" &&
                    crew.path === "douglas_hurley" &&
                    "bg-white"
                  }`
                }
              ></NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavCrew;
