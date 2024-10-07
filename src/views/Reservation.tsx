import { useEffect } from "react";
import HeaderReservationSection from "../section/Reservation/header";
import { useSearchParams } from "react-router-dom";
import QuoteHomeSection from "../section/Home/quote";
import Review from "../components/review";

export default function ReservationView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "en";

  return (
    <>
      <HeaderReservationSection lang={lang} />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-light-dark">
        <Review />
      </div>

      <QuoteHomeSection />
    </>
  );
}
