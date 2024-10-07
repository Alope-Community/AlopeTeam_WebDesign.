import { useEffect, useRef } from "react";
import reviews from "../../data/reviews.json";
import CardReview from "./card";
import { Subtitle, Title } from "../text";

export default function Review() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollAmount += 1;

        if (window.innerWidth < 640) {
          if (
            scrollAmount >=
            scrollContainer.scrollHeight - scrollContainer.clientHeight
          ) {
            scrollAmount = 0;
          }
          scrollContainer.scrollTo({
            top: scrollAmount,
            behavior: "smooth",
          });
        } else {
          if (
            scrollAmount >=
            scrollContainer.scrollWidth - scrollContainer.clientWidth
          ) {
            scrollAmount = 0;
          }
          scrollContainer.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    };

    const intervalId = setInterval(autoScroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-5 px-5 md:px-20 mt-20 m-5 rounded">
      <div className="text-center mb-10">
        <Subtitle text={"Apa Kata Mereka?"} />
        <Title text={"Mereka Puas dengan Pelayanan Kami"} />
      </div>
      <div
        ref={scrollRef}
        className="flex sm:flex-row flex-col space-y-4 sm:space-y-0 sm:space-x-5 overflow-auto scrollbar-hide h-[1200px] sm:h-96 pb-14"
      >
        {reviews.map((review, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex-shrink-0">
            <CardReview
              image={review.image}
              name={review.name}
              purchase={review.payment}
              review={review.review}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
