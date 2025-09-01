import { Data } from "../data";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const NavTechnology = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="lg:row-start-5 absolute z-10 lg:col-start-2  md:row-start-8 row-start-7  w-full lg:w-0 lg:mt-0 my-4 ">
        <ul className="flex  gap-5 lg:flex-col  h-64 lg:justify-evenly justify-center text-2xl ">
          {Data.technology.map((tech) => (
            <li
              key={tech.number}
              className="lg:h-14 lg:w-14  rounded-full  lg:leading-[56px] text-center h-12 w-12 leading-[48px] text-white"
            >
              <NavLink
                to={`/technology/${tech.path}`}
                className={({ isActive }) =>
                  `h-full w-full block rounded-full  ${
                    isActive ? "bg-white text-black " : "outline outline-gray"
                  } ${
                    pathname === "/technology" &&
                    tech.path === "launch_vehicle" &&
                    "bg-white text-black  outline-0"
                  }

                  `
                }
              >
                {tech.number}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavTechnology;
