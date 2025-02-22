import { useState } from "react";

// global components
import { Subtitle, Title } from "../../../components/text";
import Button from "../../../components/button";

// components
import RestaurantCard from "./card";

// data
import restaurants from "../../../data/restaurants.json";
import cities from "../../../data/cities.json";
import langContent from "../../../data/lang.json";

// icon
import MapIcon from "../../../components/icons/map";

export default function HomeRestaurantSection({ lang }: { lang?: string }) {
  const [filterLocation, setFilterLocation] = useState("kuningan");

  return (
    <section
      id="restaurant"
      className="mt-20 scroll-mt-20 px-5 md:px-10 xl:px-20"
    >
      <div className="md:flex items-center justify-between">
        <div>
          <Subtitle
            text={
              lang == "en"
                ? langContent.home.restaurant.subtitle.en
                : langContent.home.restaurant.subtitle.id
            }
          />
          <Title
            text={
              lang == "en"
                ? langContent.home.restaurant.title.en
                : langContent.home.restaurant.title.en
            }
          />
        </div>
        <div className="lg:mt-0 mt-5">
          <span className="flex items-center bg-[#191f25] py-3 px-5 rounded-lg gap-2">
            <label htmlFor="citiesSelection">
              <MapIcon myClass="size-5 text-gray-400" />
            </label>
            <select
              id="citiesSelection"
              name="citiesSelection"
              className="bg-transparent text-gray-100"
              onChange={(e) => {
                setFilterLocation(e.target.value);
              }}
            >
              {cities.map((city, index) => (
                <option key={index} className="bg-[#191f25]" value={city.value}>
                  {city.placeholder}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-10 mt-5">
        {restaurants
          .filter(
            (restaurant) => restaurant.location.toLowerCase() === filterLocation
          )
          .map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button text="View All Restaurant" to="/location" />
      </div>
    </section>
  );
}
