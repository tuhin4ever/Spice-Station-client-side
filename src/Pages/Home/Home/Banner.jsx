import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url("https://i.ibb.co/9ZtTWdp/pexels-taryn-elliott-5107179.jpg")`,
      }}
    >
      <div className="bg-neutral opacity-40 min-h-full w-full absolute object-contain "></div>

      <div className="my-container text-white z-10">
        <div className="my-container text-white z-10 text-center">
          <h1 className="text-5xl font-bold">
            Welcome to{" "}
            <span className=" font-bold tracking-wide title-text">
              Spice Station
            </span>
          </h1>
          <p className="text-xl text-center text-orange-300 mt-2 ">
            Your go-to destination for high-quality spices and herbs from around
            the world!
          </p>
          <Link to="/error" className="btn btn-outline btn-warning w-72 mt-5">
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
