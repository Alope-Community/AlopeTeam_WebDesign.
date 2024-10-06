import { CardReviewProps } from "../../models/GlobalComponentProps";

export default function CardReview({ image, name, review }: CardReviewProps) {
  return (
    <div className="bg-dark p-5 flex flex-col items-center rounded-md text-gray-200">
      <img
        src={`/profile/${image}`}
        alt={`${name}'s picture`}
        className="w-16 h-16 rounded-full mb-4"
      />
      <h6 className="font-bold text-center text-lg">{name}</h6>
      <p className="text-center text-gray-200 mt-5">{review}</p>
    </div>
  );
}
