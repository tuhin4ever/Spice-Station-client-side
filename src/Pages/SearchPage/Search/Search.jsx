import React, { useEffect, useState } from "react";

import Card from "../Card/Card";
import LoadingSpinner from "../../../LoadingSpinner.jsx/LoadingSpinner";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [meals, setMeals] = useState([]);

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals));
  };

  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <>
      <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
        <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl mt-5">
          Search Food
        </h1>
        <div className="relative mt-6 mb-12 ">
        <span className='absolute inset-y-0 flex items-center pl-2 mx-auto'>
        <svg
                fill='currentColor'
                viewBox='0 0 512 512'
                className='w-4 h-4 text-gray-900'
              >
                <path d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z'></path>
              </svg>
          </span>
          <input
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSearch();
              }
            }}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-full sm:w-96 py-3 pl-12 text-sm rounded-full  focus:outline-none bg-gray-200 text-gray-800 focus:bg-gray-300"
          />
        </div>
      </div>
      <div>
        {meals.length > 0 ? (
          <div className="grid md:grid-cols-3 my-container">
            {meals.map((meal) => (
              <Card key={meal.idMeal} product={meal}></Card>
            ))}
          </div>
        ) : (
          <p className="text-center font-bold text-xl text-orange-500">
            Please Search Food Name 
          </p>
        )}
      </div>
    </>
  );
};

export default Search;
