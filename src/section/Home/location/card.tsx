import { CardLocationProps } from "../../../models/GlobalComponentProps";

export default function CardLocations({ name, image }: CardLocationProps) {
  return (
    <div className="relative group overflow-hidden">
      <img
        src={image}
        alt=""
        className="h-full w-full transform transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <p className="text-xl font-bold bg-black/50 flex items-center justify-center text-gray-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full">
        {name}
      </p>
    </div>
  );
}
