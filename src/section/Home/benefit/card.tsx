import { CardBenefitProps } from "../../../models/GlobalComponentProps";

export default function CardBenefit({ title, image }: CardBenefitProps) {
  return (
    <div className="bg-light-dark shadow-primary/40 shadow-sm rounded-lg p-6 flex flex-col items-center justify-center w-full sm:w-72 lg:w-64">
      <div className="mb-4">
        <img
          className="h-20 w-20 object-contain"
          src={`/menus/${image}`}
          alt={title}
        />
      </div>
      <p className="text-center text-xl font-semibold text-gray-100 mt-2">
        {title}
      </p>
    </div>
  );
}
