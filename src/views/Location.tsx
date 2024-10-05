import Header from "../components/header";
import LocationMapSection from "../section/Location/map";

export default function LocationView() {
  return (
    <>
      <Header />
      <main className="xl:px-20 md:px-10 px-5">
        <LocationMapSection />
      </main>
    </>
  );
}
