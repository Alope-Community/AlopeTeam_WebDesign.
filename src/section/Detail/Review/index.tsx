import { useEffect, useRef } from "react";
import { Title } from "../../../components/text";
import reviews from "../../../data/reviews.json";
import CardReviews from "./card";

export default function DetailReviewSection() {
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
    <section className="py-8 px-5 md:px-20 mt-20 rounded">
      <div className="text-center mb-10">
        <Title text={"Testimoni Para pembeli"} />
      </div>
      <div
        ref={scrollRef}
        className="flex sm:flex-row flex-col space-y-4 sm:space-y-0 sm:space-x-5 overflow-auto h-screen sm:h-96 scrollbar-hide"
      >
        {reviews.map((review, index) => (
          <div key={index} className="sm:w-1/4 w-full flex-shrink-0">
            <CardReviews
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
