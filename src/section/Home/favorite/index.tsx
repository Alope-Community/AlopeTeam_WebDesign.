import menus from "../../../data/menus.json";
import { Subtitle, Title } from "../../../components/text";
import CardFavorite from "./card";
import Button from "../../../components/button";

import langContent from "./../../../data/lang.json";

export default function HomeFavoriteSection({ lang }: { lang?: string }) {
  return (
    <section className="py-8 mb-20">
      <div className="text-center uppercase mb-12 md:mb-28 relative">
        <Subtitle
          text={
            lang == "en"
              ? langContent.home.favorite.subtitle.en
              : langContent.home.favorite.subtitle.id
          }
        />
        <Title
          text={
            lang == "en"
              ? langContent.home.favorite.title.en
              : langContent.home.favorite.title.id
          }
        />
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {menus.map((menu, index) => (
          <CardFavorite
            key={index}
            title={lang == "en" ? menu.name.en : menu.name.id}
            image={menu.image}
            description={
              lang == "en" ? menu.description.en : menu.description.id
            }
          />
        ))}
      </div>
      <div className="text-center">
        <Button text="View Full Menu" to="/menu" />
      </div>
    </section>
  );
}
