import { useState } from "react";
import { Subtitle, Title } from "../../../components/text";
import { useSearchParams } from "react-router-dom";
import MapPaperIcon from "../../../components/icons/mapPaper";
import GridIcon from "../../../components/icons/grid";
import MapLocationSection from "./map";
import RestaurantCard from "../../Home/restaurant/card";
import restaurants from "./../../../data/restaurants.json";

export default function LocationMapSection() {
  const [viewOn, setViewOn] = useState(2);
  const [sliceCount, setSliceCount] = useState(6);
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "en";

  return (
    <>
      <div className="mt-20 mb-10 flex lg:flex-row flex-col lg:items-center md:items-start items-center lg:justify-between">
        <div className="md:text-left text-center">
          <Subtitle text={lang == "en" ? "Our Location" : "Lokasi Kami"} />
          <Title
            text={
              lang == "en" ? "Cluck N Roll Restaurant" : "Restoran Cluck N Roll"
            }
          />
        </div>
        <div className="mt-5 xl:mt-0 md:text-left text-center">
          <p className="text-gray-200 text-sm mb-1">
            {lang == "en" ? "View on" : "Lihat sebagai"}
          </p>
          <div className="flex gap-">
            <button
              title="See on Map"
              aria-label="See on Map"
              type="button"
              className={`px-3 py-2 rounded-l-md text-primary border-2 border-primary ${
                viewOn == 1 && "bg-primary text-white"
              } text-sm inline-flex items-center gap-2 text-primary`}
              onClick={() => {
                setViewOn(1);
              }}
            >
              <MapPaperIcon myClass="size-4" />
              {lang == "en" ? "Map" : "Peta"}
            </button>
            <button
              title="See on Card"
              aria-label="See on Card"
              type="button"
              className={`px-3 py-2 rounded-r-md text-primary border-2 border-primary ${
                viewOn == 2 && "bg-primary text-white"
              } text-sm inline-flex items-center gap-2 text-primary`}
              onClick={() => {
                setViewOn(2);
              }}
            >
              {lang == "en" ? "Card" : "Kartu"}
              <GridIcon myClass="size-4" />
            </button>
          </div>
        </div>
      </div>

      {viewOn == 1 ? (
        <div
          id="map"
          className="overflow-hidden rounded border-2 border-primary"
        >
          <MapLocationSection />
        </div>
      ) : (
        <div
          id="map"
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-5 mt-20 scroll-m-44"
        >
          {restaurants.slice(0, sliceCount).map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}

          <div className="md:col-span-2 xl:col-span-3 text-center mt-10">
            {sliceCount == 6 ? (
              <button
                className="py-3 px-7 rounded-md bg-primary hover:bg-primary/80 text-white text-sm inline-flex items-center gap-2 justify-center active:scale-95"
                onClick={() => setSliceCount(18)}
              >
                Lihat Semua Restoran
              </button>
            ) : (
              <button
                className="py-3 px-7 rounded-md bg-primary hover:bg-primary/80 text-white text-sm inline-flex items-center gap-2 justify-center active:scale-95"
                onClick={() => setSliceCount(6)}
              >
                Lihat Sebagian
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
