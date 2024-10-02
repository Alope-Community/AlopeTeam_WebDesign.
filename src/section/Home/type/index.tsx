import { useState, useEffect } from "react";
import menuTypes from "../../../data/menuTypes.json";
import ListType from "./list";

export default function HomeTypeSection() {
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
    <section className="grid grid-cols-9 gap-10 bg-light-dark px-20 py-16 items-center">
      <div className="col-span-5 relative">
        <img
          className="h-[500px] w-full rounded"
          src={`/menus/${menuTypes[currentIndex].image}`}
          alt={menuTypes[currentIndex].name}
        />
        <div className="bg-primary absolute -left-5 -bottom-5 w-[400px] rounded py-5 px-3">
          <h1 className="text-2xl font-medium text-gray-100">
            {menuTypes[currentIndex].name}
          </h1>
          <p className="text-gray-200 text-sm mt-2">
            {menuTypes[currentIndex].description}
          </p>
        </div>
      </div>

      <ListType />
    </section>
  );
}
