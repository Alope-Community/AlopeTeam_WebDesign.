import { useState, useEffect } from "react";
import { CardMenuProps } from "../../models/GlobalComponentProps";

export default function CardMenu({ item, isActive, onClick }: CardMenuProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  return (
    <div
      className="bg-light-dark border border-gray-800 shadow-sm shadow-primary/60 rounded-lg transition cursor-pointer h-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {!isActive && !isHovered ? (
        <div className="m-5">
          <img
            src={`/menus/${item.image}`}
            alt={item.name}
            className="w-full h-60 object-contain rounded-md mb-6 mt-16"
          />
          <h3 className="text-lg text-gray-100 font-semibold mb-2">
            {item.name}
          </h3>
          <p className="text-sm text-gray-200">{item.ingredients}</p>
          <p className="text-sm text-gray-200">{item.tag}</p>
        </div>
      ) : (
        <div className="bg-dark p-4 rounded-lg m-5">
          <h1 className="text-xl font-bold text-primary">Nutrition Facts</h1>
          <h6 className="text-lg mb-2 border-b border-gray-800 pb-2 text-gray-200">
            {item.name}
          </h6>
          <div className="grid grid-cols-2 gap-2 text-gray-300">
            <p>Calories</p>
            <p className="text-right font-bold">{item.nutritions.calories}</p>

            <p>Protein</p>
            <p className="text-right font-bold">{item.nutritions.protein}</p>

            <p>Total Fat</p>
            <p className="text-right font-bold">{item.nutritions.total_fat}</p>

            <p>Saturated Fat</p>
            <p className="text-right font-bold">
              {item.nutritions.saturated_fat}
            </p>

            <p>Sodium</p>
            <p className="text-right font-bold">{item.nutritions.sodium}</p>

            <p>Net Carbs</p>
            <p className="text-right font-bold">{item.nutritions.net_carbs}</p>

            <p>Sugars</p>
            <p className="text-right font-bold">{item.nutritions.sugars}</p>

            <p>Dietary Fiber</p>
            <p className="text-right font-bold">
              {item.nutritions.dietary_fiber}
            </p>

            <p>Total Carbs</p>
            <p className="text-right font-bold">
              {item.nutritions.total_carbs}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
