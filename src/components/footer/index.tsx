import React from "react";
import { Title } from "../text";
import ListContact from "./list";

import contact from "../../data/contact.json";

export default function HomeFooterSection() {
  return (
    <footer className="bg-light-dark px-20 pt-10 pb-5">
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-2">
          <Title text="ClucknRoll" />
          <p className="mt-5 text-sm text-gray-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            obcaecati aliquid odit placeat. Vero tenetur nisi vitae laboriosam
            provident dicta?
          </p>

          <p className="text-gray-200 mt-5">
            <span className="text-primary font-medium">Working Hour</span>:
            3424356 67r
          </p>
        </div>
        <div className="text-gray-200">
          <h4 className="text-primary font-semibold text-xl pb-4">
            Contact us
          </h4>
          {contact.map((contact, index) => (
            <ListContact
              key={index}
              title={contact.title}
              description={contact.description}
            />
          ))}
        </div>
        <div className="col-span-2">
          <h4 className="text-primary font-semibold text-xl pb-4">Galery</h4>
          <div className="grid grid-cols-3 gap-3">
            <div className="h-28 group relative after:content-[''] after:absolute after:inset-0 after:bg-black/25 after:z-50 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 after:ease-in-out rounded overflow-hidden">
              <span className="group-hover:block hidden text-primary absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-1/2">
                See on IG
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Jakarta_Indonesia_National-Monument-02.jpg/1200px-Jakarta_Indonesia_National-Monument-02.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-28 group relative after:content-[''] after:absolute after:inset-0 after:bg-black/25 after:z-50 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 after:ease-in-out rounded overflow-hidden">
              <span className="group-hover:block hidden text-primary absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-1/2">
                See on IG
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Jakarta_Indonesia_National-Monument-02.jpg/1200px-Jakarta_Indonesia_National-Monument-02.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-28 group relative after:content-[''] after:absolute after:inset-0 after:bg-black/25 after:z-50 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 after:ease-in-out rounded overflow-hidden">
              <span className="group-hover:block hidden text-primary absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-1/2">
                See on IG
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Jakarta_Indonesia_National-Monument-02.jpg/1200px-Jakarta_Indonesia_National-Monument-02.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-28 group relative after:content-[''] after:absolute after:inset-0 after:bg-black/25 after:z-50 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 after:ease-in-out rounded overflow-hidden">
              <span className="group-hover:block hidden text-primary absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-1/2">
                See on IG
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Jakarta_Indonesia_National-Monument-02.jpg/1200px-Jakarta_Indonesia_National-Monument-02.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-28 group relative after:content-[''] after:absolute after:inset-0 after:bg-black/25 after:z-50 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 after:ease-in-out rounded overflow-hidden">
              <span className="group-hover:block hidden text-primary absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-1/2">
                See on IG
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Jakarta_Indonesia_National-Monument-02.jpg/1200px-Jakarta_Indonesia_National-Monument-02.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-10">
        <hr className="border-gray-500" />
        <p className="text-gray-100 text-sm mt-5">
          CopyRight ClucknRoll. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
