import React, { useEffect, useState } from "react";
import SingleChef from "./SingleChef";

const AllDataChefs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://spice-station-server.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="grid md:grid-cols-3 my-container">
      {data.map((chef) => (
        <SingleChef key={chef.id} chef={chef}></SingleChef>
      ))}
    </div>
  );
};

export default AllDataChefs;