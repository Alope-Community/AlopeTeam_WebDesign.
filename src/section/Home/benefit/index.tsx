import StarIcon from "../../../components/icons/star";
import { Subtitle, Title } from "../../../components/text";
import benefitCards from "../../../data/benefitCards.json";
import benefits from "../../../data/benefits.json";
import CardBenefit from "./card";

export default function HomeBenefitSection() {
  return (
    <section className="py-8 mx-5 md:mx-20 mt-20 flex items-center">
      <div className="flex items-center flex-col lg:flex-row">
        <div className="w-full">
          <Subtitle text="Benefit" />
          <Title text="Kenapa anda harus beli di kami?" />
          <hr className="mt- border-primary w-[100px]" />
          <ul className="space-y-3 mt-6">
            {benefits.map((benefit) => (
              <li className="mb-5">
                <div className="flex items-center space-x-2">
                  <span className="text-orange-500">
                    <StarIcon myClass="size-5 text-yellow-400" />
                  </span>
                  <p className="text-gray-200 font-medium text-xl">
                    {benefit.title}
                  </p>
                </div>
                <div className="pl-7 mt-2">
                  <p className="text-gray-300 text-sm">{benefit.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-wrap gap-3 justify-center mt-10 lg:mt-0">
          {benefitCards.map((card, index) => (
            <CardBenefit key={index} title={card.title} image={card.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
