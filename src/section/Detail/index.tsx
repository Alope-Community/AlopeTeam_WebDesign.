import React from "react";

export default function DetailMenuSection() {
  return (
    <section className="grid grid-cols-3 pt-28 gap-16 px-20">
      <div className="col-span-2 min-h-screen text-gray-100">
        <p className="md:text-base text-[13px] mb-10 leading-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          dolore laborum eius ratione blanditiis sed vero ducimus nostrum
          corrupti cupiditate quaerat, possimus voluptatum non sint veniam ex
          dolores suscipit commodi Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas placeat ex rerum mollitia enim natus ab
          adipisci laboriosam labore nulla praesentium, nostrum, similique saepe
          dicta a quaerat ad necessitatibus unde?
        </p>
        <p className="md:text-base text-[13px] mb-10 leading-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          dolore laborum eius ratione blanditiis sed vero ducimus nostrum
          corrupti cupiditate quaerat, possimus voluptatum non sint veniam ex
          dolores suscipit commodi Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas placeat ex rerum mollitia enim natus ab
          adipisci laboriosam labore nulla praesentium, nostrum, similique saepe
          dicta a quaerat ad necessitatibus unde?
        </p>
        <p className="md:text-base text-[13px] mb-10 leading-8">
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
        <div className="bg-light-dark p-10 rounded">
          <img
            src="/locations/resto1.png"
            alt=""
            className="w-20 h-20 rounded-full"
          />
          <h4 className="text-gray-100 font-bold mt-4">
            Taufan Hidayatul Akbar
          </h4>
          <p className="text-gray-100 text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            debitis voluptatibus ut laboriosam quibusdam tempore.
          </p>
          <div className="mt-12">
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
