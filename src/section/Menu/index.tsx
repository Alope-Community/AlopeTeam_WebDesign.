import { useState } from "react";
import CardMenu from "./card";
import menuData from "../../data/menuData.json";

export default function MenuSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-8 mx-5 md:mx-20 min-h-screen flex items-center mt-16">
      <div className="flex flex-wrap flex-col justify-center md:flex-row w-full gap-5">
        {menuData.map((item, index: number) => (
          <CardMenu
            key={index}
            item={item}
            isActive={activeIndex === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </section>
  );
}
