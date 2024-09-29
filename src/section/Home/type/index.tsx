import ListType from "./list";

export default function HomeTypeSection() {
  return (
    <section className="grid grid-cols-9 justify-between items-center gap-10 bg-light-dark px-20 py-16">
      <div className="col-span-5">
        <img
          className="h-[500px] w-full rounded"
          src="https://www.foodandwine.com/thmb/jJupeS5vHMkh9TBsJkwdaG1uPY8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tamarind-Chicken-FT-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.jpg"
          alt=""
        />
      </div>
      <ListType />
    </section>
  );
}
