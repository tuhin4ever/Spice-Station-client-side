import React, { useEffect, useState } from "react";
import SingleChef from "./SingleChef";
import LoadingSpinner from "../LoadingSpinner.jsx/LoadingSpinner";
// import { FaSpinner } from "react-icons/fa";

const AllDataChefs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://spice-station-server.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <LoadingSpinner></LoadingSpinner>
    );
  }

  return (
    <div className="grid md:grid-cols-3 my-container">
      {data.map((chef) => (
        <SingleChef key={chef.id} chef={chef}></SingleChef>
      ))}
    </div>
  );
};

export default AllDataChefs;


// import React, { useEffect, useState } from "react";
// import SingleChef from "./SingleChef";

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

{/* <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin h-12 w-12 text-orange-500" />
      </div> */}
