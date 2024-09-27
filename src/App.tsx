import { Route, Routes } from "react-router-dom";

// views
import HomeView from "./views/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/menu" element={<p>Menu</p>} />
      </Routes>
    </>
  );
}
