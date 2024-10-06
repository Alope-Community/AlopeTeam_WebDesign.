import Button from "../button";

export default function InviteReservation() {
  return (
    <section className="relative z-10 px-5 md:px-10 xl:px-20 flex md:flex-row flex-col gap-10 items-center justify-center md:justify-between h-[250px] bg-[url(https://images.unsplash.com/photo-1634234498573-29224acf2907?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center -mb-20 mt-14 after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:-z-10">
      <div className="md:text-left text-center">
        <p className="font-medium text-xl md:text-2xl text-primary uppercase">
          {"Tertarik Pesan?"}
        </p>
        <h1 className="text-4xl lg:text-5xl text-white font-bold">
          {"Rasakan Rajanya Ayam"}
        </h1>
      </div>
      <div>
        <Button text={"Reservasi"} to="/reservation" />
      </div>
    </section>
  );
}
