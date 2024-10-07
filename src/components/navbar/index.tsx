import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

import NavbarAction from "./navbarAction";
import NavbarLinks from "./navbarLinks";
import FullScreenNav from "./fullScreenNav";
import BarsIcon from "../icons/bars";
import NavbarSearch from "./navbarSearch";

export default function Navbar() {
  const [showFullScreenNav, setShowFullScreenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const nav = document.querySelector("nav");
      nav?.classList.toggle("bg-[#191f25]", window.scrollY > 100);
      nav?.classList.toggle("!py-3", window.scrollY > 100);
    });
  }, []);

  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "en";

  return (
    <>
      <nav className="transition duration-500 py-7 px-5 md:px-10 xl:px-20 grid grid-cols-2 xl:grid-cols-5 items-center fixed top-0 left-0 right-0 text-gray-200 z-50">
        <div>
          <NavLink to="/">
            <p className="text-sm sm:text-xl font-semibold flex items-center gap-2 md:gap-3 whitespace-nowrap">
              <img src="/logo/logo.svg" alt="" className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14" />
              Cluck N Roll
            </p>
          </NavLink>
        </div>
        <div className="xl:col-span-2 flex items-center justify-end gap-2">
          <NavbarSearch lang={lang} />
          <div className="flex xl:hidden">
            <button
              title="Toggle fullscreen nav"
              aria-label="Toggle fullscreen nav"
              type="button"
              className="p-1 sm:p-2 rounded-md bg-primary hover:opacity-90 text-white text-sm flex items-center gap-2 justify-center"
              onClick={() => {
                setShowFullScreenNav(!showFullScreenNav);
              }}
            >
              <BarsIcon myClass="size-5 sm:size-6" />
            </button>
          </div>
        </div>
        <div className="xl:col-span-2 hidden xl:flex items-center justify-end gap-10">
          <NavbarLinks lang={lang} />
          <NavbarAction
            toggleNavScreen={() => {
              setShowFullScreenNav(!showFullScreenNav);
            }}
            lang={lang}
          />
        </div>
        {/* <div className="flex md:hidden justify-end">
          <button
            title="Toggle fullscreen nav"
            aria-label="Toggle fullscreen nav"
            type="button"
            className="p-1 sm:p-2 rounded-md bg-primary hover:opacity-90 text-white text-sm flex items-center gap-2 justify-center"
            onClick={() => {
              setShowFullScreenNav(!showFullScreenNav);
            }}
          >
            <BarsIcon myClass="size-5 sm:size-6" />
          </button>
        </div> */}
      </nav>
      <FullScreenNav
        show={showFullScreenNav}
        toggleNavScreen={() => {
          setShowFullScreenNav(!showFullScreenNav);
        }}
      />
    </>
  );
}
