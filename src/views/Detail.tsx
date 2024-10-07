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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          ipsum quibusdam perferendis corporis omnis vero accusantium numquam
          quasi sit? Excepturi maiores laudantium molestias illo error dicta
          officiis dolor soluta eum?
        "
        img="https://images.unsplash.com/photo-1484659619207-9165d119dafe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <DetailMenuSection />

      <Review />

      <InviteReservation />
    </>
  );
}
