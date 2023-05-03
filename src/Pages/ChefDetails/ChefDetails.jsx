import React from "react";
import { FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";


const ChefDetails = () => {
  const chef = useLoaderData();
  const {
    
    name,
    picture_chef,
    description,
    likes,
    num_recipes,
    years_of_experience,
    recipes,
  } = chef;
  console.log(recipes);
  return (
    <>
      <div className="w-9/12 mx-auto md:flex justify-between  items-center gap-5 mt-5">
        <div className="flex justify-center">
          <img src={picture_chef} className="w-9/12 rounded" alt="" />
        </div>
        <div>
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold text-center mt-2">{name}</h1>
          </div>
          <p className="text-xl mt-2">{description}</p>
          <div className="flex justify-evenly gap-2 mx-auto">
            <h1 className="text-xl font-semibold text-center mt-2 p-3 bg-slate-300 rounded-lg">
              {years_of_experience} Years of Experience
            </h1>
            <h1 className="text-xl font-semibold text-center mt-2 p-3 bg-slate-300 rounded-lg">
              {num_recipes} Recipes
            </h1>
            <h1 className="text-xl font-semibold text-center mt-2 p-3 bg-slate-300 rounded-lg">
              {likes} <FaHeart className="text-red-500 text-2xl"></FaHeart>
            </h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center mt-5">Recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-9/12 mx-auto my-container">
          {recipes.map((recipe) => (
            
            <Recipe  key={recipe.id} recipe={recipe}></Recipe>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default ChefDetails;