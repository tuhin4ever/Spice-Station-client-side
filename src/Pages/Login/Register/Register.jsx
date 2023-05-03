import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUserProfile ,setReload} = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const displayName = form.displayName.value;
    const photoURL = form.photoURL.value;

    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      if (loggedUser) {
        updateUserProfile({
          displayName,
          photoURL,
        })
        .then(()=>{
          setReload(new Date().getTime())
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });

        
        form.reset();
      }
    });
  };

  return (
    <div
      className="min-h-screen relative bg-cover bg-center flex justify-center items-center "
      style={{
        backgroundImage: `url("https://i.ibb.co/W6h0DcC/pexels-roman-odintsov-4551416.jpg")`,
      }}
    >
      <div className="p-10 mt-5  md:w-2/5 mx-auto shadow-xl rounded bg-white opacity-80">
        <form onSubmit={handleRegister}>
          <h4 className="font-bold text-center mb-4 text-orange-500">
            Please Register
          </h4>
          <div className="mb-6 ">
            <label htmlFor="text" className="block mb-2 text-sm font-medium ">
              Your Name
            </label>
            <input
              type="text"
              name="displayName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Name"
              required
            />
          </div>
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
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="photo" className="block mb-2 text-sm font-medium">
              Your Photo
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500">
              Already Have an Account ?{" "}
              <Link className="text-blue-500 hover:text-blue-700" to="/login">
                Login
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
