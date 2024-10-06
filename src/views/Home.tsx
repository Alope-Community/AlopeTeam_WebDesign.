// section component
import HomeFavoriteSection from "../section/Home/favorite";
import HomeLocationSection from "../section/Home/location";
import HomeTypeSection from "../section/Home/type";
import HomeBenefitSection from "../section/Home/benefit";
import HomeHeaderSection from "../section/Home/header";
import HomeRestaurantSection from "../section/Home/restaurant";
import QuoteHomeSection from "../section/Home/quote";
import { useEffect } from "react";

export default function HomeView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HomeHeaderSection />
      <HomeBenefitSection />
      <HomeTypeSection />
      <HomeFavoriteSection />
      <HomeLocationSection />
      <HomeRestaurantSection />
      <QuoteHomeSection />
    </>
  );
}
