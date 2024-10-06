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
        description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          ipsum quibusdam perferendis corporis omnis vero accusantium numquam
          quasi sit? Excepturi maiores laudantium molestias illo error dicta
          officiis dolor soluta eum?
        "
        img="https://images.unsplash.com/photo-1497644083578-611b798c60f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
