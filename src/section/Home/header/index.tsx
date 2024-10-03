import { Link } from "react-router-dom";

export default function HomeHeaderSection({ lang }: { lang?: string }) {
  return (
    <>
      {/* img header from unsplash */}
      <header className="h-screen bg-[url(https://images.unsplash.com/photo-1627662236973-4fd8358fa206?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover relative after:absolute after:inset-0 after:bg-gradient-to-t from-[#0e1317] to to-[#0e1317]/50 flex items-center justify-center">
        <div className="w-10/12 lg:w-2/3 text-center z-10 relative">
          <h1 className="text-primary font-bold text-xl md:text-2xl">
            Cluck N Roll
          </h1>
          <h2 className="text-gray-100 text-3xl md:text-5xl font-bold mt-5">
            {lang == "en"
              ? "Where Chicken is Served with Enjoyment"
              : "Dimana Ayam Disajikan dengan Nikmat"}
          </h2>
          <p className="text-gray-200 mt-5 text-sm md:text-base">
            {lang == "en"
              ? "We use the best regionally grown vegetables and foraged ingredients on their menu, taking inspiration from the region. A creative menu list, refreshing drinks and a variety of seasonings with an extraordinary selection of spices go well with the food."
              : "Kami menggunakan sayur-sayuran terbaik yang ditanam secara lokal dan bahan-bahan hijauan pada menu mereka, mengambil inspirasi dari daerah tersebut. Daftar menu yang kreatif, minuman menyegarkan dan beragam bumbu dengan pilihan bumbu yang luar biasa cocok dengan makanannya."}
          </p>

          <div className="mt-10 inline-flex gap-5">
            <Link
              to={"/reservation"}
              className="px-5 py-3 rounded-md text-primary border-2 border-primary hover:bg-primary hover:text-white font-medium"
            >
              {lang == "en" ? "Reservation" : "Reservasi"}
            </Link>
            <Link
              to={"/menu"}
              className="px-5 py-3 rounded-md text-white  border-2 border-primary/80 bg-primary/80 hover:bg-primary hover:text-white font-medium"
            >
              {lang == "en" ? "See Menu" : "Lihat Menu"}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
