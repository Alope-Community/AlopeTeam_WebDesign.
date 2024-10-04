import menus from "../../../data/menus.json";
import { Subtitle, Title } from "../../../components/text";
import CardFavorite from "./card";
import Button from "../../../components/button";

export default function HomeFavoriteSection() {
  return (
    <section className="py-8 mb-20">
      <div className="text-center uppercase mb-12 md:mb-28 relative">
        <Subtitle text={"Menu Favorit"} />
        <Title text={"Menu dengan Ragam Bumbu Khas"} />
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {menus.map((menu, index) => (
          <CardFavorite
            key={index}
            title={menu.name}
            image={menu.image}
            description={menu.description}
          />
        ))}
      </div>
      <div className="text-center">
        <Button text="View Full Menu" to="/" />
      </div>
    </section>
  );
}
