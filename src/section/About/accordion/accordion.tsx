import { useState } from "react";
import { TECollapse } from "tw-elements-react";
import { ChevronBottom } from "../../../components/icons/chevron";

export default function AccordionAbout() {
  const [activeElement, setActiveElement] = useState<string>("");

  const handleClick = (value: string): void => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  
  return (
    <div className="rounded-md overflow-hidden shadow-sm shadow-primary/50">
      <div className="bg-light-dark">
        <h2 className="mb-0" id="headingOne">
          <button
            className={`group relative flex w-full items-center rounded-t-[15px] border-0 bg-light-dark px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-gray-100 font-semibold`}
            type="button"
            onClick={() => handleClick("element1")}
            aria-expanded={activeElement === "element1"}
            aria-controls="collapseOne"
          >
            Apakah Cluck n Roll membuka kesempatan untuk franchise atau kemitraan?
            <span
              className={`${
                activeElement === "element1"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529]  dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <ChevronBottom myClass="h-6 w-6 text-primary" />
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element1"}
          className="!mt-0 !rounded-b-none !shadow-none"
        >
          <div className="px-5 py-4 text-gray-200">
            Sangat bisa! Kami membuka kesempatan bagi Anda yang ingin berfranchise atau bermitra dengan Cluck n Roll. Silakan hubungi kami untuk informasi lebih lanjut tentang syarat dan prosedurnya.
          </div>
        </TECollapse>
      </div>
  
      <div className="bg-light-dark">
        <h2 className="mb-0" id="headingTwo">
          <button
            className={`group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none bg-light-dark text-gray-100 font-semibold`}
            type="button"
            onClick={() => handleClick("element2")}
            aria-expanded={activeElement === "element2"}
            aria-controls="collapseTwo"
          >
            Apa saja jenis masakan ayam yang tersedia di Cluck n Roll?
            <span
              className={`${
                activeElement === "element2"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <ChevronBottom myClass="h-6 w-6 text-primary" />
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element2"}
          className="!mt-0 !rounded-b-none !shadow-none"
        >
          <div className="px-5 py-4 text-gray-200">
            Kami menyajikan berbagai olahan ayam, termasuk ayam crispy, ayam bakar, ayam penyet, dan ayam katsu. Semua dibuat dengan bahan berkualitas dan bumbu khas.
          </div>
        </TECollapse>
      </div>
  
      <div className="bg-light-dark">
        <h2 className="mb-0" id="headingThree">
          <button
            className={`group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none bg-light-dark text-gray-100 font-semibold`}
            type="button"
            onClick={() => handleClick("element3")}
            aria-expanded={activeElement === "element3"}
            aria-controls="collapseThree"
          >
            Dimana saja lokasi cabang Cluck n Roll?
            <span
              className={`${
                activeElement === "element3"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <ChevronBottom myClass="h-6 w-6 text-primary" />
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element3"}
          className="!mt-0 !shadow-none"
        >
          <div className="px-5 py-4 text-gray-200">
            Cluck n Roll memiliki banyak cabang di kota-kota besar seperti Jakarta, Bandung, Surabaya, dan lainnya. Cek halaman "Location" di website kami untuk detail alamat lengkap.
          </div>
        </TECollapse>
      </div>
  
      <div className="bg-light-dark">
        <h2 className="mb-0" id="headingFour">
          <button
            className={`group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none bg-light-dark text-gray-100 font-semibold`}
            type="button"
            onClick={() => handleClick("element4")}
            aria-expanded={activeElement === "element4"}
            aria-controls="collapseFour"
          >
            Apakah ada pilihan menu untuk vegetarian?
            <span
              className={`${
                activeElement === "element4"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <ChevronBottom myClass="h-6 w-6 text-primary" />
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element4"}
          className="!mt-0 !shadow-none"
        >
          <div className="px-5 py-4 text-gray-200">
            Saat ini, kami fokus pada menu berbahan dasar ayam. Namun, beberapa menu kami bisa dinikmati dengan tambahan sayuran segar sebagai pendamping.
          </div>
        </TECollapse>
      </div>
  
      <div className="bg-light-dark">
        <h2 className="mb-0" id="headingFive">
          <button
            className={`group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none bg-light-dark text-gray-100 font-semibold`}
            type="button"
            onClick={() => handleClick("element5")}
            aria-expanded={activeElement === "element5"}
            aria-controls="collapseFive"
          >
            Apakah Cluck n Roll menerima pesanan untuk acara catering?
            <span
              className={`${
                activeElement === "element5"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <ChevronBottom myClass="h-6 w-6 text-primary" />
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element5"}
          className="!mt-0 !shadow-none"
        >
          <div className="px-5 py-4 text-gray-200">
            Ya, kami menyediakan layanan catering untuk berbagai acara, baik itu pesta, rapat, atau acara keluarga. Silakan hubungi kami untuk informasi lebih lanjut.
          </div>
        </TECollapse>
      </div>
  
      <div className="bg-light-dark">
        <h2 className="mb-0" id="headingSix">
          <button
            className={`group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none bg-light-dark text-gray-100 font-semibold`}
            type="button"
            onClick={() => handleClick("element6")}
            aria-expanded={activeElement === "element6"}
            aria-controls="collapseSix"
          >
            Apakah ada promo atau diskon yang tersedia?
            <span
              className={`${
                activeElement === "element6"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <ChevronBottom myClass="h-6 w-6 text-primary" />
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element6"}
          className="!mt-0 !shadow-none"
        >
          <div className="px-5 py-4 text-gray-200">
            Kami sering mengadakan promo dan diskon spesial. Anda bisa mengecek halaman promo di website kami atau mengikuti media sosial kami untuk informasi terbaru.
          </div>
        </TECollapse>
      </div>
  
      <div className="bg-light-dark">
        <h2 className="mb-0" id="headingSeven">
          <button
            className={`group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none bg-light-dark text-gray-100 font-semibold`}
            type="button"
            onClick={() => handleClick("element7")}
            aria-expanded={activeElement === "element7"}
            aria-controls="collapseSeven"
          >
            Apa saja metode pembayaran yang diterima?
            <span
              className={`${
                activeElement === "element7"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <ChevronBottom myClass="h-6 w-6 text-primary" />
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element7"}
          className="!mt-0 !shadow-none"
        >
          <div className="px-5 py-4 text-gray-200">
          Kami menerima berbagai metode pembayaran, termasuk tunai, kartu kredit, dan pembayaran digital. Pastikan untuk memilih metode yang paling nyaman bagi Anda saat memesan.
          </div>
        </TECollapse>
      </div>
    </div>
  );
}
