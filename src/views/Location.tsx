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
      <Header
        subtitle="Our Restaurant"
        title="Nikmati Makan di Restoran Terbaik"
        description="Rasakan pengalaman makan yang berbeda di restoran kami, dengan aneka pilihan masakan ayam berkualitas, suasana nyaman, dan pelayanan ramah. Cocok untuk dinikmati bersama keluarga atau teman.
        "
        img="/header/header1.jpg"
      />
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
