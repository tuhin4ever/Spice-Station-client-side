import React from "react";
import Banner from "./Banner";
import AllDataChefs from "../../../components/AllDataChefs";
import Contact from "../Section/Contact";
import Services from "../Section/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllDataChefs></AllDataChefs>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
};

export default Home;
