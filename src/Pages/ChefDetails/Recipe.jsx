import React, { useEffect, useState } from "react";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Recipe = ({ recipe }) => {
  const { name, picture, ingredients, method, rating } = recipe;
  const [fav, setFav] = useState(false);
  const [clicked, setClicked] = useState(false);

  const notify = () => {
    // toast centered
    toast("Added to Favorite 🧡", {
      position: "top-center",
      autoClose: 1500,
    });
    setClicked(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="card border shadow-md h-full">
        <figure className="p-5">
          <LazyLoadImage
            className="rounded-xl"
            loading="lazy"
            width="100%"
            height="100%"
            src={picture}
            alt=""
          />
          {/* <img src={picture} alt="" className="rounded-xl" /> */}
        </figure>
        <div className="card-body items-center ">
          <h2 className="card-title font-bold text-orange-500"> {name}</h2>
          <div className="md:flex justify-center gap-10">
            <div className="w-6/12">
              <h3 className="text-2xl font-semibold">Ingredients</h3>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li className="list-disc" key={index}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Method</h3>
              <ul>
                {method.map((step, index) => (
                  <li className="list-disc" key={index}>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-evenly items-center gap-10">
            <div className="flex justify-center items-center gap-1">
              <h3 className="text-xl font-semibold">{rating}</h3>
              <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
            </div>
            <div className="flex justify-center items-center gap-2">
              <p className="text-xl font-semibold">Add to Favorite</p>
              <button onClick={() => setFav(!fav)} disabled={clicked}>
                {!fav ? (
                  <FaRegHeart
                    onClick={() => notify()}
                    className="text-red-500 text-2xl"
                  ></FaRegHeart>
                ) : (
                  <FaHeart className="text-red-500 text-2xl"></FaHeart>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
// className="h-[66px] overflow-hidden mb-5"
