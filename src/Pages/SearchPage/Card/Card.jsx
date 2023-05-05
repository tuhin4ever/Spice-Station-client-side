import React, { useState } from "react";
import {
  FaChevronRight,
  FaCubes,
  FaDollarSign,
  FaLocationArrow,
  FaMapPin,
} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "react-toastify";

const Card = (props) => {
  const [clicked, setClicked] = useState(false);
  //   console.log(props.product);
  const { strMealThumb, strMeal, strCategory, strTags, strArea, idMeal } =
    props.product;

  const notify = () => {
    // toast centered
    toast("Order placed successfully 🔥", {
      position: "top-center",
      autoClose: 1500,
    });
    setClicked(true);
  };

  return (
    <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-2">
      <LazyLoadImage
        className="rounded-t-lg"
        loading="lazy"
        width="100%"
        height="100%"
        src={strMealThumb}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold ">{strMeal}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex gap-2 items-center">
          <FaMapPin /> Tags: {strTags ? strTags : "No Tags"}
        </p>
        <p className="flex items-center gap-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
          <FaCubes /> Category: {strCategory}
        </p>
        <p className="flex items-center gap-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
          <FaLocationArrow /> Dish Area : {strArea}
        </p>
        <div className="flex justify-between">
          <button
            className="my-btn"
            disabled={clicked}
            onClick={() => notify()}
          >
            Order Now <FaChevronRight />
          </button>

          <div className="flex gap-2 items-center">
            <FaDollarSign className="text-green-600" />
            <span className="text-gray-700">{idMeal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
