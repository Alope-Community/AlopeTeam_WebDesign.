import menus from "../../../data/menus.json";
import CardFavorite from "./card";
import { Title } from "../../../components/text";

export default function HomeFavoriteSection() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="text-center uppercase mb-6 relative">
        <Title text={"Favorite Menu"} />
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {menus.map((menu, index) => (
          <CardFavorite
            key={index}
            name={menu.name}
            image={menu.image}
            description={menu.description}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
          View Full Menu
        </button>
      </div>
    </section>
  );
}
