import ListType from "./list";

export default function HomeTypeSection() {
  return (
    <section className="grid md:grid-cols-9 justify-between items-center gap-10 bg-light-dark px-20 py-16">
      <div className="col-span-5 relative">
        <img
          className="h-[500px] w-full rounded"
          src="https://www.foodandwine.com/thmb/jJupeS5vHMkh9TBsJkwdaG1uPY8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tamarind-Chicken-FT-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.jpg"
          alt=""
        />

        <div className="bg-primary absolute -left-5 -bottom-5 md:w-[400px] w-full rounded py-5 px-3">
          <h1 className="text-2xl font-medium text-gray-100">Ayam bakar</h1>
          <p className="text-gray-200 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            necessitatibus fugit maxime soluta optio eveniet
          </p>
        </div>
      </div>
      <ListType />
    </section>
  );
}
