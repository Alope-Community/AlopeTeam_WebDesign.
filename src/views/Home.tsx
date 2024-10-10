import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// section component
import HomeFavoriteSection from "../section/Home/favorite";
import HomeLocationSection from "../section/Home/location";
import HomeTypeSection from "../section/Home/type";
import HomeBenefitSection from "../section/Home/benefit";
import HomeHeaderSection from "../section/Home/header";
import HomeRestaurantSection from "../section/Home/restaurant";
import QuoteHomeSection from "../section/Home/quote";

export default function HomeView() {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "en";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HomeHeaderSection lang={lang} />
      <HomeBenefitSection lang={lang} />
      <HomeTypeSection lang={lang} />
      <HomeFavoriteSection lang={lang} />
      <HomeLocationSection lang={lang} />
      <HomeRestaurantSection lang={lang} />
      <QuoteHomeSection lang={lang} />
    </>
  );
}
