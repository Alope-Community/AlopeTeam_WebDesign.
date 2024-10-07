import { useEffect } from "react";
import Header from "../components/header";
import InviteReservation from "../components/inviteReservation";
import Review from "../components/review";
import DetailMenuSection from "../section/Detail";

export default function DetailView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header
        subtitle="Lokasi Terbaik"
        title="Prime Chicken in Surabaya"
        description="
          Cabang Prime Chicken di Surabaya merupakan yang terbaik, menawarkan berbagai hidangan ayam lezat dengan cita rasa autentik dan pelayanan yang ramah, menjadikannya tempat ideal untuk bersantap bersama keluarga dan teman.
        "
        img="/header/header3.jpg"
      />
      <DetailMenuSection />

      <Review />

      <InviteReservation />
    </>
  );
}
