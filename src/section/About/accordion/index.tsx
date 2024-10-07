import Button from "../../../components/button";
import { Subtitle, Title } from "../../../components/text";
import AccordionAbout from "./accordion";

export default function FAQAboutSection() {
  return (
    <section className="flex flex-col sm:flex-row gap-10 mt-36 mb-36 xl:px-20 md:px-10 px-5">
      <div className="w-full sm:w-1/2">
        <Subtitle text="FAQ" />
        <Title text="Frequently Asked Question" />
        <p className="text-gray-200 mt-5 mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
          architecto? Quasi repudiandae nesciunt voluptatum consectetur ipsum,
        </p>
        <Button text="Lihat Semua" to="/" />
      </div>
      <div className="w-full sm:w-1/2">
        <AccordionAbout />
      </div>
    </section>
  );
}
