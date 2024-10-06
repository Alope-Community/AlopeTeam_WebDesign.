// icons
import { ChevronRight } from "../../../components/icons/chevron";
import StarIcon from "../../../components/icons/star";

// models
import { Restaurant } from "../../../models/Resturant";

// tools
import formatToRupiah from "../../../tools/formatRupiah";

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  return (
    <>
      <span className="hidden bg-[url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></span>
      {/* img from unsplash */}
      <div
        className={`h-[350px] xl:h-[400px] rounded-lg w-full bg-cover relative`}
        style={{
          backgroundImage: `url(/locations/${restaurant.img})`,
        }}
      >
        <div className="bg-[#191f25] absolute bottom-1 xl:bottom-5 left-1 xl:left-5 right-1 xl:right-5 p-5 rounded-md">
          <div className="flex gap-1 items-center">
            <StarIcon myClass="text-yellow-400 size-4" />
            <p className="text-yellow-400 text-sm xl:text-base">
              {restaurant.star}
            </p>
            <small className="text-gray-400">
              ({restaurant.totalReview} Review)
            </small>
          </div>
          <p className="xl:text-lg font-semibold text-gray-100">
            {restaurant.name}
          </p>
          <p className="font-medium text-gray-300 mt-3 text-sm xl:text-base">
            {formatToRupiah(restaurant.prices.min)} -{" "}
            {formatToRupiah(restaurant.prices.max)}
          </p>
          <button
            title="See Restaurant"
            aria-label="See Restaurant"
            type="button"
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/80 p-3 rounded-md"
          >
            <ChevronRight myClass="size-4 text-white" />
          </button>
        </div>
      </div>
    </>
  );
}
