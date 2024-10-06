import { CardReviewProps } from "../../../models/GlobalComponentProps";

export default function CardReviews({
  image,
  name,
  purchase,
  review,
}: CardReviewProps) {
  return (
    <div className="bg-light-dark p-5 flex flex-col items-center rounded text-gray-200">
      <img
        src={`/profile/${image}`}
        alt={`${name}'s picture`}
        className="w-16 h-16 rounded-full mb-4"
      />
      <h6 className="font-bold text-center text-lg">{name}</h6>
      <p className="text-center mb-2">Payout: {purchase}</p>
      <p className="text-center">{review}</p>
    </div>
  );
}
