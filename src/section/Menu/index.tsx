import { useState } from "react";
import CardMenu from "./card";
import menuData from "../../data/menuData.json";
import { Subtitle, Title } from "../../components/text";

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
    <section className="py-8 mx-5 md:mx-20 mt-16">
      <div className="text-center mb-20">
        <Subtitle text="Menu Kami" />
        <Title text="Menu Menu Rajanya Ayam" />
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
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
