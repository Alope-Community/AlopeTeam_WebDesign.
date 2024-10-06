import { useEffect } from "react";
import LocationMapSection from "../section/Location/map";
//
import Header from "../components/header";
import Review from "../components/review";
import InviteReservation from "../components/inviteReservation";

export default function LocationView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="xl:px-20 md:px-10 px-5">
        <LocationMapSection />
      </main>
      <div className="bg-light-dark">
        <Review />
      </div>
      <InviteReservation />
    </>
  );
}
