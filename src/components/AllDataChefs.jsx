import React, { useEffect, useState } from "react";
import SingleChef from "./SingleChef";
import LoadingSpinner from "../LoadingSpinner.jsx/LoadingSpinner";

const AllDataChefs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShoAll] = useState(false);
  useEffect(() => {
    fetch("https://spice-station-server-tuhin4ever.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const handleShowAll = () => {
    setShoAll(true);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10">Our Chefs</h1>
      <hr className="w-48 h-1 mx-auto  bg-gray-100 border-0 rounded mt-3 dark:bg-orange-700" />
      <div className="grid md:grid-cols-3 my-container">
        {data.slice(0, showAll ? 12 : 6).map((chef) => (
          <SingleChef key={chef.id} chef={chef}></SingleChef>
        ))}
      </div>
      <div className="text-center">
        {!showAll && (
          <span onClick={handleShowAll}>
            <button className="btn glass shadow-xl outline-red-500 text-orange-600">Show All</button>
          </span>
        )}
      </div>
    </>
  );
};

export default AllDataChefs;

// import React, { useEffect, useState } from "react";
// import SingleChef from "./SingleChef";
// import { FaSpinner } from "react-icons/fa";
// const AllDataChefs = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://spice-station-server.vercel.app/chef")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);
//   return (
//     <div className="grid md:grid-cols-3 my-container">
//       {data.map((chef) => (
//         <SingleChef key={chef.id} chef={chef}></SingleChef>
//       ))}
//     </div>
//   );
// };

// export default AllDataChefs;

{
  /* <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin h-12 w-12 text-orange-500" />
      </div> */
}
