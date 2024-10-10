import { useState, useEffect } from "react";
import menuTypes from "../../../data/menuTypes.json";
import ListType from "./list";

export default function HomeTypeSection({ lang }: { lang?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === menuTypes.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid xl:grid-cols-9 gap-10 bg-light-dark px-5 md:px-10 xl:px-20 py-16 items-center mt-20 mb-20">
      <div className="col-span-5 relative">
        <img
          className="h-[400px] xl:h-[500px] w-full rounded"
          src={`/menus/${menuTypes[currentIndex].image}`}
          alt={menuTypes[currentIndex].name.en}
        />
        <div className="bg-primary absolute left-1/2 -translate-x-1/2 xl:-translate-x-0 xl:-left-5 -bottom-5 w-[400px] rounded py-5 px-3">
          <h1 className="text-2xl font-medium text-gray-100 uppercase">
            {lang == "en"
              ? menuTypes[currentIndex].name.en
              : menuTypes[currentIndex].name.id}
          </h1>
          <p className="text-gray-200 text-sm mt-2">
            {lang == "en"
              ? menuTypes[currentIndex].description.en
              : menuTypes[currentIndex].description.id}
          </p>
        </div>
      </div>

      <ListType lang={lang} />
    </section>
  );
}
