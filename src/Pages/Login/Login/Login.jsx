import React, { useContext, useEffect, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { singIn, singInWithGoogle, singInWithGithub } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from || "/";
  console.log("login page from", from);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    singIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        setSuccess("User logged in successfully");
        setError("");
        toast.success(`Welcome ${loggedUser.displayName} ✨`, {
          autoClose: 1500,
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.code);
      });
  };

  const handleGoogleSingIn = () => {
    singInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
        toast.success(`Welcome ${loggedUser.displayName} ✨`, {
          autoClose: 1500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const handleGithubSingIn = () => {
    singInWithGithub().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      toast
        .success(`Welcome ${loggedUser.displayName} ✨`, {
          autoClose: 1500,
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    });
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen relative bg-cover bg-center flex justify-center items-center "
      style={{
        backgroundImage: `url("https://i.ibb.co/W6h0DcC/pexels-roman-odintsov-4551416.jpg")`,
      }}
    >
      <div className="p-10 mt-5  md:w-2/5 mx-auto shadow-xl rounded bg-white opacity-80">
        <form onSubmit={handleSubmit}>
          <h4 className="font-bold text-center mb-4 text-orange-500">
            Please Login
          </h4>
          <div className="mb-6 ">
            <label htmlFor="email" className="block mb-2 text-sm font-medium ">
              Your email
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Your password
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Enter Your Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            <p onClick={() => setShow(!show)}>
              <small>
                {show ? <span>Hide Password</span> : <span>Show Password</span>}
              </small>
            </p>
          </div>
          <p className="text-red-500 text-sm mb-3">{error}</p>
          <p className="text-green-500 text-sm mb-3">{success}</p>
          <div className="flex items-start mb-6">
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500">
              Don't Have an Account ?{" "}
              <Link
                className="text-blue-500 hover:text-blue-700"
                to="/register"
              >
                Register
              </Link>
            </label>
          </div>
          
          <button
            type="submit"
            className="text-center text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-orange-600 dark:hover:bg-orange-700"
          >
            Login
          </button>
        </form>
        <div className="mt-5 text-center">
          <button onClick={handleGoogleSingIn} className="w-72 btn btn-outline">
            <FaGoogle className="m-2" /> Google Sign-in
          </button>
        </div>
        <div className="mt-5 text-center">
          <button
            onClick={handleGithubSingIn}
            className="w-72 btn btn-outline btn-accent"
          >
            <FaGithub className="m-2" />
            GitHub Sign-in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
