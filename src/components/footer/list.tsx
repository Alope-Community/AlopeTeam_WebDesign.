import { ListFooterProps } from "../../models/GlobalComponentProps";
import EnvelopeIcon from "../icons/envelope";
import MarkerIcon from "../icons/marker";
import PhoneIcon from "../icons/phone";

export default function ListContact({ title, description }: ListFooterProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center mb-2 gap-2">
        {title.toLowerCase() == "location" ? (
          <MarkerIcon myClass="size-4 text-gray-100" />
        ) : title.toLowerCase() == "email" ? (
          <EnvelopeIcon myClass="size-4 text-gray-100" />
        ) : title.toLowerCase() == "telepon" ? (
          <PhoneIcon myClass="size-4 text-gray-100" />
        ) : (
          ""
        )}
        <p>{title} :</p>
      </div>
      <p className="text-gray-200">{description}</p>
    </div>
  );
}
