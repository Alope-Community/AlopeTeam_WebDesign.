import { Subtitle, Title } from "../text";

export default function Header() {
  return (
    <section
      id="motto"
      className="relative z-10 flex items-center justify-between h-[600px] after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:-z-10"
    >
      <div className="w-full md:w-1/2 pl-5 md:pl-10 xl:pl-20 pr-5 md:pr-0 md:text-left text-center">
        <Subtitle text="Our Restaurant" />
        <Title text={"Nikmati Makan di Restoran Terbaik"} />
        <p className="text-gray-200 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          ipsum quibusdam perferendis corporis omnis vero accusantium numquam
          quasi sit? Excepturi maiores laudantium molestias illo error dicta
          officiis dolor soluta eum?
        </p>
      </div>
      <div className="h-full overflow-hidden w-1/2 md:block hidden">
        <img
          src="https://images.unsplash.com/photo-1497644083578-611b798c60f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
