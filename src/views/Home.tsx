// global component
import Button from "../components/button";
import { Subtitle, Title } from "../components/text";

// section component
import HomeHeaderSection from "../section/Home/header";

// data
import menus from "./../data/menus.json";

export default function HomeView() {
  return (
    <>
      <HomeHeaderSection />
      <Subtitle text="Hello" />
      <Title text="Hello" />
      <Button text="Test" to="/" />
      <Button text="Test" to="/" withIcon />

      {menus.map((menu) => (
        <p>{menu.name}</p>
      ))}
    </>
  );
}
