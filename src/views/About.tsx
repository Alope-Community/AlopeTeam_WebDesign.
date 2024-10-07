import HeaderAboutSection from "../section/About/header";
import AccordionAboutSection from "../section/About/accordion";
import BenefitSectionAbout from "../section/About/benefit";
import InviteReservation from "../components/inviteReservation";
import { useEffect } from "react";

export default function AboutView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderAboutSection />
      <BenefitSectionAbout lang="en" />
      <AccordionAboutSection />
      <InviteReservation />
    </>
  );
}
