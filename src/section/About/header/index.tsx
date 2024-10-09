export default function HeaderAboutSection() {
  return (
    <section className="px-5 sm:px-20 rounded mt-28 sm:mt-15 lg:mt-5">
      <div className="flex flex-col md:flex-row gap-8 items-center ">
        <div className="w-full md:w-1/2">
          <p className="text-primary sm:text-lg md:text-left text-center mb-2">
            About Us
          </p>
          <h1 className="text-gray-100 text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight text-center md:text-left">
            Makanan Lezat Dan <br />
            Harga Yang Ekonomis
          </h1>
          <p className="md:text-base text-sm text-gray-300 mt-4 text-center md:text-left">
            Cluck n Roll menyajikan aneka olahan ayam berkualitas dengan cita
            rasa khas. Kami berkomitmen memberikan pengalaman kuliner terbaik,
            dengan suasana nyaman dan pelayanan ramah, cocok untuk dinikmati
            bersama keluarga dan teman.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-10 mt-8 text-primary">
            <div className="text-center">
              <h1 className=" font-bold text-4xl">5.0</h1>
              <p className="text-gray-200">Rating & Reviews</p>
            </div>
            <div className="text-center">
              <h1 className=" font-bold text-4xl">350+</h1>
              <p className="text-gray-200">Dishes we have</p>
            </div>
            <div className="text-center">
              <h1 className=" font-bold text-4xl">50+</h1>
              <p className="text-gray-200">Total Cuisine</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center gap-5 md:relative min-h-[600px]">
            <img
              className="md:absolute top-12 left-0 rounded w-96 sm:w-80 md:w-56 lg:w-96 h-96 sm:h-[400px] md:h-[450px] lg:h-[450px] object-cover lg:mt-10"
              src={`/about/chefmain.png`}
              alt="Chef at work"
            />
            <img
              className="md:absolute bottom-0 right-0 rounded w-96 sm:w-80 md:w-56 lg:w-80 h-72 sm:h-[350px] lg:h-[400px] object-cover"
              src={`/about/menudisplay.png`}
              alt="Dish"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
