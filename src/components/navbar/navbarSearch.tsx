import { useState } from "react";
import { ChevronRight } from "../icons/chevron";
import SearchIcon from "../icons/search";
import NavbarSearchList from "./navbarSearchList";
import CloseIcon from "../icons/close";
import searchListMenu from "./../../data/searchListMenu.json";

export default function NavbarSearch({ lang }: { lang: string }) {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <div className="relative w-full lg:block hidden">
        <input
          type="text"
          className="py-3 px-5 shadow-sm rounded-md w-full text-gray-200 bg-dark"
          placeholder={
            lang == "en"
              ? "       Search your favorite food"
              : "       Cari Makanan Favoritmu"
          }
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {!search ? (
          <span className="absolute left-[20px] top-1/2 -translate-y-1/2">
            <SearchIcon myClass="size-6 text-gray-400" />
          </span>
        ) : (
          <button
            title="Clear search"
            aria-label="Clear search"
            type="button"
            className="absolute right-[20px] top-1/2 -translate-y-1/2"
            onClick={() => setSearch("")}
          >
            <CloseIcon myClass="size-6 text-red-500 hover:text-red-400 hover:scale-110" />
          </button>
        )}

        {search && (
          <div className="absolute shadow shadow-primary/30 bg-[#191f25] mt-7 left-0 right-0 rounded-md after:border-[10px] after:border-primary after:content-[''] after:border-t-transparent after:border-r-transparent after:border-l-transparent after:absolute after:-top-5 after:left-5">
            {searchListMenu.map((list) => (
              <NavbarSearchList
                name={list.title}
                img={`/menus/${list.img}`}
                description={list.description}
              />
            ))}
            <hr className="border-[#232a31]" />
            <a
              href=""
              className="p-3 flex justify-between hover:bg-[#232a31] text-primary rounded-b-md"
            >
              <span>Lihat Selengkapnya</span>
              <ChevronRight myClass="size-4" />
            </a>
          </div>
        )}
      </div>
    </>
  );
}
