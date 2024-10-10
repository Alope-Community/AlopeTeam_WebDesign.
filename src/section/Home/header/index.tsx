import { Link } from "react-router-dom";

import langContent from "./../../../data/lang.json";

export default function HomeHeaderSection({ lang }: { lang?: string }) {
  return (
    <>
      {/* img header from unsplash */}
      <header className="h-screen bg-[url('../../../public/hero1.jpg')] bg-cover relative after:absolute after:inset-0 after:bg-gradient-to-t from-[#0e1317] to to-[#0e1317]/50 flex items-center justify-center">
        <div className="w-10/12 lg:w-2/3 text-center z-10 relative">
          <h1 className="text-primary font-bold text-xl md:text-2xl">
            Cluck N Roll
          </h1>
          <h2 className="text-gray-100 text-3xl md:text-5xl font-bold mt-5">
            {lang == "en"
              ? langContent.home.header.title.en
              : langContent.home.header.title.id}
          </h2>
          <p className="text-gray-200 mt-5 text-sm md:text-base">
            {lang == "en"
              ? langContent.home.header.description.en
              : langContent.home.header.description.id}
          </p>

          <div className="mt-10 inline-flex gap-5">
            <Link
              to={"/reservation"}
              className="px-5 py-3 rounded-md text-primary border-2 border-primary hover:bg-primary hover:text-white font-medium"
            >
              {lang == "en" ? "Reservation" : "Reservasi"}
            </Link>
            <Link
              to={"/menu"}
              className="px-5 py-3 rounded-md text-white  border-2 border-primary/80 bg-primary/80 hover:bg-primary hover:text-white font-medium"
            >
              {lang == "en" ? "See Menu" : "Lihat Menu"}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
