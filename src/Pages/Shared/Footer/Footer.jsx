import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8  divide-y ">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <span className="ml-2 text-xl font-bold tracking-wide text-orange-500">
            Spice Station
          </span>
          <p className="p-5">
            The Spice Station team believes that cooking should be an adventure
            and that everyone can create delicious, The best food delivery
            service in the world takes food safety seriously, ensuring that
            every meal is prepared and delivered following strict hygiene
            protocols, giving customers peace of mind and confidence in the
            quality of their food.
          </p>
          <img
            className="ml-4"
            src="https://i.ibb.co/XxXGpK1/footer-Logo.png"
            alt=""
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-wrap justify-around">
          <div>
            <h2 className="font-semibold text-orange-300 hover:text-orange-500 px-4 py-2">
              Company
            </h2>
            <ul className="text-center space-y-2">
              <li>About Us</li>
              <li>Food</li>
              <li>Latest Menu</li>
              <li>Station</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-orange-300 hover:text-orange-500 px-4 py-2">
              Product
            </h2>
            <ul className="text-center space-y-2">
              <li>Recipe </li>
              <li>Plans & Pricing</li>
              <li>Customers</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-orange-300 hover:text-orange-500 px-4 py-2">
              Support
            </h2>
            <ul className="text-center space-y-2">
              <li>Help Desk</li>
              <li>Sales</li>
              <li>Become a Partner</li>
              <li>Menu</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-orange-300 hover:text-orange-500 px-4 py-2">
              Contact
            </h2>
            <ul className="text-center space-y-2">
              <li>524 Broadway , NYC</li>
              <li>+1 777 - 978 - 5570</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap justify-between items-center mt-10 ">
        <p className="mt-5 text-gray-400 text-sm">
          &copy; 2023 Spice Station. All rights reserved.
        </p>
        <p className="mt-5 text-gray-400 text-sm">Powered by Spice Station</p>
      </div>
    </footer>
  );
};

export default Footer;
