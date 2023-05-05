import React from "react";
import { FaConciergeBell, FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const SingleChef = ({ chef }) => {
  // console.log(chef);
  const {
    id,
    name,
    picture_chef,
    years_of_experience,
    likes,
    num_recipes,
    location,
  } = chef;
  return (
    <div>
      <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-2">
        <LazyLoadImage
          className="rounded-t-lg"
          loading="lazy"
          width="100%"
          height="100%"
          src={picture_chef}
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold ">{name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {years_of_experience} Years of experience
          </p>
          <p className="flex items-center gap-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
            <FaConciergeBell></FaConciergeBell> {num_recipes} Recipes
          </p>
          <p className="flex items-center gap-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
            <FaMapMarkerAlt></FaMapMarkerAlt> {location}
          </p>
          <div className="flex justify-between">
            <Link to={`/chef/${id}`}>
              <button className="my-btn">View Recipes</button>
            </Link>
            <div className="flex gap-2 items-center">
              <FaRegHeart className="text-red-600"></FaRegHeart>
              <span className="text-gray-700">{likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
