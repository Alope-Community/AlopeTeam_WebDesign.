import benefits from "../../../data/benefits.json";
import CardBenefit from "./card";

export default function HomeBenefitSection() {
  return (
    <section className="py-8 mx-5 md:mx-20 min-h-screen flex items-center">
      <div className="flex items-center flex-col lg:flex-row">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">
            The Features Of Liquor
          </h2>
          <p className="text-gray-200 mb-6">
            Choosing a destination for vacation is not an easy task. There are
            so many places to go, so many different things to do. If you are a
            culinary guru, Barbados may be the ultimate destination for travel.
            Barbados restaurants are among the best restaurants in the world.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <span className="text-orange-500">⭐</span>
              <span className="text-gray-200">
                Measure and assemble ingredients for menu items
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-orange-500">⭐</span>
              <span className="text-gray-200">
                Maintain accurate food inventories
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-orange-500">⭐</span>
              <span className="text-gray-200">
                Restock kitchen for subsequent shifts
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-wrap gap-3 justify-center mt-10 lg:mt-0">
          {benefits.map((benefit, index) => (
            <CardBenefit
              key={index}
              title={benefit.title}
              image={benefit.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
