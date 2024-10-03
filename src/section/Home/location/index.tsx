import { Subtitle, Title } from "../../../components/text";
import CardLocation from "./card";

import locations from "../../../data/locations.json";
import StoreIcon from "../../../components/icons/store";

export default function HomeLocationSection() {
  return (
    <section className="grid grid-cols-3 xl:grid-cols-5 gap-16 px-5 md:px-10 xl:px-20 bg-light-dark py-20">
      <div className="col-span-3 xl:col-span-2 text-gray-200 flex items-center text-center border-solid border-2 border-primary px-10 py-14">
        <div className="text-center mx-auto">
          <div className="flex items-center gap-6 justify-center">
            <hr className="flex-grow border-2 border-primary mx-2" />
            <div>
              <StoreIcon myClass="size-10 mx-auto mb-2 text-gray-400" />
              <Subtitle text="Cluck N Roll" />
              <Title text="RESTORAN" />
            </div>
            <hr className="flex-grow border-2 border-primary mx-2" />
          </div>
          <p className="mt-5 text-gray-200 ">
            Lorem ipsum dolor sit, amet consectetur <br />
            adipisicing elit. Ullam corrupti distinctio et voluptates minima
            officia?
          </p>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-3 col-span-3 gap-2">
        {locations.map((locations, index) => (
          <CardLocation
            key={index}
            title={locations.title}
            subtitle={locations.subtitle}
            image={locations.image}
          />
        ))}
      </div>
    </section>
  );
}
