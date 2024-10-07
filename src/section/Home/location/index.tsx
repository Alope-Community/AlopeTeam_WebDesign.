import { Subtitle, Title } from "../../../components/text";
import CardLocation from "./card";

import locations from "../../../data/locations.json";

export default function HomeLocationSection() {
  return (
    <section className="grid grid-cols-3 xl:grid-cols-5 gap-16 px-5 md:px-10 xl:px-20 bg-light-dark py-20">
      <div className="col-span-3 xl:col-span-2 text-gray-200 flex items-center text-center border-solid border-2 border-primary px-10 py-14">
        <div className="text-center mx-auto">
          <div className="flex items-center justify-center gap-6">
            <hr className="flex-grow border-2 border-primary mx-2" />
            <div className="flex flex-col items-center">
              <img
                src="/public/logo/logo.svg"
                alt=""
                className="w-14 h-14"
              />
              <Subtitle text="Cluck N Roll" />
              <Title text="CABANG" />
            </div>
            <hr className="flex-grow border-2 border-primary mx-2" />
          </div>

          <p className="mt-5 text-gray-200 ">
            Kami memiliki berbagai cabang di kota-kota besar yang siap melayani
            Anda dengan aneka masakan ayam lezat di setiap lokasinya.
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
