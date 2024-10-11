import { Link, useSearchParams } from "react-router-dom";
//
import { Title } from "../text";
import ListContact from "./list";
//
import contact from "../../data/contact.json";

export default function Footer() {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "en";

  return (
    <footer className="bg-light-dark px-5 md:px-10 xl:px-20 pt-10 pb-5 mt-20">
      <div className="md:grid grid-cols-2 xl:grid-cols-5 gap-5">
        <div className="md:col-span-2 mb-10">
          <Title text="ClucknRoll" />
          <p className="mt-5 text-sm text-gray-200">
            Kami menyajikan berbagai masakan ayam yang berkualitas
            <br /> dengan rasa autentik dan bahan-bahan segar yang <br /> selalu
            terjamin, siap memanjakan lidah Anda.
          </p>

          <p className="text-gray-200 mt-5">
            <span className="text-primary font-medium">Working Hour</span>:
            08:00 AM - 17:00 PM
          </p>

          <div className="mt-7 bg-[#0e1317] px-5 py-3 rounded inline-block">
            <p className="text-white mb-3 text-sm">Switch Language</p>
            <div className="flex gap-4 items-center">
              <Link
                to={"?lang=en"}
                className={
                  lang == "en" ? "border-4 border-primary rounded-full" : ""
                }
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src="/logo/us.svg"
                  alt="US flag img from flat icon"
                  width={35}
                  height={35}
                />
              </Link>
              <Link
                to={"?lang=id"}
                className={
                  lang == "id" ? "border-4 border-primary rounded-full" : ""
                }
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src="/logo/indonesia.svg"
                  alt="Indonesia flag img from flat icon"
                  width={35}
                  height={35}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-gray-100 mb-10">
          <h4 className="font-semibold text-xl mb-4">Contact us</h4>
          {contact.map((contact, index) => (
            <ListContact
              key={index}
              title={contact.title}
              description={contact.description}
            />
          ))}
        </div>
        <div className="xl:col-span-2">
          <p className="font-semibold text-xl pb-4 text-gray-100">
            Follow us on Instagram
          </p>
          <div className="grid grid-cols-3 gap-3">
            <div className="relative rounded-md cursor-pointer overflow-hidden group after:content-[''] hover:after:bg-black/20 after:absolute after:inset-0 h-[100px]">
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs z-10">
                <span className="text-center inline-block">
                  <img
                    src="/logo/instagram.svg"
                    alt="logo instaram from pngwing"
                    className="mx-auto w-[40px] object-cover"
                    width={40}
                    height={40}
                  />
                  <p className="-mt-1">See on Instagram</p>
                </span>
              </div>
              {/* https://unsplash.com/photos/selective-focus-photography-of-hamburger-with-sliced-tomatoes-and-vegetables-_TLKIVSW6Do */}
              <img
                src="/locations/resto1.jpg"
                alt="burger from unsplash"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-md cursor-pointer overflow-hidden group after:content-[''] hover:after:bg-black/20 after:absolute after:inset-0 h-[100px]">
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs z-10">
                <span className="text-center inline-block">
                  <img
                    src="/logo/instagram.svg"
                    alt="logo instaram from pngwing"
                    className="mx-auto w-[40px] h-full object-cover"
                  />
                  <p className="-mt-1">See on Instagram</p>
                </span>
              </div>
              {/* https://unsplash.com/photos/pizza-on-chopping-board-MqT0asuoIcU */}
              <img
                src="/locations/resto3.png"
                alt="pizza from unsplash"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-md cursor-pointer overflow-hidden group after:content-[''] hover:after:bg-black/20 after:absolute after:inset-0 h-[100px]">
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs z-10">
                <span className="text-center inline-block">
                  <img
                    src="/logo/instagram.svg"
                    alt="logo instaram from pngwing"
                    className="mx-auto w-[40px] object-cover"
                    width={40}
                    height={40}
                  />
                  <p className="-mt-1">See on Instagram</p>
                </span>
              </div>
              {/* https://unsplash.com/photos/burger-on-black-plate-beside-gray-stainless-steel-dining-fork-YuKwHTNVAiI */}
              <img
                src="/locations/resto6.png"
                alt="hotdog from unsplash"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-md cursor-pointer overflow-hidden group after:content-[''] hover:after:bg-black/20 after:absolute after:inset-0 h-[100px]">
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs z-10">
                <span className="text-center inline-block">
                  <img
                    src="/logo/instagram.svg"
                    alt="logo instaram from pngwing"
                    className="mx-auto w-[40px] object-cover"
                    width={40}
                    height={40}
                  />
                  <p className="-mt-1">See on Instagram</p>
                </span>
              </div>
              {/* https://unsplash.com/photos/a-person-is-cooking-food-on-a-grill-okLhhXJlFaA */}
              <img
                src="/locations/resto10.png"
                alt="BBQ from unsplash"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-md cursor-pointer overflow-hidden group after:content-[''] hover:after:bg-black/20 after:absolute after:inset-0 h-[100px]">
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs z-10">
                <span className="text-center inline-block">
                  <img
                    src="/logo/instagram.svg"
                    alt="logo instaram from pngwing"
                    className="mx-auto w-[40px] object-cover"
                    width={40}
                    height={40}
                  />
                  <p className="-mt-1">See on Instagram</p>
                </span>
              </div>
              {/* https://unsplash.com/photos/close-up-photo-of-cooked-food-on-square-white-plate-auIbTAcSH6E */}
              <img
                src="/locations/resto8.png"
                alt="beef from unsplash"
                className="w-full h-full object-cover"
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
