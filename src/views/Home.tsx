// global component

// section component
import HomeHeaderSection from "../section/Home/header";
import HomeFavoriteSection from "../section/Home/favorite";

// data
import menus from "./../data/menus.json";

export default function HomeView() {
  return (
    <>
      <HomeHeaderSection />
      <HomeFavoriteSection />

      {menus.map((menu) => (
        <p>{menu.name}</p>
      ))}
    </>
  );
}
