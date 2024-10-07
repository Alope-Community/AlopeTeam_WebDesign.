import { Route, Routes } from "react-router-dom";

// views
import HomeView from "./views/Home";
import Navbar from "./components/navbar";
import MenuView from "./views/Menu";
import LocationView from "./views/Location";
import Footer from "./components/footer";
import DetailView from "./views/Detail";
import AboutView from "./views/About";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/menu" element={<MenuView />} />
        <Route path="/location" element={<LocationView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/detail" element={<DetailView />} />
      </Routes>
      <Footer />
    </>
  );
}
