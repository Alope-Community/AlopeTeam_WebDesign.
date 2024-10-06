import { HeaderComponentProps } from "../../models/GlobalComponentProps";
import { Subtitle, Title } from "../text";

export default function Header({
  title,
  subtitle,
  description,
  img,
}: HeaderComponentProps) {
  return (
    <section
      id="motto"
      className="relative z-10 flex items-center justify-between h-[600px] after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:-z-10"
    >
      <div className="w-full md:w-1/2 pl-5 md:pl-10 xl:pl-20 pr-5 md:pr-0 md:text-left text-center">
        <Subtitle text={subtitle} />
        <Title text={title} />
        <p className="text-gray-200 mt-5">{description}</p>
      </div>
      <div className="h-full overflow-hidden w-1/2 md:block hidden">
        <img
          src={img}
          alt="pasta from unsplash"
          className="w-full h-full object-cover md:object-pastaMD xl:object-pastaXL"
          style={{
            maskImage: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
          width={"auto"}
          height={"auto"}
        />
      </div>
    </section>
  );
}
