import { Title } from "../../../components/text";
import CardLocation from "./card";

import locations from "../../../data/locations.json";

export default function HomeLocationSection() {
  return (
    <section className="grid grid-cols-5 gap-16 px-20 py-16 bg-light-dark py-20">
      <div className="col-span-2 text-gray-200 flex items-center text-center border-solid border-2 border-primary px-10 py-14">
        <div>
          <div className="flex items-center justify-center">
            <hr className="flex-grow border-2 border-primary mx-2" />
            <Title text="RESTORAN" />
            <hr className="flex-grow border-2 border-primary mx-2" />
          </div>
          <p className="mt-3">
            Lorem ipsum dolor sit, amet consectetur <br />
            adipisicing elit. Ullam corrupti distinctio et voluptates minima
            officia?
          </p>
        </div>
      </div>
      <div className="grid col-span-3 grid-cols-3 gap-2">
        {locations.map((locations, index) => (
          <CardLocation
            key={index}
            name={locations.name}
            image={locations.image}
          />
        ))}
      </div>
    </section>
  );
}
