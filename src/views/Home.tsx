// global component
import Button from "../components/button";
import { Subtitle, Title } from "../components/text";

// section component
import HomeHeaderSection from "../section/Home/header";
import HomeTypeSection from "../section/Home/type";

// data
import menus from "./../data/menus.json";

export default function HomeView() {
  return (
    <>
      <HomeHeaderSection />
      <HomeTypeSection />
    </>
  );
}
