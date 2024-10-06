import { Link } from "react-router-dom";

export default function HomeHeaderSection({ lang }: { lang?: string }) {
  return (
    <>
      {/* img header from unsplash */}
      <header className="h-screen bg-[url('../../../public/hero1.jpg')] bg-cover relative after:absolute after:inset-0 after:bg-gradient-to-t from-[#0e1317] to to-[#0e1317]/50 flex items-center justify-center">
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
              ? "Experience an unforgettable culinary experience with the most delicious chicken. Our premium quality chicken meat is prepared with selected spices. Enjoy a variety of chicken menus with our unique creations, from crispy fried chicken to grilled chicken with spices."
              : "Rasakan pengalaman kuliner yang tak terlupakan dengan ayam paling lezat. Daging ayam berkualitas premium kami diolah dengan bumbu-bumbu pilihan. Nikmati beragam menu ayam dengan kreasi unik kami, mulai dari ayam goreng krispi hingga ayam bakar bumbu rempah."}
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
