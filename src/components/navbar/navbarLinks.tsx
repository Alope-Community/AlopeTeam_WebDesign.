import { NavLink } from "react-router-dom";

export default function NavbarLinks({ lang }: { lang: string }) {
  const baseClass =
    "after:content-[''] after:bottom-0 after:h-[5px] after:bg-primary after:absolute after:rounded-full relative pb-2";

  const addedHoverClass =
    "hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2";

  const addedActiveClass =
    "after:w-full after:left-0 after:right-0 after:transition-all after:duration-500";

  return (
    <div className="hidden xl:block">
      <ul className="flex gap-5 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseClass} ${addedHoverClass} ${
                isActive ? addedActiveClass : ""
              }`
            }
          >
            {lang == "en" ? "Home" : "Beranda"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/location"
            className={({ isActive }) =>
              `${baseClass} ${addedHoverClass} ${
                isActive ? addedActiveClass : ""
              }`
            }
          >
            {lang == "en" ? "Location" : "Lokasi"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `${baseClass} ${addedHoverClass} ${
                isActive ? addedActiveClass : ""
              }`
            }
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseClass} ${addedHoverClass} ${
                isActive ? addedActiveClass : ""
              }`
            }
          >
            About
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/chef"
            className={({ isActive }) =>
              `${baseClass} ${addedHoverClass} ${
                isActive ? addedActiveClass : ""
              }`
            }
          >
            {lang == "en" ? "Chef" : "Koki"}
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
}
