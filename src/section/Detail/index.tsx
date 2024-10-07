export default function DetailMenuSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 lg:pt-28 gap-8 lg:gap-16 px-6 lg:px-20">
      <div className="col-span-2 text-gray-100">
        <p className="text-[13px] md:text-base mb-6 md:mb-10 leading-6 md:leading-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          dolore laborum eius ratione blanditiis sed vero ducimus nostrum
          corrupti cupiditate quaerat, possimus voluptatum non sint veniam ex
          dolores suscipit commodi Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas placeat ex rerum mollitia enim natus ab
          adipisci laboriosam labore nulla praesentium, nostrum, similique saepe
          dicta a quaerat ad necessitatibus unde?
        </p>
        <p className="text-[13px] md:text-base mb-6 md:mb-10 leading-6 md:leading-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          dolore laborum eius ratione blanditiis sed vero ducimus nostrum
          corrupti cupiditate quaerat, possimus voluptatum non sint veniam ex
          dolores suscipit commodi Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas placeat ex rerum mollitia enim natus ab
          adipisci laboriosam labore nulla praesentium, nostrum, similique saepe
          dicta a quaerat ad necessitatibus unde?
        </p>
        <p className="text-[13px] md:text-base mb-6 md:mb-10 leading-6 md:leading-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          dolore laborum eius ratione blanditiis sed vero ducimus nostrum
          corrupti cupiditate quaerat, possimus voluptatum non sint veniam ex
          dolores suscipit commodi Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas placeat ex rerum mollitia enim natus ab
          adipisci laboriosam labore nulla praesentium, nostrum, similique saepe
          dicta a quaerat ad necessitatibus unde?
        </p>
      </div>
      <div>
        <div className="bg-light-dark p-8 md:p-10 rounded">
          <img
            src="/locations/resto1.png"
            alt=""
            className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto md:mx-0"
          />
          <h4 className="text-gray-100 font-bold mt-4 text-center md:text-left">
            Taufan Hidayatul Akbar
          </h4>
          <p className="text-gray-100 text-sm mt-4 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            debitis voluptatibus ut laboriosam quibusdam tempore.
          </p>
          <div className="mt-6 md:mt-12 text-center md:text-left">
            <span className="bg-red-500/20 text-red-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
              ingridient
            </span>
            <span className="bg-yellow-500/20 text-yellow-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
              ingridient
            </span>
            <span className="bg-emerald-500/20 text-emerald-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
              ingridient
            </span>
            <span className="bg-purple-500/20 text-purple-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
              ingridient
            </span>
            <span className="bg-blue-500/20 text-blue-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
              ingridient
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
