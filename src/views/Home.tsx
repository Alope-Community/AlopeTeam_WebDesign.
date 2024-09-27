// global component

// section component
import HomeHeaderSection from "../section/Home/header";

// data
import menus from "./../data/menus.json";

export default function HomeView() {
  return (
    <>
      <HomeHeaderSection />

      {menus.map((menu) => (
        <p>{menu.name}</p>
      ))}
    </>
  );
}
