// section component
import HomeFavoriteSection from "../section/Home/favorite";
import HomeFooterSection from "../section/Home/footer";
import HomeLocationSection from "../section/Home/location";
import HomeTypeSection from "../section/Home/type";
import HomeBenefitSection from "../section/Home/benefit";
import HomeHeaderSection from "../section/Home/header";

export default function HomeView() {
  return (
    <>
      <HomeHeaderSection />
      <HomeFavoriteSection />
      <HomeTypeSection />
      <HomeBenefitSection />
      <HomeLocationSection />
      <HomeFooterSection />

      <div className="bg-dark text-primary ">fwefewf</div>
    </>
  );
}
