import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Disaptch an action
    dispatch(addItem(item));
  };
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 font-bold">
              <span>{item.card?.info?.name}</span>
              <span>
                - ₹
                {item.card?.info?.price
                  ? item.card?.info?.price / 100
                  : item.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <span className="py-2 font-bold text-sm text-green-700">
              ★{" "}
              {item.card?.info?.ratings?.aggregatedRating?.rating
                ? item.card?.info?.ratings?.aggregatedRating?.rating
                : 4.5}{" "}
              (
              {item.card?.info?.ratings?.aggregatedRating?.rating?.ratingCountV2
                ? item.card?.info?.ratings?.aggregatedRating?.rating
                    ?.ratingCountV2
                : 100}
              )
            </span>
            <p className="text-xs">{item.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <img
              className="w-full "
              src={CDN_URL + item.card?.info?.imageId}
            ></img>
            <div className="flex">
              <button
                className="font-bold p-4 px-8 mx-16 rounded-lg bg-white-50 text-green-700 shadow-xl"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
