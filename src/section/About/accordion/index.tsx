import Button from "../../../components/button";
import { Subtitle, Title } from "../../../components/text";
import AccordionAbout from "./accordion";

export default function FAQAboutSection() {
  return (
    <section className="py-8 mx-5 md:mx-20 mt-16 grid grid-cols-3 gap-10">
      <div>
        <Subtitle text="FAQ" />
        <Title text="Frequently Asked Question" />
        <p className="text-gray-200 mt-5 mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
          architecto? Quasi repudiandae nesciunt voluptatum consectetur ipsum,
        </p>
        <Button text="Lihat Semua" to="/" />
      </div>
      <div className="col-span-2">
        <AccordionAbout />
      </div>
    </section>
  );
}
