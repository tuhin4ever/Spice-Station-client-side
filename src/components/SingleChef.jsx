import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";


const SingleChef = ({ chef }) => {
  const { id, name, picture, description, likes } = chef;
  return (
    <div>
      <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow p-2">
        <LazyLoadImage
          className="rounded-t-lg"
          loading="lazy"
          width="100%"
          height="100%"
          src={picture}
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold ">{name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="flex justify-between">
            <Link
              to={`/chef/${id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
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
