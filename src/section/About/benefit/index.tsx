// globals component
import { Subtitle, Title } from "../../../components/text";

// component
import BenefitCard from "./card";

// icons
import LikeIcon from "../../../components/icons/like";
import MegaphoneIcon from "../../../components/icons/megaphone";
import MoneyIcon from "../../../components/icons/money";
import ShieldIcon from "../../../components/icons/shield";

export default function BenefitSectionAbout({ lang }: { lang: string }) {
  return (
    <section
      id="benefit"
      className="bg-light-dark mt-20 scroll-mt-20 py-20 xl:px-20 md:px-10 px-5"
    >
      <div className="text-center">
        <Subtitle
          text={
            lang == "en"
              ? "SPECIAL BENEFITS FOR YOU"
              : "BENEFIT SPESIAL UNTUK ANDA"
          }
        />
        <Title
          text={
            lang == "en"
              ? "Why Sould You Choose Us?"
              : "Kenapa Anda Harus Memilih Kami?"
          }
        />
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 mt-10">
        <BenefitCard
          title={lang == "en" ? "Extra Discounts" : "Diskon Ekstra"}
          description={
            lang == "en"
              ? "Get your special discount by using our reservation"
              : "Dapatkan diskon spesial Anda dengan menggunakan reservasi kami"
          }
          icon={<MegaphoneIcon myClass="size-8 text-white" />}
        />
        <BenefitCard
          title={lang == "en" ? "Come and Eat" : "Datang & Makan"}
          description={
            lang == "en"
              ? "Get your own table quickly & without waiting in line"
              : "Dapatkan meja Anda sendiri dengan cepat & tanpa mengantri"
          }
          icon={<LikeIcon myClass="size-8 text-white" />}
        />
        <BenefitCard
          title={lang == "en" ? "No Extra Fee" : "Tanpa Biaya Tambahan"}
          description={
            lang == "en"
              ? "Get tax free if you want to order food and make a reservation"
              : "Dapatkan bebas pajak jika ingin memesan makanan dan melakukan reservasi"
          }
          icon={<MoneyIcon myClass="size-8 text-white" />}
        />
        <BenefitCard
          title={lang == "en" ? "Guaranteed Cleanlines" : "Kebersihan Terjamin"}
          description={
            lang == "en"
              ? "We ensure the cleanliness of the place as well as the food"
              : "Kami menjamin kebersihan tempat dan juga makanannya"
          }
          icon={<ShieldIcon myClass="size-8 text-white" />}
        />
      </div>
    </section>
  );
}
