import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({
  data,
  showItems,
  setShowIndex,
  index,
  showIndex,
}) => {
  const handleClick = () => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  const icon = index === showIndex ? "🔼" : "🔽";
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 shadow-lg bg-gray-50">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>{icon}</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
