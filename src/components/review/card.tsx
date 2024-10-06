import { CardReviewProps } from "../../models/GlobalComponentProps";

export default function CardReview({ image, name, review }: CardReviewProps) {
  return (
    <div className="shadow-primary/40 shadow-sm bg-dark px-5 py-8 flex flex-col items-center rounded-md text-gray-200">
      <img
        src={`/profile/${image}`}
        alt={`${name}'s picture`}
        className="w-16 h-16 rounded-full mb-4 border-4 border-primary"
      />
      <h6 className="font-bold text-center text-lg">{name}</h6>
      <p className="text-center text-gray-200 mt-3">{review}</p>
    </div>
  );
}
