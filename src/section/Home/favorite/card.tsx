import { CardFavoriteProps } from "../../../models/GlobalComponentProps";

export default function CardFavorite({
  image,
  title,
  description,
}: CardFavoriteProps) {
  return (
    <div className="max-w-sm rounded-md bg-light-dark md:w-1/2 lg:w-1/3 my-10">
      <div className="border-2 border-primary m-5 relative flex justify-center rounded-md">
        <img
          className="h-48 lg:h-64 absolute -top-24 object-contain"
          src={`/menus/${image}`}
          alt={title}
        />
        <div className="p-6 mt-20 lg:mt-36">
          <p className="text-center text-3xl font-semibold text-gray-100">
            {title}
          </p>
          <p className="text-center text-gray-200 mt-3">{description}</p>
        </div>
      </div>
    </div>
  );
}
