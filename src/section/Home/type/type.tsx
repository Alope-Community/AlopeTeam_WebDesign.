import chickenType from "../../../data/chickenType.json";

export default function ArtType() {
  return (
    <div className="px-5 py-10">
      <h1 className="text-3xl font-bold text-red-500 mb-5">
        THE TYPE OF CHICKEN
      </h1>
      <div className="space-y-8">
        {chickenType.map((type, index) => (
          <div key={index} className="flex items-start space-x-5">
            <div className="w-20 h-20 flex-shrink-0">
              <img
                src={type.image}
                alt={type.description}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-xl font-bold text-red-500 ">{type.name}</div>
            <div>
              <div className="text-gray-700">{type.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
