import { useEffect } from "react";
import Header from "../components/header";
import MenuSection from "../section/Menu";

export default function MenuView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header
        subtitle="Our Menu"
        title="Nikmati Menu Ayam Juara Kami"
        description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          ipsum quibusdam perferendis corporis omnis vero accusantium numquam
          quasi sit? Excepturi maiores laudantium molestias illo error dicta
          officiis dolor soluta eum?
        "
        img="https://images.unsplash.com/photo-1572269875715-391a71e6d188?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <MenuSection />
    </>
  );
}
