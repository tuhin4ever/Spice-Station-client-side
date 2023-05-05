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
        <div className="relative mt-6 mb-12 fl">
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-full sm:w-96 py-3 pl-12 text-sm rounded-full  focus:outline-none bg-gray-200 text-gray-800 focus:bg-gray-300"
          />
          <button onClick={handleSearch} className="my-btn ml-2 flex gap-2">
            <FaSearch />
            Search
          </button>
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
