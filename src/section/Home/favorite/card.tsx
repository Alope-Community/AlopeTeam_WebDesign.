import { CardMenuProps } from "../../../models/GlobalComponentProps";

export default function CardFavorite({
  image,
  name,
  description,
}: CardMenuProps) {
  return (
    <div className="max-w-sm rounded bg-white md:w-1/2 lg:w-1/3 my-10">
      <div className="border-2 border-orange-600 m-5 relative flex justify-center">
        <img className="h-48 lg:h-64 absolute -top-24 object-contain" src={image} alt={name} />
        <div className="p-6 mt-20 lg:mt-36">
          <p className="text-center text-3xl font-semibold text-black">{name}</p>
          <p className="text-center font-semibold text-black">{description}</p>
        </div>
      </div>
    </div>
  );
}
