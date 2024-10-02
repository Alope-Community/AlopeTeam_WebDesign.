import React from "react";
import { Title } from "../../../components/text";

export default function HomeFooterSection() {
  return (
    <footer className="bg-light-dark px-20 py-10">
      <div className="grid grid-cols-6 gap-16">
        <div className="col-span-2">
          <Title text="ClucknRoll" />
          <p className="pt-10 text-gray-100">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            obcaecati aliquid odit placeat. Vero tenetur nisi vitae laboriosam
            provident dicta?
          </p>
        </div>
        <div className="text-gray-200">
          <h4 className="text-primary font-semibold text-xl pb-4">
            Working Hours
          </h4>
          <ul className="list-disc">
            <li className="text-gray-100 font-medium mb-2">
              Sunday - Thursday
            </li>
            <p className="pb-3">08:00 am - 09:00 pm</p>
            <li className="text-gray-100 font-medium mb-2">only friday</li>
            <p>08:00 am - 09:00 pm</p>
          </ul>
        </div>
        <div className="text-gray-200">
          <h4 className="text-primary font-semibold text-xl pb-4">
            contact us
          </h4>
          <div className="mb-4">
            <div>
              <div className="flex items-center mb-2 gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-gray-100"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-gray-100 font-medium">location : </p>
              </div>
              <p>Kuningan - jabar</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <div className="flex items-center mb-2 gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-gray-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-gray-100 font-medium">Email : </p>
              </div>
              <p>clucknroll@gmail.com</p>
            </div>
          </div>

          <div className="mb-4">
            <div>
              <div className="flex items-center mb-2 gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-gray-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-100 font-medium">phone : </p>
              </div>
              <p>0812334567789</p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <h4 className="text-primary font-semibold text-xl pb-4">galery</h4>
          <div className="grid grid-cols-3 gap-3">
            <div className="h-28 group relative after:content-[''] after:absolute after:inset-0 after:bg-black/25 after:z-50 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 after:ease-in-out">
              <span className="group-hover:block hidden text-primary absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-1/2">
                See on IG
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Jakarta_Indonesia_National-Monument-02.jpg/1200px-Jakarta_Indonesia_National-Monument-02.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-28 group relative after:content-[''] after:absolute after:inset-0 after:bg-black/25 after:z-50 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 after:ease-in-out">
              <span className="group-hover:block hidden text-primary absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-1/2">
                See on IG
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Jakarta_Indonesia_National-Monument-02.jpg/1200px-Jakarta_Indonesia_National-Monument-02.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-28 group relative after:content-[''] after:absolute after:inset-0 after:bg-black/25 after:z-50 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 after:ease-in-out">
              <span className="group-hover:block hidden text-primary absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-1/2">
                See on IG
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Jakarta_Indonesia_National-Monument-02.jpg/1200px-Jakarta_Indonesia_National-Monument-02.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-28 group relative after:content-[''] after:absolute after:inset-0 after:bg-black/25 after:z-50 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 after:ease-in-out">
              <span className="group-hover:block hidden text-primary absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-1/2">
                See on IG
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Jakarta_Indonesia_National-Monument-02.jpg/1200px-Jakarta_Indonesia_National-Monument-02.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-28 group relative after:content-[''] after:absolute after:inset-0 after:bg-black/25 after:z-50 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 after:ease-in-out">
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
        <hr className="pb-5 text-gray-100" />
        <p className="text-gray-100">
          CopyRight ClucknRoll. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
