import StarIcon from "../../../components/icons/star";
import { Subtitle, Title } from "../../../components/text";
import benefitCards from "../../../data/benefitCards.json";
import benefits from "../../../data/benefits.json";
import CardBenefit from "./card";

import langContent from "./../../../data/lang.json";

export default function HomeBenefitSection({ lang }: { lang?: string }) {
  return (
    <section className="py-8 mx-5 md:mx-20 mt-20 flex items-center">
      <div className="flex items-center flex-col lg:flex-row">
        <div className="w-full">
          <Subtitle text="Benefit" />
          <Title
            text={
              lang == "en"
                ? langContent.home.benefit.title.en
                : langContent.home.benefit.title.id
            }
          />
          {/* <hr className="mt- border-primary w-[100px]" /> */}
          <ul className="space-y-3 mt-6">
            {benefits.map((benefit) => (
              <li className="mb-5">
                <div className="flex items-center space-x-2">
                  <span className="text-orange-500">
                    <StarIcon myClass="size-5 text-yellow-400" />
                  </span>
                  <p className="text-gray-200 font-medium text-xl">
                    {lang == "en" ? benefit.title.en : benefit.title.id}
                  </p>
                </div>
                <div className="pl-7 mt-2">
                  <p className="text-gray-300 text-sm">
                    {lang == "en" ? benefit.subtitle.en : benefit.subtitle.id}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-wrap gap-3 justify-center mt-10 lg:mt-0">
          {benefitCards.map((card, index) => (
            <CardBenefit
              key={index}
              title={lang == "en" ? card.title.en : card.title.id}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
