export default function LocationAboutSection() {
    return (
      <section className="mx-5 md:mx-20 bg-light-dark rounded mt-10">
        <div className="flex flex-col md:flex-row gap-8 items-center p-5 min-h-screen">
          <div className="w-full md:w-1/2">
            <p className="text-primary sm:text-lg md:text-left text-center mb-2">
              About Us
            </p>
            <h1 className="text-gray-100 text-3xl sm:text-5xl xl:text-6xl font-bold leading-tight text-center md:text-left">
              Mouthwateringly Delicious Food
              <br /> On Low Budget & Calories
            </h1>
            <p className="md:text-lg text-base text-gray-300 mt-4 text-center md:text-left">
              Calories conscious or not, we have food choices that make you drool
              and keep you healthy simultaneously. We create vegan dishes and cool
              non-alcoholic drinks too.
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
                className="md:absolute top-0 left-0 rounded w-full md:w-56 lg:w-96 h-72 md:h-[400px] lg:h-[450px] object-contain"
                src={`/about/chefmain.png`}
                alt="Chef at work"
              />
              <img
                className="md:absolute bottom-0 right-0 rounded w-full md:w-56 lg:w-80 h-72 md:h-[350px] lg:h-[400px] object-contain"
                src={`/about/menudisplay.png`}
                alt="Dish"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  