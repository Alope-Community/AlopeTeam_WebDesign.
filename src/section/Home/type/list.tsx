import menuTypes from "../../../data/menuTypes.json";

export default function ListType() {
  return (
    <div className="px-5 py-10 col-span-4">
      <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-5 md:text-left text-center">
        THE TYPE OF CHICKEN
      </h2>
      <div className="space-y-8 md:text-left text-center">
        {menuTypes.map((type, index) => (
          <div key={index} className="md:flex items-center space-x-5">
            <div className="w-20 h-20 flex-shrink-0 relative mx-auto md:mx-0">
              <img
                src={`/menus/${type.image}`}
                alt={type.description}
                className="w-full h-full object-contain"
              />
              <p className="text-xl font-bold bg-black/50 flex items-center justify-center text-gray-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full">
                {type.name}
              </p>
            </div>
            <div>
              <div className="text-gray-200">{type.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
