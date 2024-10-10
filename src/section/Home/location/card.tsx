import Button from "../../../components/button";
import { CardLocationProps } from "../../../models/GlobalComponentProps";

export default function CardLocations({
  title,
  subtitle,
  image,
}: CardLocationProps) {
  return (
    <div className="relative group overflow-hidden">
      <img
        src={image}
        alt={title ? title : "Location image"}
        className="h-full w-full transform transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="font-bold bg-black/50 flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full">
        <div className="text-center">
          <p className="text-gray-100 text-xl">{title}</p>
          {subtitle && (
            <p
              className="text-gray-200 text-base font-normal"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            ></p>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button text="View" to="/location" />
          </div>
        </div>
      </div>
    </div>
  );
}
