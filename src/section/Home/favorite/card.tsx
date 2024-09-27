import { CardMenuProps } from "../../../models/GlobalComponentProps";

export default function CardFavorite({
  image,
  name,
  description,
}: CardMenuProps) {
  return (
    <div className="max-w-sm rounded bg-white w-1/3">
      <div className="border-2 border-orange-600 m-5 relative flex justify-center">
        <img className="h-64 absolute -top-24 object-contain" src={image} alt={name} />
        <div className="p-6 mt-36 ">
          <p className="text-center text-3xl font-semibold text-black">{name}</p>
          <p className="text-center font-semibold text-black">{description}</p>
        </div>
      </div>
    </div>
  );
}
