export default function DetailMenuSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 lg:pt-28 gap-8 lg:gap-16 px-6 lg:px-20">
      <div className="col-span-2 text-gray-100">
        <p className="text-[13px] md:text-base mb-6 md:mb-10 leading-6 md:leading-8">
          Sebagai CEO dari Prime Chicken, saya dengan bangga menyatakan bahwa
          cabang kami di Surabaya telah mencapai standar tertinggi dalam hal
          kualitas makanan dan layanan. Kami selalu memastikan setiap hidangan
          yang kami sajikan dipersiapkan dengan bahan-bahan terbaik dan resep
          autentik yang telah diwariskan selama bertahun-tahun. Tidak hanya dari
          kami, hasil testimoni pelanggan pun menyebutkan bahwa cita rasa ayam
          di cabang ini tak tertandingi, dengan banyak yang memuji kelezatan
          serta kerenyahan ayam kami.
        </p>
        <p className="text-[13px] md:text-base mb-6 md:mb-10 leading-6 md:leading-8">
          Saya yakin, cabang Prime Chicken di Surabaya menjadi yang terbaik
          karena komitmen kami yang kuat terhadap kepuasan pelanggan. Testimoni
          dari pelanggan kami juga membuktikan hal tersebut, dengan banyak yang
          menyatakan bahwa mereka selalu kembali karena kualitas makanan yang
          konsisten dan pelayanan yang luar biasa. Kepercayaan yang diberikan
          pelanggan adalah motivasi terbesar kami untuk terus menjadi yang
          terdepan dalam industri ini.
        </p>
      </div>
      <div>
        <div className="bg-light-dark p-8 md:p-10 rounded">
          <img
            src="/profile/1.svg"
            alt=""
            className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto md:mx-0"
          />
          <h4 className="text-gray-100 font-bold mt-4 text-center md:text-left">
            Taufan Hidayatul Akbar
          </h4>
          <p className="text-gray-100 text-sm mt-4 text-center md:text-left">
            Sebagai CEO, Founder Cluck n Roll, sekaligus Manager Cabang
            Surabaya, saya berkomitmen menyajikan hidangan ayam berkualitas
            tinggi dan pengalaman bersantap terbaik bagi pelanggan.
          </p>
          <div className="mt-6 md:mt-12 text-center md:text-left">
            <span className="bg-red-500/20 text-red-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
              CEO And Founder
            </span>
            <span className="bg-yellow-500/20 text-yellow-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
              Manager Surabaya
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
