import { useEffect } from "react";
import Header from "../components/header";
import MenuSection from "../section/Menu";
import InviteReservation from "../components/inviteReservation";

export default function MenuView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header
        subtitle="Our Menu"
        title="Nikmati Menu Ayam Juara Kami"
        description="
         Rasakan kelezatan berbagai olahan ayam kami, dari ayam crispy yang renyah hingga ayam bakar dengan bumbu meresap sempurna. Setiap hidangan dibuat dengan bahan berkualitas tinggi, siap memanjakan selera Anda setiap saat.
        "
        img="/header/header2.jpg"
      />
      <MenuSection />
      <InviteReservation />
    </>
  );
}
